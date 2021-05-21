const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://theAdmin:passwordpassword@cluster0.gmcqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDB instance');
});

mongoose.connection.on('error', (err) => {
    console.error('<><><><>Error connecting to mongoDB instance<><><><>', err);
});

app.get('/', (req,res) => {
    res.send('Hello there!');
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});