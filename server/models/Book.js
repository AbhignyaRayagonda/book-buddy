const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {type: String, required:true},
    author: {type: String, required:true},
    genre: {type:String},
    publishedYear:{type: Number},
    coverImage: {type:String}

}, {collection: 'books'});

module.exports = mongoose.model('Book', BookSchema)