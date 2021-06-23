const ingredients = require('../models/ingredients');
const User = require('../models/users');

  function newRecipe(req, res) {
    console.log('new RECP')
    User.findById(req.params.id, function (err, user) {console.log(user.id.recipe+'new R USER'),
      res.render("recipes/new",{user});
    });
  }

function show(req, res) {
    User.findById(req.params.id, function (err, user) {
      console.log(user+'user show controler')
      user.recipe.findById({}, function (err, recipe) {  console.log(recipe+'user show controler'),
        res.render(":id/recipes/show", { title: "Recipe Details", recipe, user});
      });
    });
  }

function update(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.recipe.push(req.body);
        user.save(function(err) {
            if (err) console.log(err);
        res.redirect(`/users/${user.id}`);
      });
    });
  }
 
module.exports = {
  update,
  show,
  new:newRecipe
};