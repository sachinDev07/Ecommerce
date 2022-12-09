const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    bgImage:String,
    link:String,
    titleOne:String,
    titleTwo:String,
    subTitle:String,
    paragraph:String,
});

module.exports = mongoose.model('heroDetails',HeroSchema);