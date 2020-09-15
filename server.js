const express = require('express');
const cors = require('cors');

require('dotenv').config()
const connectDB = require('./config/db');


const app = express();
connectDB();
app.use(express.json({extended: false}));
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello Express!')
})

app.use('/api/users', require('./routes/user'));

app.listen(process.env.PORT, () => {
    console.log(`Server up on port ${process.env.PORT}`)
})