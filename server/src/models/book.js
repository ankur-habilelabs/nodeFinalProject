const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    trim: true,
  },
  bookDescription: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    required: true,
    trim: true,
    type: String,
  },
  image: {
    trim: true,
    type: String,
  },
});
const bookStoreData = new mongoose.model("BookStoreData", bookSchema);
module.exports = bookStoreData;
