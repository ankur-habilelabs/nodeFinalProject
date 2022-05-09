const jwt = require("jsonwebtoken");
const config = process.env;
const message = require("../utility/status");
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res
      .status(message.forbidden)
      .send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(message.unauthorized).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
