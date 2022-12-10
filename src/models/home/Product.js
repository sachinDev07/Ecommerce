const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  details: [
    {
      clotheImage: String,
      brandName: String,
      description: String,
      price: Number,
    },
  ],
});

module.exports = mongoose.model('h_products',ProductSchema);
