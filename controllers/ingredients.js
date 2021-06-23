const Recipe = require("../models/recipes");
// const User = require('../models/users');


function create(req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
    recipe.ingredient.push(req.body);
    recipe.save(function(err) {
            if (err) console.log(err);
        res.redirect(`/recipe/${recipe._id}`);
      });
    });
  }


module.exports = {
  create,

};