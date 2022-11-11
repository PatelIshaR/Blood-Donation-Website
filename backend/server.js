const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("connection established");
})

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const banksRouter = require('./routes/banks');
app.use('/banks', banksRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});