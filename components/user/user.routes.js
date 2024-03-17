const express = require("express");
const router = express.Router();
const userController = require("./user.controllers");

// Define your routes here
router.get("/users", userController.getAll);
//   .post("/users", userController.create);
// router.put("/user/:id", userController.update);
// router.delete("/user/:id", userController.delete);

module.exports = router;
