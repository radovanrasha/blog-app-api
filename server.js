const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const userRoutes = require("./components/user/user.routes");
const sequelize = require("./config/database");

dotenv.config();

const app = express();
const port = 3006;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => console.error("Unable to connect to the database:", error));

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
