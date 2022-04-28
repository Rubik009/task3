const express = require("express");
const router = express.Router();
const ObjectController = require('../controllers/object.controller');

router.get("/",(req, res) => {
    const object = ObjectController.getObject();
    res.send(object);
})

module.exports = router;

