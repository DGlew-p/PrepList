var express = require('express');
var router = express.Router();
const recipesCtrl= require('../controllers/recipes')
const request = require('request');


// router.get('/recipes',recipesCtrl.index)
router.get('/:id/recipes',recipesCtrl.show)
router.get('/:id/recipes/new',recipesCtrl.new)
router.get('/recipes/:id/edit',recipesCtrl.edit)
router.post('/recipes', recipesCtrl.create);
router.put('/recipes/:id',recipesCtrl.update)
router.delete('recipes/:id',recipesCtrl.delete)



module.exports = router;
