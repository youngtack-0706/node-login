const mysql = require("mysql")

const db = mysql.createConnection({
    host: "업로드용으로 가림",
    user: "admin",
    password: "qlslfn1234!",
    database: "node_login"
});

db.connect();

module.exports = db;