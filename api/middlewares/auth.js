const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  // берется jwt-токен из cookies
  const token = req.cookies.token;

  // если токен не существует, ошибка
  if (!token) {
    return res.status(401).json("Error occured");
  }

  // иначе декод jwt и переприсвоение user (из payload) на req.user
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = mongoose.Types.ObjectId(decoded.user.id);
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json("Error occured");
  }
};
