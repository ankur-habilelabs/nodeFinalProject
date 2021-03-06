const express = require("express");
const userRouter = new express.Router();
var userController = require("../controller/user");
require("dotenv").config();
const dotenv = require("dotenv");
require("dotenv").config({ path: "../../.env" });
dotenv.config();
const app = express();
app.use(express.json());
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/showUser", userController.showUser);
module.exports = userRouter;
