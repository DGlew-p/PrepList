var express = require('express');
var router = express.Router();
const recipesCtrl= require('../controllers/recipes')
const request = require('request');


router.get('/new',recipesCtrl.new)
router.post('/',recipesCtrl.create)
router.get('/:id',recipesCtrl.show)

module.exports = router;
