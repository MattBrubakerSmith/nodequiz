const express = require("express");
const User = require("../models/User");
const router = express.Router();

/**
 * @route   POST api/users
 * @desc    User login
 * @access  Public
 */
router.post("/", (req, res, next) => {
    User.getByUserId(req.body.userId, (err, user) => {
        if(err) return next(err);
        if(!user) return next("No user found.");
        res.json(user);
    });
});

/**
 * @route   PATCH api/users
 * @desc    Submit user quiz answers
 * @access  Public
 */
router.patch("/", (req, res, next) => {
    User.submitQuizAnswers(req.body.userId, req.body.quizId, req.body.answers, req.body.score, (err, user) => {
        if(err) return next(err);
        if(!user) return next("No user found.");
        res.json(user);
    });
});

/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Public
 */
router.get("/", (req, res, next) => {
    User.getAllUsers((err, users) => {
        if(err) return next(err);
        if(!users) return next("No users found.");
        res.json(users);
    });
});

module.exports = router;