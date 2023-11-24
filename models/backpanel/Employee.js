const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    salary: {type: Number, default: 6500},
    email: {type: String, default: ""},
    accountNumber: {type: Number, default: 0},
    mobileNumber: {type: Number, default: 0},
    work: {type: String, default: "teacher"}
  },
  {timestamps: true}
);

module.exports = mongoose.model("Employee", EmployeeSchema);