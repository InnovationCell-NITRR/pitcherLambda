const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const nameCodeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  userStock: {
    type: Number,
    default: 100,
  },
  buyHistory: [
    {
      portfolio_id: {
        type: String,
      },
      boughtStock: {
        type: Number,
      },
    },
  ],
});

nameCodeSchema.methods.getJWTToken = async function (next) {
  return await jwt.sign({ id: this._id }, "dhfsdahfskdhfksdhfsd", {
    expiresIn: "7d",
  });
};

var CodeModel = mongoose.model("Code", nameCodeSchema);

module.exports = CodeModel;
