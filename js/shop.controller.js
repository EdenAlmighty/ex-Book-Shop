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
            <button onclick="onReadBook(event, '${book.id}')">Read</button> 
            <button onclick="onUpdatePrice(event, '${book.id}')">Update</button> 
            <button onclick="onRemoveBook(event, '${book.id}')">Delete</button>
            </td>
            </tr>
    `)
    const elBooksList = document.querySelector('.books-list')
    elBooksList.innerHTML = strHTMLs.join('')
}

function clearFilter() {
    document.querySelector('.input.oninput') = ''
}

function onToggleBook(bookId){
    onToggleBook(bookId) 
    renderBooks()
}

function onSetFilterBy(elInput) {
    const filterBy = elInput.value
    const book = setFilterBy(filterBy)

    renderBooks()
}

function onReadBook(ev, bookId){
    ev.stopPropagation()
    const book = readBook(bookId)

    const elBookDetails = document.querySelector('.book-details')
    const elSpan = elBookDetails.querySelector('h2 span')
    const elPre = elBookDetails.querySelector('pre')
    const elImg = elBookDetails.querySelector('img')
    // const elImg = elBookDetails.querySelector(`img[src='${book.imgUrl}']`)

    elPre.innerText = `
    Book ID: ${book.id}
    Book Price: ${book.price}`

    elImg.src = `${book.imgUrl}`
    elSpan.innerText = `${book.title}`
    elBookDetails.showModal()
}

function onAddTodo(ev){ 
    addBook()
    renderBooks()
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
