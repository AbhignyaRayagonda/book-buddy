const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

require('dotenv').config();
const app = express();


app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json()); //to parse JSON bodies
//importing bookroutes
const bookRoutes = require('./routes/bookRoutes'); 

const PORT = process.env.PORT || 3000;

app.use('/books', bookRoutes); //all book routes will start with /books

app.get('/', (req, res) => {
    res.send("Book Buddy Backend is Running");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

app.listen(PORT, () => {
    console.log(`SERVER is running on http://localhost:${PORT}`);
});

const googleBooksRoutes = require('./routes/googleBooks');
app.use('/api/google-books', googleBooksRoutes); 
