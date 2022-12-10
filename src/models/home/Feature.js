const mongoose = require('mongoose');

const FeatureSchema = new mongoose.Schema({
    iconUrl:String,
    title:String,
});

module.exports = mongoose.model('h_feature',FeatureSchema);