const app = require("../app");
const logger = require("../src/config/logger")
const port = process.env.PORT || 3000;



app.listen(port, () => {
    logger.info(`localhost:${port} 사용중`);
});


