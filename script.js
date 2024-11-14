const booksContainer = document.querySelector('.books');
const addBookDialog = document.getElementById('add-book-dialog');
const showAddDialogBtn = document.getElementById('show-add-dialog');
const addBookForm = document.getElementById('add-book-form');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const isReadCheckbox = document.getElementById('isRead');
const addBookBtn = document.getElementById('add-book-btn');
const closeDialogBtn = document.getElementById('close-dialog-btn');

const myLibrary = [
  {
    id: uniqueID(),
    title: '1984',
    author: 'George Orwel',
    pages: 328,
    isRead: true,
  },
  {
    id: uniqueID(),
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    pages: 1077,
    isRead: false,
  },
  {
    id: uniqueID(),
    title: 'How to Win at Chess',
    author: 'Levy Rozman',
    pages: 300,
    isRead: false,
  },
  {
    id: uniqueID(),
    title: 'Tuesdays with Murray',
    author: 'D. L. Moody',
    pages: 200,
    isRead: false,
  },
];

function uniqueID() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function Book(title, author, pages, isRead) {
  this.id = uniqueID();
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

function removeBookFromLibrary(bookId) {
  const index = myLibrary.findIndex(book => book.id = bookId);

  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
}

function createTitleElement(title) {
  const titleElement = document.createElement('p');
  titleElement.classList.add('book-title');
  titleElement.textContent = title;

  return titleElement;
}

function createAuthorElement(author) {
  const authorElement = document.createElement('p');
  authorElement.classList.add('book-author');
  authorElement.textContent = `by ${author}`;

  return authorElement;
}

function createPagesElement(pages) {
  const pagesElement = document.createElement('p');
  pagesElement.classList.add('book-pages');
  pagesElement.textContent = `number of pages: ${pages}`;

  return pagesElement;
}

function createIsReadLabel(bookId) {
  const checkboxId = `book#${bookId}-checkbox`;
  const isReadLabel = document.createElement('label');
  isReadLabel.setAttribute('for', checkboxId);
  isReadLabel.textContent = 'Is read before: ';

  return isReadLabel;
}

function createIsReadCheckbox(bookId, isRead) {
  const checkboxId = `book#${bookId}-checkbox`;
  const isReadCheckBox = document.createElement('input');
  isReadCheckBox.id = checkboxId;
  isReadCheckBox.setAttribute('type', 'checkbox');
  isReadCheckBox.checked = isRead;

  return isReadCheckBox;
}

function createRemoveBookBtn() {
  const removeButton = document.createElement('button');
  removeButton.textContent = 'X';
  removeButton.setAttribute('type', 'button');
  removeButton.classList.add('remove-book-btn');

  return removeButton;
}

function showBook(book) {
  const { id, title, author, pages, isRead } = book;

  const bookElement = document.createElement('div');
  bookElement.id = id;
  bookElement.classList.add('book');

  const titleElement = createTitleElement(title);
  const authorElement = createAuthorElement(author);
  const pagesElement = createPagesElement(pages);
  const isReadLabel = createIsReadLabel(id);
  const isReadCheckBox = createIsReadCheckbox(id, isRead);

  isReadCheckBox.addEventListener('click', () => {
    book.isRead = isReadCheckBox.checked;
  });

  const removeButton = createRemoveBookBtn();

  removeButton.addEventListener('click', () => {
    bookElement.remove();
    removeBookFromLibrary(id);
  });

  bookElement.append(titleElement, authorElement, pagesElement, isReadLabel, isReadCheckBox, removeButton);
  booksContainer.append(bookElement);
}

function showLibrary() {
  myLibrary.forEach(book => showBook(book));
}

function handleAddBookSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const [title, author, pages, isRead = false] = formData.values();
  const book = new Book(title, author, pages, isRead);
  addBookToLibrary(book);
  showBook(book);

  addBookDialog.close();
}

showAddDialogBtn.addEventListener('click', () => addBookDialog.showModal());
addBookDialog.addEventListener('submit', handleAddBookSubmit);
closeDialogBtn.addEventListener('click', () => addBookDialog.close());

showLibrary();