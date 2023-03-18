const CodeModel = require("../models/codeModel");
const jwt = require("jsonwebtoken");

const isAuthenticate = async (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({
        error: "Token is required",
      });
    }
    const decodedData = await jwt.verify(token, "dhfsdahfskdhfksdhfsd");
    if (!decodedData)
      return res.status(400).json({
        error: "Incorrect token",
      });

    req.id = decodedData.id;

    next();
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

module.exports = isAuthenticate;
