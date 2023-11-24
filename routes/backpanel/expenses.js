const Expenses = require("../../models/backpanel/Expense")
const router = require("express").Router()

// ADD Expenses

router.post("/", async (req, res) => {
    const newExpenses = new Expenses(req.body)
    try {
        const savedExpenses = await newExpenses.save();
        res.status(200).json(savedExpenses);
    } catch (err) {
        res.status(500).json("Some error occured while creating an Expenses: " + err);
    }
})

// GET ALL Expenses

router.get("/", async (req, res) => {
    try {
        const allExpenses = await Expenses.find();
        res.status(200).json(allExpenses);
    } catch (err) {
        res.status(500).json("Some error occured while getting all Expenses: " + err);
    }
})

// GET SINGLE Expenses

router.get("/:id", async (req, res) => {
    try {
        const SingleClass = await Expenses.findById(req.params.id);
        res.status(200).json(SingleClass);
    } catch (err) {
        res.status(500).json("Some error occured while getting a Expenses: " + err);
    }
})

// UPDATE Expenses

router.put("/:id", async (req, res) => {
    try {
        const updatedExpenses = await Expenses.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedExpenses);
    } catch (err) {
        res.status(500).json("Some error occured while Updating a Expenses: " + err);
    }
})

// DELETE Expenses

router.delete("/:id", async (req, res) => {
    try {
        await Expenses.findByIdAndDelete(req.params.id);
        res.status(200).json("Expenses is successfully deleted");
    } catch (err) {
        res.status(500).json("Some error occured while deleting a Expenses: " + err);
    }
})

module.exports = router;