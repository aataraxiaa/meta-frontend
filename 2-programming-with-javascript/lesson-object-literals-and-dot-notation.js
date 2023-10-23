var hero = {
  name: 'Gandalf',
  age: 24000,
  weapon: 'Glamdring',
  aim: 'The destruction of Sauron',
}

hero.age = 24001
console.log(hero.health) //undefined
hero.health = 10
console.log(hero.health)


// DO NOT CHANGE THIS LINE OF CODE
var villain = {}

// WRITE YOUR CODE BELOW THIS LINE

/*
Task:
    I have given you an empty object called villain.
    1. Use dot notation to add 'name', 'age', 'weapon’, ‘aim' and ‘health’
       keys to the object with values from your imagination.
    2. Log out the name and health of your villain.
*/

villain.name = "Green Goblin";
villain.age = 50;
villain.weapon = "Pumpkin bomb";
villain.aim = "Capture Spider-Man";
villain.health = 40;

console.log("Villain's name is", villain.name, "and his health is", villain.health);

var person = {
  name: 'Jane',
  age: 20
}

person.name = 'John';
person["height"] = 179;

console.log(person["age"]);
