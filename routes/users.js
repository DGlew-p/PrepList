var router = require('express').Router();
const usersCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/users', usersCtrl.index);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}





module.exports = router;
