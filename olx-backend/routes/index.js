const express = require("express");
const router = express.Router();


router.use('/olx', require('./olxAds'))


module.exports = router
