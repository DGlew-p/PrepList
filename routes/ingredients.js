var express = require('express');
var router = express.Router();
const request = require('request');
const ingredientsCtrl = require("../controllers/ingredients");


router.post('/recpies/:id/ingredients',ingredientsCtrl.create)


module.exports = router;