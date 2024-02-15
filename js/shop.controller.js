'use strict'
//MODEL

function onInit() {
    renderBooks()
}

function renderBooks() {
    const books = getBooks() // filter function
    const strHTMLs = books.map( book => `
        <tr>    
        <tr>
            <td>${book.title}</td>
            <td>${book.price}</td>
            <td>
            <button onclick="onRead(event, '${book.id}')">Read</button> 
            <button onclick="onUpdatePrice(event, '${book.id}')">Update</button> 
            <button onclick="onRemoveBook(event, '${book.id}')">Delete</button></td>
            </tr>
    `)
    const elBooksList = document.querySelector('.books-list')
    elBooksList.innerHTML = strHTMLs.join('')
}

function onUpdatePrice(ev, bookId) {
    ev.stopPropagation()
    updatePrice(bookId)
    renderBooks()
}

function onRemoveBook(ev, bookId) {
    ev.stopPropagation()
    removeBook(bookId)
    renderBooks()
}
