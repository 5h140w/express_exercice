const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  deleteUserById,
  creationUser,
  updateUser,
} = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/all", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUserById);
userRouter.post("/", creationUser);
userRouter.put("/:id", updateUser);

module.exports = userRouter;
