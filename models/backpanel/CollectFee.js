const mongoose = require("mongoose");

const CollectFeeSchema = new mongoose.Schema(
  {
    student: { type: String, required: true },
    session: {
      type: String,
      default: `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`,
    },
    date: { type: String },
    formFees: { type: Number, default: 0 },
    admissionFees: { type: Number, default: 0 },
    termFees: { type: Number, default: 0 },
    kitFees: { type: Number, default: 0 },
    quater1Fees: { type: Number, default: 0 },
    quater2Fees: { type: Number, default: 0 },
    quater3Fees: { type: Number, default: 0 },
    quater4Fees: { type: Number, default: 0 },
    winterUniformFees: { type: Number, default: 0 },
    otherFees: { type: Number, default: 0 },
    previousYearFees: { type: Number, default: 0 },
    discountReason: { type: String, default: "" },
    dicountAmount: { type: Number, default: 0 },
    paymentMethod: { type: String, default: "cash" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CollectFee", CollectFeeSchema);
