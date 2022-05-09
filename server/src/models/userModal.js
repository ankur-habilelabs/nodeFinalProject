const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: String,
  userEmail: {
    type: String,
    unique: true,
    require: "Please Enter Email Address",
  },
  password: String,
  token: { type: String },
});
const userBookStore = new mongoose.model("userBookStore", userSchema);
module.exports = userBookStore;
