'use strict'
//DOM

const BOOK_DB = 'bookDB'
var gBooks
_createBooks()



function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
    console.log(gBooks);
}

function addBook() {
    const newBook = _createBook(prompt('Enter Book Title?'), +prompt('Enter Book Price'))
    gBooks.unshift(newBook)
    _saveBooks()

}

function updatePrice(bookId) {
    var bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks[bookIdx].price = +prompt('Update book price:')
    _saveBooks()

}

function getBooks() {
    return gBooks
}

function _createBooks() {
    gBooks = loadFromStorage(BOOK_DB, gBooks)

    if (!gBooks) {
        gBooks = [
            _createBook('The adventures of Lori Ipsi', 120),
            _createBook('Harry Potter', 180),
            _createBook('Dude Where\'s my car?', 50),
        ]
        _saveBooks()
    }

}

function _createBook(title, price) {
    return {
        id: makeId(),
        title,
        price,
        imgUrl: 'lori-ipsi.jpg'
    }
}
console.log(getBooks());

function _saveBooks() {
    saveToStorage(BOOK_DB, gBooks)
}