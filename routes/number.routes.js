const express = require("express");
const router = express.Router();
const NumberController = require('../controllers/number.controller');

router.get("/", (req, res) => {
    const number = NumberController.getNumber();
    res.send(number);
})

module.exports = router;