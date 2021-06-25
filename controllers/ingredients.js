const Recipe = require('../models/recipes');


function create(req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
    recipe.ingredients.push(req.body);
    recipe.save(function(err) {
            if (err) console.log(err);
        res.redirect(`/recipes/${recipe._id}`);
      });
    });
  }

  function deleteIng(req, res) {
    Recipe.findById(req.params.id, async function(err, recipe) {
    await recpie.ingredients.findByIdAndDelete(req.params.id);
    res.redirect (`/recipes/${recipe._id}`);
  })
}

module.exports = {
  create,
  delete:deleteIng
};