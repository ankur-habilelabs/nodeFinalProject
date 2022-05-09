const mongoose = require("mongoose");
// THIS IS RETURNING PROMISE
const logger = require("../utility/logger");
mongoose
  .connect("mongodb://localhost:27017/BookStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("connection successful");
  })
  .catch((e) => {
    logger.info(e);
  });
