function milesToKm(miles) {
  return miles * 1.609
}

/*
Task:

1. Fnd out how far it is to London in miles from wheverer you are in
 the world.
2. Remebering to use backticks (``), log out the following sentence:
 The distance to London is x KMs.

Hint: You can set up your console.log outside of the function. You
can call the function from within the curly braces, inside the template
literal. Remember to pass in your arguments!
*/

console.log(`The distance to London is ${milesToKm(362)} KMs.`);
