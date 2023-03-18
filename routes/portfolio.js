const express = require("express");
const router = express.Router();
const { getPortfolios, createPortfolio } = require("../controllers/portfolio");

router.get("/", getPortfolios);
router.post("/", createPortfolio);

module.exports = router;
