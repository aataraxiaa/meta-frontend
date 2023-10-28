class Book {
  constructor(title, author, isInStock) {
    this.title = title;
    this.author = author;
    this.isInStock = isInStock;
  }
  toggleIsInStock() {
    this.isInStock = !this.isInStock;
  }
  getPrototype() {
    console.log(Object.getPrototypeOf(this))
  }
}

class RareBook extends Book {
  constructor(title, author, isInStock, location, isVerified) {
    super(title, author, isInStock)
    this.location = location;
    this.isVerified = isVerified;
  }
  getLocation() {
    console.log(this.location)
  }
  toggleIsVerified() {
    this.isVerified = !this.isVerified;
    if (this.isVerified) {
      console.log(`${this.title} has been verified by an independent expert.`)
    }
    else {
      console.log(`${this.title} has not been verified by an independent expert.`)
    }
  }
  toggleIsInStock() {
    super.toggleIsInStock()
    if (this.isInStock) {
      console.log(`${this.title} is in stock.`)
    }
    else {
      console.log(`${this.title} is not in stock.`)
    }
  }
}

const book3 = new RareBook('Romeo and Juliet', 'William Shakespeare', false, 'London', false)
book3.toggleIsInStock()

/*
Task:
    1. Extend the 'Book' class with a class called 'BestSeller'.
    2. Give it a 'numberSold' parameter and assign that
       parameter to 'this'.
    3. Add a method which increases the 'numberSold' by
       an integer it takes in when it is called.
    4. If the 'toggleIsInStock' method is called, it should
       log out whether or not the book is in stock and the
       number of copies sold.
*/

class BestSeller extends Book {
  constructor(title, author, isInStock, numberSold) {
    super(title, author, isInStock);
    this.numberSold = numberSold;
    console.log(this);
  }

  increaseNumberSold(amount) {
    this.numberSold += amount;
    console.log(`Number sold: ${this.numberSold}`);
  }

  toggleIsInStock() {
    super.toggleIsInStock();
    console.log(`In stock: ${this.isInStock}`);
    console.log(`Number sold: ${this.numberSold}`);
  }
}

const book4 = new BestSeller("Carrie", "Stephen King", true, 1000000);
book4.increaseNumberSold(1000);
book4.toggleIsInStock();
