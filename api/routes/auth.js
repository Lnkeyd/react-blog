const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");
const { checkRole } = require("../middlewares/privilegeGrant");

//REGISTER
router.post("/register", auth, checkRole(3), async (req, res) => {
  const { username, email, password } = req.body;

  let user = await User.findOne({ $or: [{ username }, { email }] }).select("-password");
  if (user) {
    return res.status(400).json("User exists");
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });

    const user = await newUser.save();

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
      if (err) {
        console.log(err);
        return res.status(400).json("Error occured");
      } else {
        if (req.userId) {
          return res.status(200).json("User created");
        } else {
          res.cookie("token", token, { httpOnly: true, maxAge: process.env.JWT_EXPIRES_IN, overwrite: true });
          return res.status(200).json(token);
        }
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
      if (err) {
        console.log(err);
        return res.status(400).json("Error occured");
      } else {
        res.cookie("token", token, { httpOnly: true, maxAge: process.env.JWT_EXPIRES_IN, overwrite: true });
        return res.status(200).json(token);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json("User logged out");
  } catch (e) {
    console.log(e);
    return res.status(400).json("Error occured");
  }
});

module.exports = router;
