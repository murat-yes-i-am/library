const booksElement = document.querySelector('.books');
const addBookDialog = document.getElementById('add-book');
const showAddBookBtn = document.getElementById('show-add-dialog');

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'is read' : 'is not read yet'}`;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function showLibrary() {
  myLibrary.forEach(book => console.log(book.info));
}

showAddBookBtn.addEventListener('click', () => {
  addBookDialog.showModal();
});