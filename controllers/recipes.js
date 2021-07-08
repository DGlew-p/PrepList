const Recipe = require("../models/recipes");
const User = require("../models/users");

function newRecipe(req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) console.log(err);
    Recipe.find({ user: req.params.id }, function (err, recipe) {
      if (err) console.log(err);
      res.render("recipes/new", { user, recipe });
    });
  });
}

function create(req, res) {
  const recipe = new Recipe(req.body);
  recipe.save(function (err) {
    if (err) console.log(err);
    res.redirect(`/recipes/${recipe.id}/edit`);
  });
}

function show(req, res) {
  Recipe.findById(req.params.id, function (err, recipe) {
    if (err) console.log(err);
    res.render("recipes/show", { title: "Recipe Details", recipe });
  });
}

function edit(req, res) {
  Recipe.findById(req.params.id, function (err, recipe) {
    if (err) console.log(err);
    res.render("recipes/edit", { recipe });
  });
}

function update(req, res) {
  Recipe.findByIdAndUpdate(req.params.id, req.body, function (err, recipe) {
    if (err) console.log(err);
    res.redirect(`/recipes/${recipe.id}`);
  });
}

async function deleteOne(req, res) {
  await Recipe.findByIdAndDelete(req.params.id, function (err, recipe) {
    if (err) console.log(err);
    res.redirect(`/users/${recipe.user}`);
  });
}

module.exports = {
  show,
  new: newRecipe,
  create,
  delete: deleteOne,
  edit,
  update,
};
