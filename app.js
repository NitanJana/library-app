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

  let title = document.createElement('div');
  let author = document.createElement('div');
  let pageNumber = document.createElement('div');
  let readingStatus = document.createElement('div');

  title.textContent = book.title;
  author.textContent = book.author;
  pageNumber.textContent = book.pageNumber;
  readingStatus.textContent = book.readStatus;
  
  title.className = 'book-title';
  author.className = 'book-author';
  pageNumber.className = 'book-page-number';
  readingStatus.className = 'book-reading-status';

  let card = document.createElement('div');
  card.className = 'card';

  card.append(title, author, pageNumber, readingStatus);
  books.appendChild(card);
}


const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Not read yet');

const book2 = new Book('Book 2','author2','20','read');

addBookToLibrary(theHobbit);
addBookToLibrary(book2);

