const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    expenseHead: { type: String, required: true },
    expenseAmount: { type: Number, default: 0 },
    payedTo: { type: String, default: "" },
    payDate: { type: String, default: `${new Date()}` },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", ExpenseSchema);
