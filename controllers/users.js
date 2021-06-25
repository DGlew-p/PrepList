const Recipe = require("../models/recipes");
const User = require('../models/users');

function show(req, res) {
  User.findById(req.params.id, function (err, user) {
    Recipe.find({ user: req.params.id }, function (err, recipe) {
      res.render("users/show", { title: "Your Dashboard", user,recipe});
    });
  });
}


function index(req, res, next) {
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    res.render('users/index', { 
      users, 
      user: req.user,
      name: req.query.name, 
      sortKey,
     }); 
  });
}



  
  module.exports = {
    index,
    show
  };