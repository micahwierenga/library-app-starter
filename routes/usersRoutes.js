var express = require('express');
var router = express.Router();

/* GET users listing. */
// if the HTTP verb is GET and the full url path is /users/
// (which is the same as /users after the domain)
// then use the included callback controller
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('authorsViews/index')
});

module.exports = router;
