function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){
    return (`${title} by ${author}, ${pages} pages, ${read} `);
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolien', 295, 'not read')
console.log(theHobbit.info());
