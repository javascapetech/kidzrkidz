const mongoose = require("mongoose");

const PanelClassSchema = new mongoose.Schema(
  {
    className: { type: String, required: true },
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
    ageGroup: {type: String, default: ""},
    schoolDuration: {type: String, default: ""},
    keyAreas: {type: Array, default: []},
    image: {type: String},
    imagePath: {type: String}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PanelClass", PanelClassSchema)