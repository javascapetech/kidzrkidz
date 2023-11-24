const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, default: "", required: true },
    class: { type: String, default: "" },
    session: { type: String, default: `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`,},
    kitNumber: { type: Number },
    fatherName: { type: String, default: "" },
    motherName: { type: String, default: "" },
    dateOfBirth: { type: String, default: "" },
    dateOfAdmission: { type: String, default: "" },
    van: { type: String, default: "" },
    gender: { type: String, default: "" },
    summerUniformSize: { type: Number },
    winterUniformSize: { type: Number },
    address1: { type: String, default: "" },
    address2: { type: String, default: "" },
    mobile1: { type: String, default: "" },
    mobile2: { type: String, default: "" },
    status: { type: String, default: "" },
    image: { type: String, default: "" },
    path: { type: String, default: "" },
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
    presentOn: {type: Array, default: []}
  },
  {timestamps: true}
);

module.exports = mongoose.model("Student", StudentSchema);
