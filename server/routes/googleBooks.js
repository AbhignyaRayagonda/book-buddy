const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/search',  async(req, res) => {
    const query = req.query.q;

    if(!query) {
        return res.status(400).json({error: "Missing query parameter"});
    }

    const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=30`;

    try {
        const response = await axios.get(url);
        res.json(response.data); //sending full response from the google
    } catch (error) {
        console.log("Google Books API Error:", error.message);
        console.error("Full error:", error.response?.data || error);
        res.status(500).json({error: "Failed to fetch books"});
    }
});

router.get('/:id', async(req, res) => {
    const {id} = req.params;

    const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);

    } catch(error) {
        console.log(error.message);
        res.status(404).json({error: "Book not found"})
    }
})

module.exports =router;