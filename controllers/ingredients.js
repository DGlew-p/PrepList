const Recipe = require('../models/recipes');
const User = require('../models/users');


function create(req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
    console.log('INGT R'+recipe)
    recipe.ingredients.push(req.body);
    recipe.save(function(err) {
            if (err) console.log(err);
            console.log('INGT CREAT')
        res.redirect(` /users/${user._id}/recipe/${recipe._id}`);
      });
    });
  }
 

module.exports = {
  create,

};