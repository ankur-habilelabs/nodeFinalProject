var multer = require("multer");
var Stroge = multer.diskStorage({
  destination: (req, file, next) => {
    next(
      null,
      "/home/habilelabs/ankur/habilelabs/nodejs/self code office/day 13 project/new both (another copy)/frontend/public/images"
    );
  },
  filename: (req, file, next) => {
    next(null, file.originalname);
  },
});
var upload = multer({
  storage: Stroge,
}).single("image");
module.exports = upload;
