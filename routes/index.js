var express = require('express');
var router = express.Router();
const passport = require('passport');


// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/users');
});
  //// reDir From Login-Button to Google
  
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));


/// handles the return from the consent screen
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));


router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});




module.exports = router;
