const Reviews = require("../models/Review")
const router = require("express").Router()

// CREATE

router.post("/", async (req, res) => {
    const newReviews = new Reviews(req.body)
    try {
        const savedReviews = await newReviews.save();
        res.status(200).json(savedReviews);
    } catch (err) {
        res.status(500).json("Some error occured while creating a Reviews: " + err);
    }
})

// GET ALL Reviews

router.get("/", async (req, res) => {
    try {
        const allReviewss = await Reviews.find();
        res.status(200).json(allReviewss);
    } catch (err) {
        res.status(500).json("Some error occured while getting all Reviews: " + err);
    }
})

// GET VISIBLE REVIEWS

router.get("/visible/", async (req, res) => {
    try {
        const allReviewss = await Reviews.find();
        const visibleReviews = []
        allReviewss.map((review) => {
            if (review.isVisible === true) {
                visibleReviews.push(review)
            }
        })
        res.status(200).json(visibleReviews);
    } catch (err) {
        res.status(500).json("Some error occured while getting Visible Reviews: " + err);
    }
})

// GET not VISIBLE REVIEWS

router.get("/notvisible/", async (req, res) => {
    try {
        const allReviewss = await Reviews.find();
        const notvisibleReviews = []
        allReviewss.map((review) => {
            if (review.isVisible === false) {
                notvisibleReviews.push(review)
            }
        })
        res.status(200).json(notvisibleReviews);
    } catch (err) {
        res.status(500).json("Some error occured while getting InVisible Reviews: " + err);
    }
})

// EDIT Reviews

router.put("/:id", async (req, res) => {
    try {
        const updatedReviews = await Reviews.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedReviews);
    } catch (err) {
        res.status(500).json("Some error occured while Updating a Reviews: " + err);
    }
})
// DELETE Reviews

router.delete("/:id", async (req, res) => {
    try {
        await Reviews.findByIdAndDelete(req.params.id);
        res.status(200).json("Reviews is successfully deleted");
    } catch (err) {
        res.status(500).json("Some error occured while deleting a Reviews: " + err);
    }
})

module.exports = router;