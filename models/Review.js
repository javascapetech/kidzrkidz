const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    Review: {type: String, required: true},
    ReviewSender: {type: String, required: true},
    isVisible: {type: Boolean, default: false}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);