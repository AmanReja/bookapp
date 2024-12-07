require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*"
  })
);

app.get("/", (req, res) => {
  res.send("This is my home page");
});

const seller_controller = require("./controller/seller_controller");
app.use("/seller", seller_controller);

const user_controller = require("./controller/user_controller");
app.use("/user", user_controller);

const admin_controller = require("./controller/admin_controller");
app.use("/admin", admin_controller);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
