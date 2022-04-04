const express = require("express");
const router = express.Router();
const StringController = require('../controllers/string.controller')


router.get("/",(req, res) => {
    const string = StringController.getString();
    res.send(string);
})


module.exports = router;