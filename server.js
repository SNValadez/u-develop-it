const mysql = require("mysql2");

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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


app.get("/api/candidates", (req, res) =>{
    const sql = `SELECT * FROM candidates`;

    db.query(sql, (err, rows) => {
if (err) {
    res.status(500).json({ error: err.message });
    return;
    }
    res.json({
        message: "success",
        data: rows
        });
    });
});
// db.query(`SELECT * FROM candidates WHERE id=1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});