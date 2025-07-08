const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Book Buddy Backend is Running");
});

app.listen(PORT, () => {
    console.log(`SERVER is running on http://localhost:${PORT}`);
});

