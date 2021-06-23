
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');


require('dotenv').config();


var app = express();
require('./config/database');

require('./config/passport');


var indexRoutes = require('./routes/index');
var usersRoutes = require('./routes/users');
var recipesRouter = require('./routes/recipes');
// const preplistsRouter = require("./routes/preplists");
// const ingredientsRouter = require("./routes/ingredients");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: 'PrepList1',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/', indexRoutes);
app.use('/', usersRoutes);
app.use('/', recipesRouter);
// app.use('/',preplistsRouter)
// app.use('/',ingredientsRouter)


app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
