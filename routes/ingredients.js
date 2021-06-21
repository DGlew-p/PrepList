var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/',ingredientsCtrl.index)
router.get('/new',ingredientsCtrl.new)
router.post('/',ingredientsCtrl.create)
router.get('/:id',ingredientsCtrl.show)