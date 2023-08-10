let myLibrary = [];
const books = document.querySelector('#books');
const newBook = document.querySelector('#new-book');
const confirmBtn = document.querySelector('#confirmBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const resetBtn = document.querySelector('#resetBtn');

newBook.addEventListener('click', () => {
  newBookModal.showModal();
});

resetBtn.addEventListener('click', (event) => {
  document.querySelector("form").reset();
})

confirmBtn.addEventListener('click', (event) => {
  const inputTitle = document.querySelector('#title').value;
  const inputAuthor = document.querySelector('#author').value;
  const inputPages = document.querySelector('#pages').value;
  const inputRead = document.querySelector('#read').value;

  addBookToLibrary(inputTitle,inputAuthor,inputPages,inputRead);
  event.preventDefault();
  newBookModal.close();
  document.querySelector("form").reset();
});



function Book(title, author, pageNumber, readStatus) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.readStatus = readStatus;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pageNumber} pages, ${readStatus}`;
  }
}


function addBookToLibrary(title,author,pages,read) {
  let book = new Book(title,author,pages,read);
  myLibrary.push(book);

  let bookTitle = document.createElement('div');
  let bookAuthor = document.createElement('div');
  let bookPageNumber = document.createElement('div');
  let bookReadingStatus = document.createElement('div');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPageNumber.textContent = book.pageNumber;
  bookReadingStatus.textContent = book.readStatus;
  
  bookTitle.className = 'book-title';
  bookAuthor.className = 'book-author';
  bookPageNumber.className = 'book-page-number';
  bookReadingStatus.className = 'book-reading-status';

  const deleteButton = document.createElement('button');
  const deleteIcon = document.createElement('img');

  deleteButton.className = 'delete-icon-btn';
  deleteIcon.className = 'delete-icon-img';
  deleteButton.appendChild(deleteIcon);


  deleteButton.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.remove();
    myLibrary = myLibrary.filter(function (el) { return el.title != book.title; });
  });

  let card = document.createElement('div');
  card.className = 'card';

  card.append(bookTitle, bookAuthor, bookPageNumber, bookReadingStatus,deleteButton);
  books.appendChild(card);
}


addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295', 'Not read yet');

addBookToLibrary('Book 2','author2','20','read');

