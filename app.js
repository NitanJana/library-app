let myLibrary = [];
const books = document.querySelector('#books');
const newBook = document.querySelector('#new-book');
const confirmBtn = document.querySelector('#confirmBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const resetBtn = document.querySelector('#resetBtn');

const readBtn = document.querySelector('#read');

readBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  if (e.target.value === 'unread') {
    e.target.value = 'read';
    e.target.innerText = 'Read';
    e.target.style.backgroundColor = 'var(--dark-green)';
  } else if (e.target.value === 'read') {
    e.target.value = 'unread';
    e.target.innerText = 'Unread';
    e.target.style.backgroundColor = 'var(--red)';
  }
});

newBook.addEventListener('click', () => {
  newBookModal.showModal();
});

resetBtn.addEventListener('click', (event) => {
  document.querySelector("form").reset();
})

confirmBtn.addEventListener('click', (event) => {
  const inputTitle = document.querySelector('#title');
  const inputAuthor = document.querySelector('#author');
  const inputPages = document.querySelector('#pages');
  const inputRead = document.querySelector('#read');

  

  addBookToLibrary(inputTitle.value,inputAuthor.value,inputPages.value,inputRead.value);
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
  let bookReadingStatus = document.createElement('button');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPageNumber.textContent = book.pageNumber;
  bookReadingStatus.textContent = book.readStatus;
  
  bookTitle.className = 'book-title';
  bookAuthor.className = 'book-author';
  bookPageNumber.className = 'book-page-number';
  // bookReadingStatus.className = 'book-reading-status';
  console.log(book.readStatus);
  if (book.readStatus === 'unread') {
    bookReadingStatus.className = 'book-reading-status-red';
    bookReadingStatus.value = 'unread';
  } else if (book.readStatus === 'read') {
    bookReadingStatus.className = 'book-reading-status-green';
    bookReadingStatus.value = 'read';
  }

  bookReadingStatus.addEventListener('click', (e) => {
  e.preventDefault();
  
  if (e.target.value === 'unread') {
    e.target.value = 'read';
    e.target.innerText = 'Read';
    e.target.style.backgroundColor = 'var(--dark-green)';
  } else if (e.target.value === 'read') {
    e.target.value = 'unread';
    e.target.innerText = 'Unread';
    e.target.style.backgroundColor = 'var(--red)';
  }
});

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


// addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295', 'Unread');

// addBookToLibrary('Book 2','author2','20','Read');

