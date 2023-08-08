let books = document.querySelector('#books')

let myLibrary = [];

function Book(title, author, pageNumber, readStatus) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.readStatus = readStatus;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pageNumber} pages, ${readStatus}`;
  }
}


function addBookToLibrary(book) {
  myLibrary.push(book);
}


function displayBooks(myLibrary) {
  myLibrary.forEach(book => {
    let title = document.createElement('div');
    title.textContent = book.title;
    title.className = 'book-title';
    
    let author = document.createElement('div');
    author.textContent = book.author;
    author.className = 'book-author';
    
    let pageNumber = document.createElement('div');
    pageNumber.textContent = book.pageNumber;
    pageNumber.className = 'book-page-number';
    
    let readingStatus = document.createElement('div');
    readingStatus.textContent = book.readStatus;
    readingStatus.className = 'book-reading-status';
    

    let card = document.createElement('div');
    card.className = 'card';

    card.append(title, author, pageNumber, readingStatus);
    books.appendChild(card);
  });
}




const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Not read yet');

const book2 = new Book('Book 2','author2','20','read');

addBookToLibrary(theHobbit);
addBookToLibrary(book2);

displayBooks(myLibrary);