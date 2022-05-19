const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const file = require("./multer");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookies = require("cookie-parser");

dotenv.config();
app.use(express.json({ extended: false }));
app.use(bodyParser.json());
app.use(cookies());
app.use(cors());
app.use(file.any("images"));
app.use("/api/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.post("/api/upload", file.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
  console.log("Backend is running...");
});