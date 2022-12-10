const mongoose = require('mongoose');

const CallToActionSchema = new mongoose.Schema([
        {
            bgImage:String,
            title:String,
            subTitle:String,
            description:String,
            url:String,
        }
    ]
);

module.exports = mongoose.model('h_CallToAction',CallToActionSchema);