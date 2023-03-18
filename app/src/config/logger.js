// const { transport } = require("winston");
const { createLogger, transports, format } = require("winston");
const { combine, colorize, timestamp, simple, printf, label } = format;

const printFormat = printf(({timestamp, label, level, message}) =>{
    return `${timestamp} [${label}] ${level}: ${message}`
})

const printLogFormat = {
    file:
        combine(
            label({
                label: "BACK END"
            }),
            timestamp({
                format: "YYYY-MM-DD HH:mm:dd"
            }),
            printFormat
        ),
    console:
        combine(
            colorize(),
            simple(),
        ),
}

const opts = {
    file: new transports.File({
        dirname: "./logs",
        filename: "access.log", 
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
    }),
}

const logger = createLogger({
    transports:[opts.file]
})


if(process.env.NODE_ENV !== "production"){
    logger.add(opts.console)
}
module.exports = logger;