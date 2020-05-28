// WE'LL NEED THE MODEL IN ORDER TO COMMUNICATE WITH THE DB
// AND TO VALIDATE THE DATA
const Author = require('../models/authorModel');


// WE'LL NEED TO EXPORT OUR CONTROLLERS IN ORDER FOR THE
// ROUTES TO SUCCESSFULLY DELIVER THE REQUESTS HERE

module.exports = {
    getAllAuthors,
    getNewAuthorForm,
    createNewAuthor,
    getOneAuthor,
}

// WE'LL NEED CONTROLLERS TO HANDLE THE REQUEST, WHICH
// CAN INCLUDE USING MONGOOSE TO COMMUNICATE WITH THE DB ONLY,
// RENDERING A VIEW ONLY, OR RENDERING A VIEW TOGETHER
// WITH DATA FROM THE DB

// Define getAllAuthors (our index route)
function getAllAuthors(req, res) {
    Author.find({}, function(err, allAuthorsFromDb) {
        res.render('authorsViews/index', {
            allAuthorsReferenceForEJS: allAuthorsFromDb
        })
    })
}


// Define getOneAuthor (our show route)
function getOneAuthor(req, res) {
    Author.findById(req.params.authorId, function(err, oneAuthorFromDb) {
        res.render('authorsViews/show', {
            authorReferenceForEJS: oneAuthorFromDb
        })
    })
}

// Define getNewAuthorForm (our new route)
function getNewAuthorForm(req, res) {
    res.render('authorsViews/new');
}

// Define createNewAuthor (our create route)
function createNewAuthor(req, res) {
    Author.create(req.body, function(err, newAuthor) {
        res.redirect('/authors');
    })
}

// Define deleteOneAuthor (our delete/destroy route)


// Define getEditAuthorForm (our edit route)


// Define updateOneAuthor (our update route)