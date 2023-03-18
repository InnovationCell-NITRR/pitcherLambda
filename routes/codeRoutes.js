const express = require("express");
const { alredyLoggedIn, loginUser } = require("../controllers/userController.js");
const isAuthenticate = require("../middlewares/Authentication.js");

const router = express.Router();

// router.post("/upload_codes", upload_codes);
router.post("/login", loginUser);
router.post("/is_logged_in", isAuthenticate, alredyLoggedIn);

module.exports = router;
