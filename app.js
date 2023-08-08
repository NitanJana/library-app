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