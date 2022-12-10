const mongoose = require("mongoose");

const NewProductSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  details: [
    {
      clothImage: String,
      brandName: String,
      description: String,
      price: Number,
    },
  ],
});

module.exports = mongoose.model('h_NewProducts',NewProductSchema);