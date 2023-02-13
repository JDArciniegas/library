// variables
const bookName = document.querySelector('#book-name');
const bookWriter = document.querySelector('#book-writer');
const bookPages = document.querySelector('#book-pages');
const readStatus = document.querySelector('#read-status');
const submitButton = document.querySelector('#submit');

// base database book
const gameOfThrones = new Book('Game of Thrones','George R. R. Martin', 1000, 'Not Read');
const harryPotter = new Book('Harry Potter & the philosofer stone', 'J. K. Rowling', 700, 'Not Read');


let myLibrary = [gameOfThrones, harryPotter];

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){
    return (`${title} by ${author}, ${pages} pages, ${read} `);
  }
}

function addBookToLibrary(){
  let newBook = new Book(bookName, bookWriter, bookPages, readStatus);
  myLibrary.push(newBook);
  console.log(myLibrary);
};

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary()
})



