const Students = require("../../models/backpanel/Student");
const router = require("express").Router();

// ADD Students

router.post("/", async (req, res) => {
  const newStudent = new Students(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json(savedStudent);
  } catch (err) {
    res
      .status(500)
      .json("Some error occured while creating an Student: " + err);
  }
});

// GET ALL STUDENTS

router.get("/", async (req, res) => {
  try {
    const allStudents = await Students.find();
    res.status(200).json(allStudents);
  } catch (err) {
    res.status(500).json("Some error occured while getting a Students: " + err);
  }
});

// GET SINGLE Students

router.get("/:id", async (req, res) => {
  try {
    const SingleStudent = await Students.findById(req.params.id);
    res.status(200).json(SingleStudent);
  } catch (err) {
    res.status(500).json("Some error occured while getting a Students: " + err);
  }
});

// LOGIN STUDENTS

router.get("/login/:mobile1/:mobile2", async (req, res) => {
  try {
    const SingleStudent = await Students.findOne({mobile1: req.params.mobile1, mobile2: req.params.mobile2});
    res.status(200).json(SingleStudent);
  } catch (err) {
    res.status(500).json("Some error occured while loggin in a Student: " + err);
  }
});

// UPDATE Students

router.put("/:id", async (req, res) => {
  try {
    const updatedStudents = await Students.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStudents);
  } catch (err) {
    res
      .status(500)
      .json("Some error occured while Updating a Students: " + err);
  }
});

// DELETE Student

router.delete("/:id", async (req, res) => {
  try {
    await Students.findByIdAndDelete(req.params.id);
    res.status(200).json("Students is successfully deleted");
  } catch (err) {
    res
      .status(500)
      .json("Some error occured while deleting a Students: " + err);
  }
});

module.exports = router;