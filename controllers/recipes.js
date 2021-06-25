const Recipe = require("../models/recipes");
const User = require("../models/users");

function newRecipe(req, res) {
  console.log("new RECP");
  User.findById(req.params.id, function (err, user) {
    Recipe.find({ user: req.params.id }, function (err, recipe) {
      console.log(recipe + "RCP new controler");
      res.render("recipes/new", { user, recipe });
    });
  });
}

function create(req, res) {
  const recipe = new Recipe(req.body);
  recipe.save(function (err, cat) {
    if (err) {
      console.log(err);
    }
    console.log(recipe + "create R"),
      res.redirect(`/recipes/${recipe.id}`);
  });
}


function show(req, res) {
  Recipe.findById(req.params.id, function (err, recipe) {
    console.log(recipe + "recip show controler"),
      res.render("recipes/show", { title: "Recipe Details", recipe });
  });
}

function edit(req, res) {
  Recipe.findById(req.params.id, function (err, recipe){
  res.render("recipes/edit", { recipe});
});
}

async function update(req, res) {
  await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(recipe) {
    res.redirect(`/recipes/${recipe.id}`);
  });
}


// function update(req, res) {
//   Recipe.findById(req.params.id, function (err, recipe) {
//     recipe.push(req.body);
//     save(function (err) {
//       if (err) console.log(err);
//       res.redirect(`/recipes/${recipe.id}`);
//     });
//   });
// }


async function deleteOne(req, res) {
  await Recipe.findByIdAndDelete(req.params.id);
  res.redirect (`/users/`);
}



module.exports = {
  show,
  new: newRecipe,
  create,
  delete: deleteOne,
  edit,
  update,
};
