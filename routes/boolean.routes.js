const express = require("express");
const router = express.Router();
const BooleanController = require('../controllers/boolean.controller');

router.get("/", (req, res) => {
    const boolean = BooleanController.getBoolean();
    res.send(boolean);
})

module.exports = router;