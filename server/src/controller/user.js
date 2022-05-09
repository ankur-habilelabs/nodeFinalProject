const userBookStore = require("../models/userModal");
var jwt = require("jsonwebtoken");
const auth = require("../utility/jwt");
const User = require("../models/userModal");
const bcrypt = require("bcrypt");
var crypto = require("crypto");
const message = require("../utility/status");
const logger = require("../utility/logger");
exports.register = async (req, res) => {
  try {
    const { userName, userEmail, password } = req.body;
    if (!(userEmail && password && userName)) {
      res.status(message.badRequest).send("All input is required");
    }
    const oldUser = await User.findOne({ userEmail });
    if (oldUser) {
      return res
        .status(message.conflict)
        .send("User Already Exist. Please Login");
    }
    encryptedpassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      userName,
      userEmail: userEmail.toLowerCase(),
      password: encryptedpassword,
    });
    res.status(message.success).json(user);
  } catch (err) {
    logger.info("Internal Server Error");
  }
};
exports.showUser = async (req, res) => {
  try {
    const getUsers = await userBookStore.find({});
    res.status(message.created).send(getUsers);
  } catch (e) {
    res.status(message.badRequest).send(e);
  }
};
exports.login = async (req, res) => {
  try {
    const { userEmail, password } = req.body;
    if (!(userEmail && password)) {
      res.status(message.badRequest).send("All input is required");
    }
    const user = await User.findOne({ userEmail });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, userEmail },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      res.setHeader("x-access-token", token);
      res.status(message.success).json(token); //to set token in header
    }
  } catch (err) {
    logger.info("Internal Server Error");
  }
};
