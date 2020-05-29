const express = require('express');
const router = express.Router();
// WE NEED ACCESS TO THE CONTROLLERS IN ORDER TO DELIVER
// REQUESTS TO THEM
const booksController = require('../controllers/booksController');

router.get('/', booksController.getAllBooks);
router.get('/new', isLoggedIn, booksController.getNewBookForm);
router.get('/:bookId', isLoggedIn, booksController.getOneBook);
router.post('/', isLoggedIn, booksController.createNewBook);
router.delete('/:bookIdToDelete', isLoggedIn, booksController.deleteOneBook);
router.get('/:bookIdForEditForm/edit', isLoggedIn, booksController.getEditBookForm);
router.put('/:bookIdToUpdate', isLoggedIn, booksController.updateOneBook);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

// IN ORDER TO USE THESE ROUTES, WE MUST EXPORT THEM
module.exports = router;