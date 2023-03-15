const mysql = require("mysql")

const db = mysql.createConnection({
    host: "node-login.caocid6om0g1.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "qlslfn1234!",
    database: "node_login"
});

db.connect();

module.exports = db;