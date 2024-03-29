'use strict'
//MODAL

const BOOK_DB = 'bookDB'
var gBooks
var gFilterBy = ''
_createBooks()

function setFilterBy(filterBy) {
    gFilterBy = filterBy
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

function addBook(isBook) {
    const newBook = _createBook(prompt('Enter Book Title?'), +prompt('Enter Book Price'))
    if (!newBook.title || newBook.price <= 0) return isBook = false

    gBooks.unshift(newBook)
    _saveBooks()
    return isBook = true
}

function updatePrice(bookId) {
    var bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks[bookIdx].price = +prompt('Update book price:')
    _saveBooks()
}

function getBooks() {
    if (!gFilterBy) return gBooks
    return gBooks.filter(book => book.title.toLowerCase().includes(gFilterBy.toLowerCase()))
}

function getExpensive() {
    var ExpCounter = 0
    gBooks.forEach(book => book.price > 100 ? ExpCounter++ : ExpCounter)
    return ExpCounter
}

function getCheap() {
    var cheapCounter = 0
    gBooks.forEach(book => (book.price <= 80) ? cheapCounter++ : cheapCounter)
    return cheapCounter
}

function getAvg() {
    const sum = gBooks.reduce((acc, book) => acc + book.price, 0)
    const avg = sum / gBooks.length
    console.log(avg);
    return Math.floor(avg)
}

function _createBooks() {
    if (!gBooks) {
        gBooks = [
            _createBook('The adventures of Lori Ipsi', 120),
            _createBook('Harry Potter', 180, 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg'),
            _createBook('Who moved my cheese?', 50, 'https://m.media-amazon.com/images/I/71vfjx-h4wL._AC_UF894,1000_QL80_.jpg'),
        ]
        _saveBooks()
    }
}

function _createBook(title, price, imgUrl = 'img/defualt.jpg') {
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