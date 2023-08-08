let myLibrary = [];

function Book(title, author, page_number, reading_status) {
  this.title = title;
  this.author = author;
  this.page_number = page_number;
  this.reading_status = reading_status;
  this.info = function () {
    return `${this.title} by ${this.author}, ${page_number} pages, ${reading_status}`;
  }
}


function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Not read yet');

const book2 = new Book('Book 2','author2','20','read');

addBookToLibrary(theHobbit);
addBookToLibrary(book2);