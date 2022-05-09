const express = require("express");
const app = express();
require("../src/db/conn");
const port = process.env.PORT || 3000;
const router = require("../src/routers/book");
const userRouter = require("../src/routers/userRoutes");
const http = require("http");
const server = http.createServer(app);
const dotenv = require("dotenv");
const logger = require("../src/utility/logger");
const path = require("path");
var cors = require("cors");
app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());
require("dotenv").config({ path: "../.env" });
dotenv.config();
app.use(express.json());
app.use(router);
app.use(userRouter);
app.get("/", async (req, res) => {
  res.send("Hello from the Book Store");
});
app.listen(port, () => {
  logger.info(`connection is live at port no. ${port}`);
});
