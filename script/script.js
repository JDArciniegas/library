// // variables
const form = document.querySelector('#form-modal')
const bookName = document.querySelector("#book-name");
const bookWriter = document.querySelector("#book-writer");
const bookPages = document.querySelector("#book-pages");
const readStatus = document.querySelector("#read-status");
const submitButton = document.querySelector("#submit");
const addBookButton = document.querySelector('#add-book');

// table table
const table = document.querySelector("#table");
const tbody = document.querySelector("tbody");

// base database book
const gameOfThrones = new Book(
  "Game of Thrones",
  "George R. R. Martin",
  1000,
  "Not Read"
);
const harryPotter = new Book(
  "Harry Potter & the philosofer stone",
  "J. K. Rowling",
  700,
  "Not Read"
);

let myLibrary = [gameOfThrones, harryPotter];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let newBook = new Book(bookName.value, bookWriter.value, bookPages.value, readStatus.value);
  myLibrary.push(newBook);
}

function displayBooks() {
  myLibrary.forEach((book, index) => {

    const row = tbody.insertRow();

    row.insertCell(0).innerText = book.title;
    row.insertCell(1).innerText = book.writer;
    row.insertCell(2).innerText = book.pages;
    row.insertCell(3).innerText = book.read;
    row.insertCell(4).innerHTML = `<button class="deleteBtn" data-index-number="${index}" onclick="removeRow(e)"> Delete</button>`
  });
}


function clearTable(){
  tbody.innerHTML = "";
}

function resetInputValues(){
  bookName.value = ""
  bookWriter.value = ""
  bookPages.value = ""
  readStatus.value = "";
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  clearTable();
  displayBooks();
  resetInputValues();
  form.style.display = "none";
});

addBookButton.onclick = function () {
  form.style.display = "block";
};

displayBooks();





