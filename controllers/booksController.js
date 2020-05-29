// WE'LL NEED THE MODEL IN ORDER TO COMMUNICATE WITH THE DB
// AND TO VALIDATE THE DATA
const Book = require('../models/bookModel');
const Author = require('../models/authorModel');


// WE'LL NEED TO EXPORT OUR CONTROLLERS IN ORDER FOR THE
// ROUTES TO SUCCESSFULLY DELIVER THE REQUESTS HERE

module.exports = {
    getAllBooks,
    getNewBookForm,
    createNewBook,
    getOneBook,
    deleteOneBook,
    getEditBookForm,
    updateOneBook,
}

// WE'LL NEED CONTROLLERS TO HANDLE THE REQUEST, WHICH
// CAN INCLUDE USING MONGOOSE TO COMMUNICATE WITH THE DB ONLY,
// RENDERING A VIEW ONLY, OR RENDERING A VIEW TOGETHER
// WITH DATA FROM THE DB

// Define getAllBooks (our index route)
function getAllBooks(req, res) {
    Book.find({}, function(err, allBooksFromDb) {
        res.render('booksViews/index', {
            allBooksReferenceForEJS: allBooksFromDb
        })
    })
}


// Define getOneBook (our show route)
function getOneBook(req, res) {
    Book.findById(req.params.bookId)
    .populate('author')
    .exec(function(err, oneBookFromDb) {
        res.render('booksViews/show', {
            bookReferenceForEJS: oneBookFromDb
        })
    })
}

// Define getNewBookForm (our new route)
function getNewBookForm(req, res) {
    Author.find({}, function(err, allAuthorsFromDb) {
        res.render('booksViews/new', {
            allAuthorsDropdown: allAuthorsFromDb
        });
    })
}

// Define createNewBook (our create route)
function createNewBook(req, res) {
    Book.create(req.body, function(err, newBook) {
        res.redirect('/books');
    })
}

// Define deleteOneBook (our delete/destroy route)
function deleteOneBook(req, res) {
    Book.findByIdAndRemove(req.params.bookIdToDelete, function(err, deleteBookConfirmation) {
        res.redirect('/books');
    })
}

// Define getEditBookForm (our edit route)
function getEditBookForm(req, res) {
    Book.findById(req.params.bookIdForEditForm, function(err, bookToEditFromDb) {
        Author.find({}, function(err, authorsForDropdown) {
            res.render('booksViews/edit', {
                bookToEditReferenceForEJS: bookToEditFromDb,
                authorsForDropdown
            })
        })
    })
}

// Define updateOneBook (our update route)
function updateOneBook(req, res) {
    Book.findByIdAndUpdate(req.params.bookIdToUpdate, req.body, {new: true}, function(err, updatedBookFromDb) {
        res.redirect(`/books/${updatedBookFromDb._id}`);
    })
}