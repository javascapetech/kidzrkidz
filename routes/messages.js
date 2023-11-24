const Messages = require("../models/Message")
const router = require("express").Router()

// CREATE

router.post("/", async (req, res) => {
    const newMessages = new Messages(req.body)
    try {
        const savedMessages = await newMessages.save();
        res.status(200).json(savedMessages);
    } catch (err) {
        res.status(500).json("Some error occured while creating a Messages: " + err);
    }
})

// GET

router.get("/", async (req, res) => {
    try {
        const allMessagess = await Messages.find();
        res.status(200).json(allMessagess);
    } catch (err) {
        res.status(500).json("Some error occured while getting all Messages: " + err);
    }
})

// DELETE

router.delete("/:id", async (req, res) => {
    try {
        await Messages.findByIdAndDelete(req.params.id);
        res.status(200).json("Message Deleted !!");
    } catch (err) {
        res.status(500).json("Some error occured while getting all Messages: " + err);
    }
})

module.exports = router;