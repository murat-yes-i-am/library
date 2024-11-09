const booksElement = document.querySelector('.books');
const addBookDialog = document.getElementById('add-book-dialog');
const showAddDialogBtn = document.getElementById('show-add-dialog');
const addBookDialogBtn = document.getElementById('add-book-btn');
const closeDialogBtn = document.getElementById('close-dialog-btn');

const myLibrary = [
  {
    title: '1984',
    author: 'George Orwel',
    pages: 328,
    isRead: true,
  },
  {
    title: 'The Lord of the Rings',
    author: '	J. R. R. Tolkien',
    pages: 1077,
    isRead: false,
  },
];

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

showAddDialogBtn.addEventListener('click', () => addBookDialog.showModal());
closeDialogBtn.addEventListener('click', () => addBookDialog.close());