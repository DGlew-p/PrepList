const Ingredient = require("../models/ingredients");

function newIngredient(req, res) {
  res.render("ingredients/new");
}

function create(req, res) {
  const ingredient = new Ingredient(req.body);
  ingredient.save(function (err, cat) {
    if (err) {
      console.log(err);
      return res.render("/ingredients");
    }
    res.redirect("/ingredients");
  });
}

function index(req, res) {
    Ingredient.find({}, function (err, ingredient) {
    res.render("ingredients/index", { ingredient });
  });
}

function show(req, res) {
    Ingredient.find({}, function (err, ingredient) {
      res.render("ingredients/show");
    });
}

module.exports = {
  new: newIngredient,
  create,
  index,
  show,
};