const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    user_id: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TodoModel", TodoSchema);
