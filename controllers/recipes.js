const Recipe = require("../models/recipes");
const User = require('../models/users');

  function newRecipe(req, res) {
    console.log('new RECP')
    User.findById(req.params.id, function (err, user) {
      Recipe.find({ user: req.params.id }, function (err, recipe) {
      console.log(recipe+'RCP new controler')
     res.render("recipes/new",{user,recipe});
    });
  });
  }

  function create(req, res) {
    const recipe = new Recipe(req.body);
    recipe.save(function (err, cat) {
      if (err) {
        console.log(err);
      }
      console.log(recipe+'create R'), 
      res.redirect(`/users/${user.id}/recipe/${user.id}`);
    });
  }



function show(req, res) {
  User.findById(req.params._id, function (err, user) {
      Recipe.find({users:user}, function (err, recipe) {  
        console.log(user+'recip show controler USER')
        console.log(recipe+'recip show controler'),
        res.render("recipes/show", { title: "Recipe Details", recipe, user});
      });
    });
  }







function update(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        recipe.push(req.body);
        save(function(err) {
            if (err) console.log(err);
        res.redirect(`/users/${user.id}`);
      });
    });
  }

  function deleteOne(req,res){
    Recipe.deleteOne(req.params.id);
    res.redirect(`/users/${user.id}`);
   }
   
    
   function edit(req,res){
     let id =req.params.id
     let recipeObj = Recipe.getOne(id)
    res.render('edit.ejs',{recipe:recipeObj})
   } 

 
 
module.exports = {
 
  show,
  new:newRecipe,
  create,
  delete:deleteOne ,
  edit,
  update
 

};