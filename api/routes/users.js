const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const auth = require("../middlewares/auth");
const { checkRole } = require("../middlewares/privilegeGrant");
const path = require("path");
const fs = require("fs");

// get current user
router.get("/", auth, async (req, res) => {
  try {
    const expectedUser = await User.findById(req.userId).select("-password");
    return res.status(200).json(expectedUser);
  } catch (e) {
    res.clearCookie("token");
    res.status(500).json("User not found");
  }
});

//UPDATE
router.put("/:id", auth, checkRole(2, 3), async (req, res) => {
  const currentUser = await User.findById(req.userId);

  if (currentUser.level === 2) {
    if (req.userId != req.params.id) {
      return res.status(401).json("You can update only your account!");
    }
  }

  try {
    let foundUser = await User.findById(req.params.id);
    var newUser = { ...req.body };

    if (foundUser.profilePic && req.body.profilePic) {
      const oldPath = path.join(__dirname, "../images/", foundUser.profilePic);
      fs.unlink(oldPath, (err) => {
        if (err) {
          console.log("1 unliking image error " + err);
        }
      });
      newUser.profilePic = foundUser._id + req.body.profilePic;
    } else if (req.body.profilePic) {
      newUser.profilePic = foundUser._id + req.body.profilePic;
    }

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(req.body.password, salt);
    }

    // await user.save();
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: newUser,
      },
      { new: true }
    ).select("-password");
    res.status(200).json(updatedUser);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

//DELETE
router.delete("/:id", auth, checkRole(2, 3), async (req, res) => {
  const currentUser = await User.findById(req.userId);

  if (currentUser.level === 2) {
    if (req.userId != req.params.id) {
      return res.status(401).json("You can update only your account!");
    }
  }

  if (req.userId == req.params.id) {
    res.clearCookie("token");
  }

  try {
    const user = await User.findById(req.params.id);
    try {
      await Post.deleteMany({ username: user.username });
      await User.findByIdAndDelete(req.params.id);
      const imagePath = path.join(__dirname, "../images/", user.profilePic);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.log(" 2unliking image error " + err);
        }
      });
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(404).json("User not found!");
  }
});

router.get("/all/:level", auth, checkRole(3), async (req, res) => {
  var level = req.params.level ? req.params.level : 2;
  try {
    const users = await User.find({ level }).select("-password");
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json("Error occured");
  }
});

//GET USER
router.get("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
