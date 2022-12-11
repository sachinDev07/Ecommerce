const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String,
});

module.exports = mongoose.model('contact-form',ContactSchema);