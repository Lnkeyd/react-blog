const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    level: {
      type: Number,
      required: true,
      default: 2,
      // 1 - user, 2 - moderator, 3 - admin
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
