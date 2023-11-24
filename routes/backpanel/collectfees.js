const CollectedFees = require("../../models/backpanel/CollectFee")
const router = require("express").Router()

// ADD CollectedFees

router.post("/", async (req, res) => {
    const newCollectedFees = new CollectedFees(req.body)
    try {
        const savedCollectedFees = await newCollectedFees.save();
        res.status(200).json(savedCollectedFees);
    } catch (err) {
        res.status(500).json("Some error occured while creating an CollectedFees: " + err);
    }
})

// GET ALL FEES

router.get("/", async (req, res) => {
    try {
        const allCollectedFees = await CollectedFees.find();
        res.status(200).json(allCollectedFees);
    } catch (err) {
        res.status(500).json("Some error occured while getting all CollectedFees: " + err);
    }
})

// GET FEES BY S TUDENT NAME

router.get("/std/:studentname", async (req, res) => {
    try {
        const collectedfees = await CollectedFees.find({student: req.params.studentname});
        res.status(200).json(collectedfees);
    } catch (err) {
        res.status(500).json("Some error occured while getting all CollectedFees: " + err);
    }
})

// GET FEES

router.get("/:id", async (req, res) => {
    try {
        const collectedfee = await CollectedFees.findById(req.params.id);
        res.status(200).json(collectedfee);
    } catch (err) {
        res.status(500).json("Some error occured while getting all CollectedFees: " + err);
    }
})

// UPDATE CollectedFees

router.put("/:id", async (req, res) => {
    try {
        const updatedCollectedFees = await CollectedFees.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedCollectedFees);
    } catch (err) {
        res.status(500).json("Some error occured while Updating a CollectedFees: " + err);
    }
})

// DELETE CollectedFees

router.delete("/:id", async (req, res) => {
    try {
        await CollectedFees.findByIdAndDelete(req.params.id);
        res.status(200).json("CollectedFees is successfully deleted");
    } catch (err) {
        res.status(500).json("Some error occured while deleting a CollectedFees: " + err);
    }
})

module.exports = router;