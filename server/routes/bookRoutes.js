const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Book = require('../models/Book'); //importing the Book model

//route to search books
router.get('/search', async(res, req) => {
    try {
        const {query} = req.query;
        const books = await Book.find({
            $or: [
                {title: {$regex: query, $options: 'i'}},
                {author: {$regex: query, $options: 'i'}},
            ]
        });
        res.json(books);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


//route to all books
router.get('/', async(req, res)=>{
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error){
        res.status(500).json({message:error.message});
    }
}) 
//connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));


//insert test
// router.get('/insert-test', async (req, res) =>{
//     await Book.create({title: 'Test Book', author: 'Test Author'});
//     res.send("Test book inserted");
// });

router.get('/insert-test', async (req, res) => {
  try {
    await Book.create([
      { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
      { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" }
    ]);
    res.send("Test books added to your 'books' collection!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;