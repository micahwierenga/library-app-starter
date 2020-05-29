const express = require('express');
const router = express.Router();
// WE NEED ACCESS TO THE CONTROLLERS IN ORDER TO DELIVER
// REQUESTS TO THEM
const authorsController = require('../controllers/authorsController');

router.get('/', authorsController.getAllAuthors);
router.get('/new', isLoggedIn, authorsController.getNewAuthorForm);
router.get('/:authorId', isLoggedIn, authorsController.getOneAuthor);
router.post('/', isLoggedIn, authorsController.createNewAuthor);
router.delete('/:authorIdToDelete', isLoggedIn, authorsController.deleteOneAuthor);
router.get('/:authorIdForEditForm/edit', isLoggedIn, authorsController.getEditAuthorForm);
router.put('/:authorIdToUpdate', isLoggedIn, authorsController.updateOneAuthor);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

// IN ORDER TO USE THESE ROUTES, WE MUST EXPORT THEM
module.exports = router;