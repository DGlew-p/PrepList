var express = require('express');
var router = express.Router();
const recipesCtrl= require('../controllers/recipes')
const request = require('request');


router.get('/:id/recipes/new',recipesCtrl.new)
router.get('/:id/recipes/:id',recipesCtrl.show)
router.post('/recipes/:id',recipesCtrl.update)


module.exports = router;
