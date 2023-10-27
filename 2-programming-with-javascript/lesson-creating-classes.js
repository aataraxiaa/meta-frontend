class Book {
  constructor(title, author, isInStock) {
    this.title = title;
    this.author = author;
    this.isInStock = isInStock;
  }
  toggleIsInStock() {
    this.isInStock = !this.isInStock
  }
  getPrototype() {
    console.log(Object.getPrototypeOf(this))
  }
}

const book1 = new Book('The Lord of the Rings', 'JRR Tolkien', false)
const book2 = new Book('The Hobbit', 'JRR Tolkien', true)
console.log(book1)
book1.getPrototype() //{constructor: ƒ, toggleIsInstock: ƒ, getPrototype: ƒ}

/*
Task:
1. Create a new class called 'Computer' which takes 3 parameters:
    make, model, price.
2. Create a method which logs out a phrase summarising the object.
   For example: This Apple Macbook cost $1800.
3. Create a new instance of Computer passing in the details for
   whatever computer you are working on right now.
*/

class Computer {
  constructor(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
  }

  summarize() {
    console.log(`This ${this.make} ${this.model} costs $${this.price}.`);
  }
}

const computer = new Computer("Apple", "Macbook Pro", 1500);
computer.summarize();
