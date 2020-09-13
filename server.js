const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();
connectDB();
app.use(express.json({extended: false}));
app.use(cors());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello Express!')
})

app.use('/api/users', require('./routes/user'));

app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})