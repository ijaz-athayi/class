const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({ 
    host: "localhost",
    user: "root",
    password: "",
    database: "sample"
});

// Connect to the database and handle errors
db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.message);
        return;
    }
    console.log("Connected to MySQL database");
});

// Signup route
app.post("/signup", (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [req.body.name, req.body.email, req.body.password];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Database error" });
        }
        return res.status(200).json({ message: "User registered successfully", result });
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND `password` = ?";
    db.query(sql, [req.body.email,req.body.password ], (err, data) => {
    if(err) {
    return res.json("Error");
    }
    if(data.length > 0) {
    return res.json("Success");
    } else {
    return res.json("Faile");
    }
    })
})

// Start the server
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});