const mongoose = require("mongoose");

const SalarySchema = new mongoose.Schema(
  {
    employee: { type: String, required: true },
    salary: { type: Number },
    month: { type: String },
    leaves: { type: Number },
    increament: { type: Number },
    decreament: { type: Number },
    year: { type: Number },
    totalSalary: { type: Number }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Salary", SalarySchema);