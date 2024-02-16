'use strict'
//DOM

const BOOK_DB = 'bookDB'
var gBooks
var gFilterBy = ''
_createBooks()



function setFilterBy(filterBy) {
        gFilterBy = filterBy
        // gFilterby = filterBy.filter(book => book.title.toLowerCase().includes(filterBy.toLowerCase()))

    // return filteredBooks.map(book => {
    //     book.isFiltered = true
    //     console.log(filteredBooks);
    //     return book.title
    // })
    

}




function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
    _saveBooks()
}

function readBook(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return book
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
    
    if(!gFilterBy) return gBooks
    return gBooks.filter(book => book.title.toLowerCase().includes(gFilterBy.toLowerCase()))
}

function _createBooks() {
    // gBooks = loadFromStorage(BOOK_DB, gBooks)

    if (!gBooks) {
        gBooks = [
            _createBook('The adventures of Lori Ipsi', 120),
            _createBook('Harry Potter', 180, 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg'),
            _createBook('Who moved my cheese?', 50, 'https://m.media-amazon.com/images/I/71vfjx-h4wL._AC_UF894,1000_QL80_.jpg'),
        ]
        _saveBooks()
    }

}

function _createBook(title, price, imgUrl = 'https://www.montmorencylibrary.com/books.jpg/@@images/image.jpeg') {
    return {
        id: makeId(),
        title,
        price,
        imgUrl,
        isFiltered: false
    }
}

function _saveBooks() {
    saveToStorage(BOOK_DB, gBooks)
}