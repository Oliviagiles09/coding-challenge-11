// Task 1
class Book {
  constructor(title, author, isbn, copies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.copies = copies;
  }
  getDetails() {
    return 'Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}'
  };
  updateCopies(quantity) {
    this.copies += quantity;
  }
};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());

book1.updateCopies(-1);
console.log(book1.getDetails());

// Task 2
class Borrower {
  constructor(name, borrowerId,) {
    this.name = name;
    this.borrowerId = borrowerId;
    this.borrowedBooks = [];
  }
  borrowBook(book) {
    this.borrowedBooks.push(book);
  }
  returnBook(book) {
    this.borrowedBooks = this.borrowedBooks.filter(b => b.isbn !== book.isbn);
  }
};

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

//Task 3
class Library {
  constructor() {
    this.books = [];
    this.borrowers = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  listBook() {
    this.books.map(book => console.log(book.getDetails()));
  }
  addBorrower(borrower) {
    this.borrower.push(borrower);
  }
}
// Task 4
lendBook(borrowerId), isbn) {
const book = this.books.find(book => book.isbn === isbn);
  cosnt borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
  if (book && borrower) {
    if (book.copies > 0) {
      book.updateCopies(-1);
      borrower.borrowBook(book);
    }
    else {
      console.log("No copies available");
    }
  } else {
    console.log("Book or borrower not found")
  }
}
// Task 5
returnBook(borrowerId, isbn) {
const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
  const book = this.books.find(b => b.isbn === isbn);
  if (book) {
    book.updatedCopies(1);
    if (borrower) {
      borrower.returnBook(book);
    }
  }
}
const library = new Library();
library.addBook(book1);
library.addBorrower(borrower1);
library.listBooks();

library.lendbook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);

library.returnBook(201, 123456);
console.log(book1.getDetails());

console.log(borrower1.borrowedBooks);
