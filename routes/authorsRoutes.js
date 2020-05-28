const express = require('express');
const router = express.Router();
// WE NEED ACCESS TO THE CONTROLLERS IN ORDER TO DELIVER
// REQUESTS TO THEM
const authorsController = require('../controllers/authorsController');


router.get('/', authorsController.getAllAuthors);




// IN ORDER TO USE THESE ROUTES, WE MUST EXPORT THEM
module.exports = router;