const Employees = require("../../models/backpanel/Employee")
const router = require("express").Router()

// ADD Employees

router.post("/", async (req, res) => {
    const newEmployees = new Employees(req.body)
    try {
        const savedEmployees = await newEmployees.save();
        res.status(200).json(savedEmployees);
    } catch (err) {
        res.status(500).json("Some error occured while creating an Employees: " + err);
    }
})

// GET ALL ENQUIRIES

router.get("/", async (req, res) => {
    try {
        const allEmployees = await Employees.find();
        res.status(200).json(allEmployees);
    } catch (err) {
        res.status(500).json("Some error occured while getting all Employees: " + err);
    }
})

// UPDATE Employees

router.put("/:id", async (req, res) => {
    try {
        const updatedEmployees = await Employees.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedEmployees);
    } catch (err) {
        res.status(500).json("Some error occured while Updating a Employees: " + err);
    }
})

// DELETE Employees

router.delete("/:id", async (req, res) => {
    try {
        await Employees.findByIdAndDelete(req.params.id);
        res.status(200).json("Employees is successfully deleted");
    } catch (err) {
        res.status(500).json("Some error occured while deleting a Employees: " + err);
    }
})

module.exports = router;