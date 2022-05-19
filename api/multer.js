const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    var body = { ...req.body };
    cb(null, body.name.replace(/:/g, "-"));
  },
});

const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
    // res.status(422);
  }
};

module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5000000 },
});
