const booksElement = document.querySelector('.books');
const addBookDialog = document.getElementById('add-book-dialog');
const showAddDialogBtn = document.getElementById('show-add-dialog');
const addBookDialogBtn = document.getElementById('add-book-btn');
const closeDialogBtn = document.getElementById('close-dialog-btn');

const myLibrary = [
  {
    id: 'nfkdjsnfsanfkans',
    title: '1984',
    author: 'George Orwel',
    pages: 328,
    isRead: true,
  },
  {
    id: 'mcldmnvklacxdsv',
    title: 'The Lord of the Rings',
    author: '	J. R. R. Tolkien',
    pages: 1077,
    isRead: false,
  },
];

function Book(id, title, author, pages, isRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'is read' : 'is not read yet'}`;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function showBook(book) {
  const {id, title, author, pages, isRead} = book;

  const bookElement = document.createElement('div');
  bookElement.classList.add('book');

  const titleElement = document.createElement('p');
  titleElement.classList.add('book-title');
  titleElement.textContent = title;

  const authorElement = document.createElement('p');
  authorElement.classList.add('book-author');
  authorElement.textContent = `by ${author}`;

  const pagesElement = document.createElement('p');
  pagesElement.classList.add('book-pages');
  pagesElement.textContent = `number of pages: ${pages}`;

  const isReadLabel = document.createElement('label');
  isReadLabel.setAttribute('for', `book${id}-checkbox`);
  isReadLabel.textContent = 'Is read: '

  const isReadCheckBox = document.createElement('input');
  isReadCheckBox.id = `book${id}-checkbox`;
  isReadCheckBox.setAttribute('type', 'checkbox');

  if (isRead) {
    isReadCheckBox.setAttribute('checked', isRead);
  }

  bookElement.append(titleElement, authorElement, pagesElement, isReadLabel, isReadCheckBox);
  booksElement.append(bookElement);
}

function showLibrary() {
  myLibrary.forEach(book => showBook(book));
}

showLibrary();
showAddDialogBtn.addEventListener('click', () => addBookDialog.showModal());
closeDialogBtn.addEventListener('click', () => addBookDialog.close());