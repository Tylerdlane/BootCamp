//Bring in mongoose
const mongoose = require('mongoose');

// Define the schema for the Book entity
const bookSchema = new mongoose.Schema({
    title: {
             type: String,
             required: true,      
    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    }
});

//Compile the Schema intot a model - will use Books collection and follow blueprint bookSchema
const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;

