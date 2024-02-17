'use strict'
//DOM

function onInit() {
    renderBooks()
}

function renderBooks() {
    const books = getBooks() // filter function
    renderStats()
    const strHTMLs = books.map(book => `
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
function renderStats() {
    const elExpensive = document.querySelector('.expensive')
    const elAvg = document.querySelector('.avg')
    const elCheap = document.querySelector('.cheap')

    elExpensive.innerText = getExpensive()
    elAvg.innerText = getAvg()
    elCheap.innerText = getCheap()
    
}

function clearFilter() {
    document.querySelector('.input.oninput') = ''
}

function onToggleBook(bookId) {
    onToggleBook(bookId)
    renderBooks()
}

function onSetFilterBy(elInput) {
    const filterBy = elInput.value
    const book = setFilterBy(filterBy)

    renderBooks()
}

function onReadBook(ev, bookId) {
    ev.stopPropagation()
    const book = readBook(bookId)

    const elBookDetails = document.querySelector('.book-details')
    const elSpan = elBookDetails.querySelector('h2 span')
    const elPre = elBookDetails.querySelector('pre')
    const elImg = elBookDetails.querySelector('img')

    elPre.innerText = `
    Book ID: ${book.id}
    Book Price: ${book.price}`

    elImg.src = `${book.imgUrl}`
    elSpan.innerText = `${book.title}`
    elBookDetails.showModal()
}

function onAddBook(isBook) {
    var validBook = addBook(isBook)
    console.log(validBook);
    if (!validBook) alert('Enter a valid title and price')

        renderBooks()
        showModal('Book Added', 'rgba(50, 175, 77, 0.619)')
    
}

function onUpdatePrice(ev, bookId) {
    ev.stopPropagation()
    updatePrice(bookId)
    showModal('Price Updated', 'rgba(50, 175, 77, 0.619)')
    renderBooks()
}

function onRemoveBook(ev, bookId) {
    ev.stopPropagation()
    showModal('Deleted', 'rgba(175, 50, 50, 0.619)')
    removeBook(bookId)
    renderBooks()
}

function showModal(txt, color) {
    var elModal = document.querySelector('.modal')
    const elSpan = elModal.querySelector('span')
    elSpan.innerText = txt

    elModal.style.backgroundColor = color
    elModal.style.opacity = 50

    setTimeout(() => {
        elModal.style.opacity = 0
    }, 2000);
}

