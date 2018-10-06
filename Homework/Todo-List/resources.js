const express = require("express");
const router = express.Router();

router.use("/tasks", require("./resources/task"));

module.exports = router;
