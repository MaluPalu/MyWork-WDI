const express = require("express");
const router = express.Router();

router.get("/", require("./controllers/index"));

router.post("/", require("./controllers/create"));

module.exports = router;
