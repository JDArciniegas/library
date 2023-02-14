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
  // loop through Array
  myLibrary.forEach((book) => {
    const row = document.createElement("tr");
    // loop thorugh Object
    const keys = Object.keys(book);

    for (const key in book) {
      const cell = document.createElement("td");
      // create cells
      cell.innerText = `${book[key]}`;
      if (key == 'read'){
        cell.appendChild(createReadStatus(book))
      }
      row.appendChild(cell);
    }

    row.appendChild(createDeleteButton());
    tbody.appendChild(row);
  });
}

function createDeleteButton() {
  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    displayTable();
  });
  deleteCell.appendChild(deleteButton);
  return deleteCell;
}

function createReadStatus(book) {
  const readUpdate = document.createElement("td");
  const readStatusButton = document.createElement("button");
  readStatusButton.innerText = book.read;
  readStatusButton.addEventListener("click", () => {
    e.target.innerText = book.read ? book.read : !book.read
    displayTable();
  });
  readUpdate.appendChild(readStatusButton);
  return readUpdate;
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
