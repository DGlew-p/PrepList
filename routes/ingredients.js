var express = require('express');
var router = express.Router();
const request = require('request');
const ingredientsCtrl = require("../controllers/ingredients");


router.post('/recipes/:id/ingredients',ingredientsCtrl.create)
router.delete('/ingredients/:id',ingredientsCtrl.delete)

module.exports = router;