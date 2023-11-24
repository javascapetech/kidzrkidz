const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    teacherName: {type: String, required: true},
    teacherImage: {type: String, required: true},
    imagePath: {type: String, required: true},
    teacherClass: {type: String, default: ""}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);