const mongoose = require("mongoose");
const libSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: false
    },
    authorName: {
        type: String,
        required: true
    },
    authorDescription: {
        type: String,
        required: true
    },
    authorLoDescription: {
        type: String,
        required: true
    },
    authorBooks: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', libSchema);

module.exports = Book;