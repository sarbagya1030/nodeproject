const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  password: {
    type: String,
    minLength: 6,
    required: true,
  },
});

module.exports = mongoose.model("UserModel", UserSchema);
