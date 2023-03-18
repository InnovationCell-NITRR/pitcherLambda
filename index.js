const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const PortfolioRoutes = require("./routes/portfolio");
const codeRoutes = require("./routes/codeRoutes");

app.use("/portfolios", PortfolioRoutes);
app.use("/api/v1", codeRoutes);

mongoose
  .connect(
    "mongodb+srv://lakshman08:b6WipDqxkcIsWIkr@cluster0.x5iwwjx.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Mongodb connected successfully"))
  .catch((issues) => console.log("issues " + issues));

if (process.env.ENVIRONMENT === "lambda") {
  module.exports.handler = serverless(app);
} else {
  app.listen(8000, () => {
    console.log("Server is Running")
  })
}
