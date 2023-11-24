const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    studentName: {type: String, required: true},
    class: {type: String},
    session: {type: String},
    fatherName: {type: String},
    motherName: {type: String},
    dateOfBirth: {type: String},
    dateOfAdmission: {type: String},
    gender: {type: String},
    address1: {type: String},
    address2: {type: String},
    mobileNumber1: {type: Number},
    mobileNumber2: {type: Number},
    status: {type: String},
    image : {type: String},
    path: {type: String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", FormSchema);