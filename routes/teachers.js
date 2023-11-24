const Teacher = require("../models/Teacher")
const router = require("express").Router()

// CREATE

router.post("/", async (req, res) => {
    const newTeacher = new Teacher(req.body)
    try {
        const savedTeacher = await newTeacher.save();
        res.status(200).json(savedTeacher);
    } catch (err) {
        res.status(500).json("Some error occured while creating a Teacher: " + err);
    }
})

// GET ALL TEACHERS

router.get("/", async (req, res) => {
    try {
        const allTeacheres = await Teacher.find();
        res.status(200).json(allTeacheres);
    } catch (err) {
        res.status(500).json("Some error occured while getting all Teachers: " + err);
    }
})

// UPDATE WEB Teacher

router.put("/:id", async (req, res) => {
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedTeacher);
    } catch (err) {
        res.status(500).json("Some error occured while Updating a Teacher: " + err);
    }
})

// DELETE TEACHER

router.delete("/:id", async (req, res) => {
    try {
        await Teacher.findByIdAndDelete(req.params.id);
        res.status(200).json("Teacher is successfully deleted");
    } catch (err) {
        res.status(500).json("Some error occured while deleting a Teacher: " + err);
    }
})

module.exports = router;