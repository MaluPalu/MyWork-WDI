const express = require("express");
const router = express.Router();

router.use("/persons", require("./resources/persons"));

module.exports = router;
