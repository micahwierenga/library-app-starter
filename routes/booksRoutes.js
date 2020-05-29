const express = require('express');
const router = express.Router();
// WE NEED ACCESS TO THE CONTROLLERS IN ORDER TO DELIVER
// REQUESTS TO THEM
const booksController = require('../controllers/booksController');

router.get('/', booksController.getAllBooks);
router.get('/new', booksController.getNewBookForm);
router.get('/:bookId', booksController.getOneBook);
router.post('/', booksController.createNewBook);
router.delete('/:bookIdToDelete', booksController.deleteOneBook);
router.get('/:bookIdForEditForm/edit', booksController.getEditBookForm);
router.put('/:bookIdToUpdate', booksController.updateOneBook);

// IN ORDER TO USE THESE ROUTES, WE MUST EXPORT THEM
module.exports = router;