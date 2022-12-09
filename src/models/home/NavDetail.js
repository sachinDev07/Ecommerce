const mongoose = require("mongoose");

const NavSchema = new mongoose.Schema({
  brandIcon: String,
  cartIcon:String,
  cartUrl:String,
  links: [
    {
      label: String,
      url: String,
    },
  ],
});

module.exports = mongoose.model("navDetails", NavSchema);
