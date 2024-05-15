const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
};

const findUserById = async (req, res, next) => {
  try {
    req.user = await users.findById(req.params.id);
    next();
  } catch (err) {
    res.status(404).send({ message: "User not found" });
  }
};

const createUser = async (req, res, next) => {
  try {
    req.user = await users.create(req.body);
    next();
  } catch (err) {
    res.status(400).send({ message: "error creating user" });
  }
};

const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (err) {
    res.status(400).send({ message: "error updating user" });
  }
};

const checkEmptyNameAndEmail = async (req, res, next) => {
  if (!req.body.username || !req.body.email) {
    res.status(400).send({ message: "Введите имя и емаил" });
  } else {
    next();
  }
};

const deleteUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(400).send({ message: "error deleting user" });
  }
};

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  checkEmptyNameAndEmail,
  deleteUser,
};
