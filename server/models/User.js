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
        required: true
    }
}, { collection: "users" });

module.exports = User = mongoose.model("User", UserSchema);

module.exports.getByUserId = (userId, callback) => {
    let query = { userId: userId };
    User.findOne(query, callback);
}

module.exports.submitQuizAnswers = (userId, quizId, answers, score, callback) => {
    let query = { userId: userId };
    User.findOne(query, (err, user) => {
        if(err) {
            callback(err);
            return;
        }

        if(!user) {
            callback(null, null);
            return;
        }

        if(user.quizResults.length <= 0) {
            let quizResults = {
                quizId: quizId,
                answers: answers,
                score: score
            };
            user.quizResults.push(quizResults);
            user.save();
            callback(null, quizResults);
            return;
        }

        for(let qr of user.quizResults) {
            if(qr.quizId == quizId) {
                qr.answers = answers;
                qr.score = score;
                user.save();
                callback(null, qr);
                return;
            }
        }

        let quizResults = {
            quizId: quizId,
            answers: answers,
            score: score
        };

        user.quizResults.push(quizResults);
        user.save();
        callback(null, quizResults);
    });
}

module.exports.getAllUsers = callback => {
    User.find({}, callback);
}