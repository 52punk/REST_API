const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const postsRoute = require("./routes/posts");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//ROUTES

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("DB Connected");
});

app.listen(3000);
