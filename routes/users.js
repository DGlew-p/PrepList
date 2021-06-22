var router = require('express').Router();
const usersCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/users', usersCtrl.index);

router.get("/:id", usersCtrl.show);

// router.post("/", usersCtrl.create);
// router.get("/new", usersCtrl.new);








// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }





module.exports = router;
