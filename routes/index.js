const express = require("express");
const router = express.Router();

const stringRoutes = require('./string.routes');
const objectRoutes = require('./object.routes');
const numberRoutes = require('./number.routes');
const bigIntRoutes = require('./bigInt.routes');
const booleanRoutes = require('./boolean.routes');

router.use("/string", stringRoutes);
router.use("/object", objectRoutes);
router.use("/number", numberRoutes);
router.use("/bigInt", bigIntRoutes);
router.use("/boolean", booleanRoutes);


module.exports = router;