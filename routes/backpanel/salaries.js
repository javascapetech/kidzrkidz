const Salaries = require("../../models/backpanel/Salary")
const router = require("express").Router()

// ADD Salaries

router.post("/", async (req, res) => {
    const newSalaries = new Salaries(req.body)
    try {
        const savedSalaries = await newSalaries.save();
        res.status(200).json(savedSalaries);
    } catch (err) {
        res.status(500).json("Some error occured while creating an Salaries: " + err);
    }
})

// GET ALL Salaries

router.get("/", async (req, res) => {
    try {
        const allSalaries = await Salaries.find();
        res.status(200).json(allSalaries);
    } catch (err) {
        res.status(500).json("Some error occured while getting all Salaries: " + err);
    }
})

// GET SINGLE Salaries

router.get("/:id", async (req, res) => {
    try {
        const SingleClass = await Salaries.findById(req.params.id);
        res.status(200).json(SingleClass);
    } catch (err) {
        res.status(500).json("Some error occured while getting a Salaries: " + err);
    }
})

// UPDATE Salaries

router.put("/:id", async (req, res) => {
    try {
        const updatedSalaries = await Salaries.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedSalaries);
    } catch (err) {
        res.status(500).json("Some error occured while Updating a Salaries: " + err);
    }
})

// DELETE Salaries

router.delete("/:id", async (req, res) => {
    try {
        await Salaries.findByIdAndDelete(req.params.id);
        res.status(200).json("Salaries is successfully deleted");
    } catch (err) {
        res.status(500).json("Some error occured while deleting a Salaries: " + err);
    }
})

module.exports = router;