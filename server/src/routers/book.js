const express = require("express");
const router = new express.Router();
const bookStoreData = require("../models/book");
const auth = require("../utility/jwt");
var bookController = require("../controller/book");
router.post("/v1", auth, bookController.addBook);
router.get("/v1/getBook", auth, bookController.getBooks);
router.get("/v1/:id", auth, bookController.getBook);
router.patch("/v1/:id", auth, bookController.updateBook);
router.delete("/v1/:id", auth, bookController.deleteBook);
module.exports = router;
