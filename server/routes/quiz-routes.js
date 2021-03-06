const express = require("express");
const Quiz = require("../models/Quiz");
const router = express.Router();

/**
 * @route   GET api/quizzes
 * @desc    Get all quizzes
 * @access  Public
 */
router.get("/", (req, res, next) => {
    Quiz.getAllQuizzes((err, quizzes) => {
        if(err) return next(err);
        if(!quizzes) return next("No quizzes found.");
        res.json(quizzes);
    });
});

/**
 * @route   GET api/quizzes/with-answers
 * @desc    Get all quizzes with answers
 * @access  Public
 */
router.get("/with-answers", (req, res, next) => {
    Quiz.getAllQuizzesWithAnswers((err, quizzes) => {
        if(err) return next(err);
        if(!quizzes) return next("No quizzes found.");
        res.json(quizzes);
    });
});

/**
 * @route   GET api/quizzes/:slug
 * @desc    Get one quiz by slug
 * @access  Public
 */
router.get("/:slug", (req, res, next) => {
    Quiz.getQuizBySlug(req.params.slug, (err, quiz) => {
        if(err) return next(err);
        if(!quiz) return next("No quiz found.");
        res.json(quiz);
    });
});

/**
 * @route   GET api/quizzes/description/:slug
 * @desc    Get one quiz description (no questions) by slug
 * @access  Public
 */
router.get("/description/:slug", (req, res, next) => {
    Quiz.getQuizDescriptionBySlug(req.params.slug, (err, quiz) => {
        if(err) return next(err);
        if(!quiz) return next("No quiz found.");
        res.json(quiz);
    });
});

module.exports = router;