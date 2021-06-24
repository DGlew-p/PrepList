var express = require('express');
var router = express.Router();
const recipesCtrl= require('../controllers/recipes')
const request = require('request');


// router.get('/recipes',recipesCtrl.index)
router.post('/users/:id/recipes', recipesCtrl.create);
router.get('/:id/recipes/new',recipesCtrl.new)
router.get('/:id/recipes',recipesCtrl.show)
router.get('/:id/recipes/new',recipesCtrl.new)
router.get('/recipes/:id/edit',recipesCtrl.edit)



router.put('/recipes/:id',recipesCtrl.update)
router.delete('recipes/:id',recipesCtrl.delete)



module.exports = router;
