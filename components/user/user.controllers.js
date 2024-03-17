const UserModel = require("./models/user.model");

// Example controller methods
exports.getAll = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
