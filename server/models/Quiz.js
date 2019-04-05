const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        required: true
    }
}, { collection: "quizzes" });

module.exports = Quiz = mongoose.model("Quiz", QuizSchema);

module.exports.getAllQuizzes = (callback) => {
    Quiz.find({}, { 'title': 1, 'description': 1, 'slug': 1 }, callback);
}

module.exports.getAllQuizzesWithAnswers = (callback) => {
    Quiz.find({}, callback);
}

module.exports.getQuizBySlug = (slug, callback) => {
    Quiz.findOne({ "slug": slug }, callback);
}

module.exports.getQuizDescriptionBySlug = (slug, callback) => {
    Quiz.findOne({ "slug": slug }, { 'title': 1, 'description': 1, 'slug': 1 }, callback);
}