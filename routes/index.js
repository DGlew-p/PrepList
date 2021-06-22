var express = require('express');
var router = express.Router();
const passport = require('passport');
const User = require('../models/users');

/* GET home page. */
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/ingredients',
    failureRedirect : '/'
  }
));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});

module.exports = router;
