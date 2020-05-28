const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

require('./config/database');

// WE NEED TO IMPORT OUR ROUTES IN ORDER TO MOUNT THEM BELOW
const indexRouter = require('./routes/indexRoutes');
const usersRouter = require('./routes/usersRoutes');
const authorsRouter = require('./routes/authorsRoutes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// WE NEED TO MOUNT OUR ROUTES SO THEY CAN THE NEXT STEP IN
// DIRECTING REQUESTS TO THE PROPER CONTROLLER
// if the request url begins with a slash (and they all do), see if
// the indexRouter has a match for the request url. if not, move on
// to the next router.
app.use('/', indexRouter);
// if the request url begins with /users, see if the usersRouter has
// a match for the request url. if not, move on to the next router.
app.use('/users', usersRouter);
app.use('/authors', authorsRouter);

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
