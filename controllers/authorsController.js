// WE'LL NEED THE MODEL IN ORDER TO COMMUNICATE WITH THE DB
// AND TO VALIDATE THE DATA
const Author = require('../models/authorModel');


// WE'LL NEED TO EXPORT OUR CONTROLLERS IN ORDER FOR THE
// ROUTES TO SUCCESSFULLY DELIVER THE REQUESTS HERE

module.exports = {
    getAllAuthors,
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


// Define getNewAuthorForm (our new route)


// Define createNewAuthor (our create route)


// Define deleteOneAuthor (our delete/destroy route)


// Define getEditAuthorForm (our edit route)


// Define updateOneAuthor (our update route)