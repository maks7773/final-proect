const {
  sendUserCreated,
  sendAllUsers,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require("../controllers/users");
const { checkAuth } = require("../middlewars/auth");
const {
  findAllUsers,
  createUser,
  updateUser,
  checkEmptyNameAndEmail,
  deleteUser,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
} = require("../middlewars/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/me", checkAuth, sendMe);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);


usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);


usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);


module.exports = usersRouter;
