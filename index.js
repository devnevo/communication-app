const express = require('express');
const dbConnect = require('./config/db');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profile = require('./routes/profile');

const port = process.env.PORT || 5000;

dbConnect();

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use('/api/profile', profile);


app.listen(port, ()=>{
    console.log(`App is running at http://localhost:${port}`);
})