const User = require('../models/users');


function show(req, res) {
    User.findById(req.params.id, function (err, user) {
      console.log(user+'user show controler')
      user.recipe.findById({}, function (err, recipe) {  console.log(ticket+'user show controler'),
        res.render(":id/recipes/show", { title: "Recipe Details", recipe, user});
      });
    });
  }
  function newRecipe(req, res) {
    console.log('new RECP')
    User.findById(req.params.id, function (err, user) {
      console.log('new RECP')
      res.render("recipes/new", { user });
    });
  }

function create(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.recipe.push(req.body);
        user.save(function(err) {
            if (err) console.log(err);
        res.redirect(`/users/${user.id}`);
      });
    });
  }
 
module.exports = {
  create,
  show,
  new:newRecipe
};