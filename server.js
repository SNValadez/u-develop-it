

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");
const inputCheck = require('./utils/inputCheck');



// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRoutes);






  
// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log("Database connected.");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});