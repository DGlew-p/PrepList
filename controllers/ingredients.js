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

  // function deleteIng(req, res) {
  //   console.log('Delete ing')
  //  Recipe.find({}, function(err, recipe){ 
  //   recipe.itemSchema.id.findByIdAndDelete(req.params.itemSchema_id)
  //   res.redirect (`/recipes/`);
  //  })
  // }
  
  

module.exports = {
  create,
  // delete:deleteIng
};