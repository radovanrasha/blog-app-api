const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.dbName,
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL server.");
});

const app = express();
const port = 3006;

// Middleware to parse JSON bodies
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
