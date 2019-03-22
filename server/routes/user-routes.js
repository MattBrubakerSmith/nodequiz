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

module.exports = router;