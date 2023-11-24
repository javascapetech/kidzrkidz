const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    parentName: { type: String },
    contactNumber: { type: Number },
    class: {type: String},
    followUpDate: {type: String},
    inquiryDate: {type: String}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Inquiry", InquirySchema)