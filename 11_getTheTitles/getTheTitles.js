const getTheTitles = function(books) {
    const titleArr = books.map(function(book) {
        return book.title;
    });
    return titleArr;

};

// Do not edit below this line
module.exports = getTheTitles;
