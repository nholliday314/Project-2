const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');

require('dotenv').config();
require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const raceRouter = require('./routes/raceRouter');
const racePlannerRouter = require('./routes/racePlanner');
const userRouter = require('./routes/userRouter');

// App connection 
const app = express();

// TODO: connect to Mongodb 
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });


// // setting up pages
// app.get('/races', (req, res) => {
//   res.send('Races Pages')
// })
// app.get('/raceplanner', (req, res) => {
//   res.send('Race Planner')
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// mount middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());



// TODO: connect our routers 
app.use('/user', userRouter)
app.use('/races', raceRouter)
app.use('/racePlanner', racePlannerRouter)

// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
	res.locals.user = req.user;
  next();
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
