const Inquiry = require("../../models/backpanel/Inquiry")
const router = require("express").Router()

// ADD Inquiry

router.post("/", async (req, res) => {
    const newInquiry = new Inquiry(req.body)
    try {
        const savedInquiry = await newInquiry.save();
        res.status(200).json(savedInquiry);
    } catch (err) {
        res.status(500).json("Some error occured while creating an Inquiry: " + err);
    }
})

// GET ALL ENQUIRIES

router.get("/", async (req, res) => {
    try {
        const allInquiry = await Inquiry.find();
        res.status(200).json(allInquiry);
    } catch (err) {
        res.status(500).json("Some error occured while getting all Inquiry: " + err);
    }
})

// UPDATE Inquiry

router.put("/:id", async (req, res) => {
    try {
        const updatedInquiry = await Inquiry.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedInquiry);
    } catch (err) {
        res.status(500).json("Some error occured while Updating a Inquiry: " + err);
    }
})

// DELETE Inquiry

router.delete("/:id", async (req, res) => {
    try {
        await Inquiry.findByIdAndDelete(req.params.id);
        res.status(200).json("Inquiry is successfully deleted");
    } catch (err) {
        res.status(500).json("Some error occured while deleting a Inquiry: " + err);
    }
})

module.exports = router;