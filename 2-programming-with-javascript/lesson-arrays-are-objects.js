var friendsList = ['Wayne', 'Sara', 'Frankie'];

console.log(friendsList);

friendsList.push('Kelly');
console.log(friendsList);

friendsList.pop();
console.log(friendsList);

/*
Task:
    1. Create an empty array and store it in a variable named
       presentList.
    2. Push 5 items that you would like to receive as a gift.
    3. Use the pop method to delete all of the items
       (because you received all of the gifts!!)

       Extra: you could use a for loop to pop off all of the items.
    This might be a bit tricky, so I have given you a hint.
*/

console.log("\n------\n")


var presentList = [];

presentList.push("Apple");
presentList.push("Pineapple");
presentList.push("Yogurt");
presentList.push("Peanut butter");
presentList.push("Sourdough break");

console.log(presentList);

for (let i = presentList.length; i > 0; i--) {
  presentList.pop();
  console.log(presentList);
}
