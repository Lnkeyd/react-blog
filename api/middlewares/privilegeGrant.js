const User = require("../models/User");

const checkRole = (role, secondRole) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.userId);

      if (secondRole) {
        if (user.level == role || user.level == secondRole) {
          next();
        } else {
          res.status(401).send("Non grant");
        }
      } else {
        if (user.level == role) {
          next();
        } else {
          res.status(401).send("Non grant");
        }
      }
    } catch (e) {
      res.status(500).send("Error occured");
    }
  };
};

module.exports = { checkRole };
