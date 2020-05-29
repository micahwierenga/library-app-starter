const express = require('express');
const router = express.Router();
// WE NEED ACCESS TO THE CONTROLLERS IN ORDER TO DELIVER
// REQUESTS TO THEM
const authorsController = require('../controllers/authorsController');


router.get('/', authorsController.getAllAuthors);
router.get('/new', authorsController.getNewAuthorForm);
router.get('/:authorId', authorsController.getOneAuthor);
router.post('/', authorsController.createNewAuthor);
router.delete('/:authorIdToDelete', authorsController.deleteOneAuthor);
router.get('/:authorIdForEditForm/edit', authorsController.getEditAuthorForm);





// IN ORDER TO USE THESE ROUTES, WE MUST EXPORT THEM
module.exports = router;