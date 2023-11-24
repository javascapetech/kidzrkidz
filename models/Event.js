const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventName: {type: String, required: true},
    allDay: {type: Boolean, default: true},
    eventDate: {type: String, required: true},
    eventDesciption: {type: String, default: ""}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);