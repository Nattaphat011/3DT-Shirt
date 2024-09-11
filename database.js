const mysql = require("mysql2");
const dbConnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_project",
}).promise();

module.exports = dbConnection;