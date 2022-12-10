const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
    email:String,
});

module.exports = mongoose.model('queries',Contact);