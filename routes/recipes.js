var express = require('express');
var router = express.Router();
const recipesCtrl= require('../controllers/recipes')
const request = require('request');

router.post('/',recipesCtrl.create)
router.get('/:id',recipesCtrl.show)
router.get('/:id/recipes/new',recipesCtrl.new)



module.exports = router;
