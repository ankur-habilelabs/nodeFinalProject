const bookStoreData = require("../models/book");
const upload = require("../utility/storage");
const message = require("../utility/status");
const logger = require("../utility/logger");
exports.addBook = async (req, res) => {
  try {
    console.log(req.body);
    upload(req, res, (err) => {
      if (err) return res.send(err);

      var bookData = new bookStoreData({
        bookName: req.body.bookName,
        bookDescription: req.body.bookDescription,
        author: req.body.author,
        price: req.body.price,
        image: req.file.filename,
      });
      bookData
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.json(err);
        });
    });
  } catch (e) {
    res.status(message.badRequest).send(e);
  }
};
exports.getBooks = async (req, res) => {
  try {
    const getbooks = await bookStoreData.find({}).sort({ ranking: 1 });
    res.status(message.success).send(getbooks);
  } catch (e) {
    res.status(message.badRequest).send(e);
  }
};
exports.getBook = async (req, res) => {
  try {
    const _id = req.params.id;
    const getbook = await bookStoreData.findById(_id);
    res.send(getbook);
  } catch (e) {
    res.status(message.badRequest).send(e);
  }
};
exports.updateBook = async (req, res) => {
  try {
    upload(req, res, (err) => {
      if (err) return res.json(err);
      bookStoreData
        .updateOne(
          { _id: req.params.id },
          {
            $set: {
              bookName: req.body.bookName,
              bookDescription: req.body.bookDescription,
              author: req.body.author,
              price: req.body.price,
              image: req.file.filename,
            },
          }
        )
        .then((result) => {
          res.status(message.success).send(req.file);
        })
        .catch((err) => {
          res.status(message.badRequest).send("Unable to data Save");
        });
    });
  } catch (e) {
    res.status(message.badRequest).send(e);
  }
};
exports.deleteBook = async (req, res) => {
  try {
    const getbook = await bookStoreData.findByIdAndDelete(req.params.id);
    res.send(`data with id : ${req.params.id} is deleted`);
  } catch (e) {
    res.status(message.serverError).send(e);
  }
};
