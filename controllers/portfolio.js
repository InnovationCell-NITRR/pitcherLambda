const express = require("express");
const mongoose = require("mongoose");

const Portfolio = require("../models/portfolio");

const router = express.Router();

const getPortfolios = async (req, res) => {
  try {
    const portfolio = await Portfolio.find();

    res.status(200).json(portfolio);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

const createPortfolio = async (req, res) => {
  const {name, about, tags, selectedFile} = req.body;

  const newPortfolio = new Portfolio({
    name,
    about,
    tags,
    selectedFile,
  });

  try {
    await newPortfolio.save();

    res.status(201).json(newPortfolio);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

module.exports = { getPortfolios, createPortfolio };
