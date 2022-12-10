const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    bgImage:String,
    title:String,
    subTitle:String,
    url:String,
});

module.exports = mongoose.model('h_Banner',BannerSchema);