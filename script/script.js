// // variables
const form = document.querySelector("#form-modal");
const bookName = document.querySelector("#book-name");
const bookWriter = document.querySelector("#book-writer");
const bookPages = document.querySelector("#book-pages");
const readStatus = document.querySelector("#read-status");
const submitButton = document.querySelector("#submit");
const addBookButton = document.querySelector("#add-book");
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
  let newBook = new Book(
    bookName.value,
    bookWriter.value,
    bookPages.value,
    readStatus.value
  );
  myLibrary.push(newBook);
}

function displayTable() {
  clearTable();
  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");
    Object.keys(book).forEach((property) => {
      const td = document.createElement("td");
      td.textContent = book[property];
      if (property == "read") td.textContent = book[property] ? "Read" : "Not read";
      row.appendChild(td);
    });
    row.appendChild(changeReadStatus(book));
    row.appendChild(createDeleteButton(index));
    tbody.appendChild(row);
  });
}

function changeReadStatus(book) {
  let readTd = document.createElement("td");
  let editButton = document.createElement("button");
  editButton.textContent = "Change read status";
  editButton.addEventListener("click", () => {
    book.read = !book.read;
    displayTable();
  });
  readTd.appendChild(editButton);
  return readTd
}

function createDeleteButton(index) {
  let deleteTd = document.createElement("td");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    displayTable();
  });
  deleteTd.appendChild(deleteButton);
  return deleteTd;
}

function clearTable() {
  tbody.innerHTML = "";
}

function resetInputValues() {
  bookName.value = "";
  bookWriter.value = "";
  bookPages.value = "";
  readStatus.value = "";
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayTable();
  resetInputValues();
  form.style.display = "none";
});

addBookButton.onclick = function () {
  form.style.display = "block";
};

displayTable();
