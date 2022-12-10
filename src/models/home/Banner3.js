const mongoose = require('mongoose');

const Banner3Schema = new mongoose.Schema([
        {
            bgImage:String,
            title:String,
            description:String,
        }
    ]
);

module.exports = mongoose.model('h_banner3',Banner3Schema);