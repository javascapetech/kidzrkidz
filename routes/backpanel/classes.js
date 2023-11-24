const Classes = require("../../models/backpanel/Class")
const router = require("express").Router()

// ADD Classes

router.post("/", async (req, res) => {
    const newClasses = new Classes(req.body)
    try {
        const savedClasses = await newClasses.save();
        res.status(200).json(savedClasses);
    } catch (err) {
        res.status(500).json("Some error occured while creating an Classes: " + err);
    }
})

// GET ALL Classes

router.get("/", async (req, res) => {
    try {
        const allClasses = await Classes.find();
        res.status(200).json(allClasses);
    } catch (err) {
        res.status(500).json("Some error occured while getting all Classes: " + err);
    }
})

// GET SINGLE Classes

router.get("/:id", async (req, res) => {
    try {
        const SingleClass = await Classes.findById(req.params.id);
        res.status(200).json(SingleClass);
    } catch (err) {
        res.status(500).json("Some error occured while getting a Classes: " + err);
    }
})

// UPDATE Classes

router.put("/:id", async (req, res) => {
    try {
        const updatedClasses = await Classes.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedClasses);
    } catch (err) {
        res.status(500).json("Some error occured while Updating a Classes: " + err);
    }
})

// DELETE Classes

router.delete("/:id", async (req, res) => {
    try {
        await Classes.findByIdAndDelete(req.params.id);
        res.status(200).json("Classes is successfully deleted");
    } catch (err) {
        res.status(500).json("Some error occured while deleting a Classes: " + err);
    }
})

module.exports = router;