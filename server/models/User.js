const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    quizResults: {
        type: Array,
        required: false
    }
});

module.exports = User = mongoose.model("User", UserSchema);

module.exports.getByUserId = (userId, callback) => {
    let query = { userId: userId };
    User.findOne(query, callback);
}