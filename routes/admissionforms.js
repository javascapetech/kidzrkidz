const Forms = require("../models/AdmissionForm")
const router = require("express").Router()

// CREATE

router.post("/", async (req, res) => {
    const newForm = new Forms(req.body)
    try {
        const savedForms = await newForm.save();
        res.status(200).json(savedForms);
    } catch (err) {
        res.status(500).json("Some error occured while creatin a Forms: " + err);
    }
})

// GET ALL FORMS

router.get("/", async (req, res) => {
    try {
        const allForms = await Forms.find();
        res.status(200).json(allForms);
    } catch (err) {
        res.status(500).json("Some error occured while getting all Forms: " + err);
    }
})

// GET SINGLE FORMS

router.get("/:id", async (req, res) => {
    try {
        const SingleForm = await Forms.findById(req.params.id);
        res.status(200).json(SingleForm);
    } catch (err) {
        res.status(500).json("Some error occured while getting a Form: " + err);
    }
})

// DELETE FORMS

router.delete("/:id", async (req, res) => {
    try {
        await Forms.findByIdAndDelete(req.params.id);
        res.status(200).json("Forms is successfully deleted");
    } catch (err) {
        res.status(500).json("Some error occured while deleting a Forms: " + err);
    }
})

module.exports = router;