const Recipe = require("../models/recipes");

function create(req, res) {
  Recipe.findById(req.params.id, function (err, recipe) {
    recipe.ingredients.push(req.body);
    recipe.save(function (err) {
      if (err) console.log(err);
      res.redirect(`/recipes/${recipe._id}`);
    });
  });
}


function deleteIng(req, res) {
  Recipe.findOne({ "ingredients._id": req.params.id }, function (err, recipe) {
    console.log(recipe+' RESULT')
    recipe.ingredients.id(req.params.id).remove();
    recipe.save();
    res.redirect(`/recipes/${recipe.id}`);
  });
}


module.exports = {
  create,
  delete: deleteIng,
};

