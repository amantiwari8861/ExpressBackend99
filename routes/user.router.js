const { addUser, deleteUser, getAllUsers, getUserById, updateUser } = require("../controller/user.controller");

const userRouter = require("express").Router();

// http://127.0.0.1:5000/api/v1/users/greet
userRouter.get("/greet", (req, res) => {
  res.send("Hello Aman Sir!");
});
// REST  -> REpresentational State Transfer

userRouter.get("/", getAllUsers); // http://127.0.0.1:5000/api/v1/users
userRouter.get("/:id", getUserById); // http://127.0.0.1:5000/api/v1/users/100
userRouter.post("/", addUser); // http://127.0.0.1:5000/api/v1/users
userRouter.put("/:id", updateUser); // http://127.0.0.1:5000/api/v1/users/100
userRouter.delete("/:id", deleteUser); // http://127.0.0.1:5000/api/v1/users/100

module.exports = userRouter;
