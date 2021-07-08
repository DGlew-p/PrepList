const Recipe = require("../models/recipes");
const Ingredient = require("../models/ingredients");
var mongoose = require('mongoose')

function create(req, res) {
  Recipe.findById(req.params.id, function (err, recipe) {
    recipe.ingredients.push(req.body);
    recipe.save(function (err) {
      if (err) console.log(err);
      res.redirect(`/recipes/${recipe._id}/edit`);
    });
  });
}

function deleteIng(req, res) {
  Recipe.findOne({ "ingredients._id": req.params.id }, function (err, recipe) {
    recipe.ingredients.id(req.params.id).remove();
    recipe.save();
    if (err) console.log(err);
    res.redirect(`/recipes/${recipe.id}/edit`);
  });
}


module.exports = {
  create,
  delete: deleteIng,
};
