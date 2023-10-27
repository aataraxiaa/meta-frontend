function Furniture(type, price, deliveryCharge) {
  this.type = type;
  this.price = price;
  this.deliveryCharge = deliveryCharge;

  this.summarise = function () {
    console.log(`This ${type} costs ${price} or ${price + deliveryCharge} including delivery.`)
  }
}

const furnitureItem1 = new Furniture('chair', 500, 25)
const furnitureItem2 = new Furniture('sofa', 1000, 35)
furnitureItem1.summarise()
furnitureItem2.summarise()

/*
Task:
    1. Write a constructor function called 'Attraction' that
       creates objects with details of a tourist attraction
       (name, price, description).
    2. Add a method to that constructor which summarises the
       attraction.

    When calling that method, you should get something like this:

    'Disneyland is a world famous theme park with hundreds of rides
    and activities. It costs $60 to enter.'
*/

function Attraction(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;

  this.summarise = function () {
    console.log(`${name} is ${description}. It costs ${price} to enter.`);
  }
}

const attraction1 = new Attraction("Six flags", "$50", "a famous theme part in North America");
attraction1.summarise();
