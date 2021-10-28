const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "sn33k31000CD!",
        database: "election"
    },
    console.log("Connected to the election database.")
);

module.exports = db;