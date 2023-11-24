const Users = require("../../models/backpanel/User")
const router = require("express").Router()

// ADD Users

router.post("/", async (req, res) => {
    const newUsers = new Users(req.body)
    try {
        const savedUsers = await newUsers.save();
        res.status(200).json(savedUsers);
    } catch (err) {
        res.status(500).json("Some error occured while creating an Users: " + err);
    }
})

// GET ALL Users

router.get("/", async (req, res) => {
    try {
        const allUsers = await Users.find();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json("Some error occured while getting all Users: " + err);
    }
})

// LOGIN 

router.post("/login", async (req, res) => {
    try {
        const SavedUser = await Users.findOne({username: req.body.username});
        if (req.body.password === SavedUser.password) {
            res.status(200).json(SavedUser);
        } else {
            res.json("Wrong password")
        }
    } catch (err) {
        res.json("Not found " + err);
    }
})

// GET SINGLE Users

router.get("/:id", async (req, res) => {
    try {
        const SingleClass = await Users.findById(req.params.id);
        res.status(200).json(SingleClass);
    } catch (err) {
        res.status(500).json("Some error occured while getting a Users: " + err);
    }
})

// UPDATE Users

router.put("/:id", async (req, res) => {
    try {
        const updatedUsers = await Users.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedUsers);
    } catch (err) {
        res.status(500).json("Some error occured while Updating a Users: " + err);
    }
})

// DELETE Users

router.delete("/:id", async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json("Users is successfully deleted");
    } catch (err) {
        res.status(500).json("Some error occured while deleting a Users: " + err);
    }
})

module.exports = router;