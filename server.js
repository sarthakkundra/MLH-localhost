const express = require('express');

const connectDB = require('./config/db');

const app = express();
connectDB();

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello Express!')
})

app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})