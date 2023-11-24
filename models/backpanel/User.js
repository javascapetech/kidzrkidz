const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user: {type: String},
    username: {type: String, required: true, unique: true},
    type: {type: String, default: "teacher"},
    password: {type: String, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);