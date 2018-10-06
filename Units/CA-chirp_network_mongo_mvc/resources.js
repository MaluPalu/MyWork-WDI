const express = require("express");
const router = express.Router();

router.use("/chirps", require("./resources/chirps"));

module.exports = router;
