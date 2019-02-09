// https://treehouse.github.io/installation-guides/mac/mongo-mac.html
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const api = require("./routes/api");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/resthub", { useNewUrlParser: true });
const db = mongoose.connection;

app.use("/api", api);

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Running RestHub on port " + port);
});
