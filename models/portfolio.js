const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema({
  name: String,
  about: String,
  creator: String,
  tags: [String],
  stock: {
    type: Number,
    default: 100,
  },
  selectedFile: String,
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
