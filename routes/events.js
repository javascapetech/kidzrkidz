const Events = require("../models/Event");
const router = require("express").Router();

// CREATE

router.post("/", async (req, res) => {
  const newEvents = new Events(req.body);
  try {
    const savedEvents = await newEvents.save();
    res.status(200).json(savedEvents);
  } catch (err) {
    res.status(500).json("Some error occured while creatin a Events: " + err);
  }
});

// GET ALL Events

router.get("/", async (req, res) => {
  try {
    const allEvents = await Events.find();
    const updatedEvents = allEvents.map((event) => ({
      name: event.eventName,
      date: event.eventDate,
      extra: {
        text: event.eventDesciption,
      },
      allDay: true
    }));
    res.status(200).json(updatedEvents);
  } catch (err) {
    res
      .status(500)
      .json("Some error occured while getting all Eventses: " + err);
  }
});

// UPDATE Event

router.put("/:id", async (req, res) => {
  try {
    const updatedEvents = await Events.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedEvents);
  } catch (err) {
    res.status(500).json("Some error occured while Updating a Events: " + err);
  }
});

// DELETE Events

router.delete("/:id", async (req, res) => {
  try {
    await Events.findByIdAndDelete(req.params.id);
    res.status(200).json("Events is successfully deleted");
  } catch (err) {
    res.status(500).json("Some error occured while deleting a Events: " + err);
  }
});

module.exports = router;
