const express = require("express");
const router = express.Router();
const BigNumberController = require('../controllers/bigInt.controller');

router.get("/", (req, res) => {
    const number = BigNumberController.getNumber();
    res.send(number);
})

module.exports = router;