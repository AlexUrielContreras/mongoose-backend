const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

///// DO NOT FORGET TO REQUIRE THE ROUTES
app.use(require('./routes'))

mongoose.set('debug', true)
app.listen(PORT, () => console.log(`Now Listening on Port: ${PORT}`))