const express = require("express");
const mongoose = require("mongoose");

const UserModel = require("./models/User");
const TodoModel = require("./models/Todo");
const todo = require("./routes/todo");

const app = express();

app.use("/todo", todo);

mongoose.set("strictQuery", false);
const mongoDB = "mongodb://localhost:27017/todo";

mongoose.connect("mongodb://127.0.0.1:27017/todo");

app.listen(3000, () => {
  console.log("server is up and running in port 3000");
});
