const express = require("express");
const User = require("../models/User");
const router = express.Router();

/**
 * @route   POST api/users
 * @desc    User login
 * @access  Public
 */
router.post("/", (req, res) => {
    User.getByUserId(req.body.userId, (err, user) => {
        if(err) {
            return res.status(500).send("There was an error logging in the user.");
        }

        if(!user) {
            return res.status(404).send("No user found.");
        }

        res.status(200).send(user);
    });
});

module.exports = router;