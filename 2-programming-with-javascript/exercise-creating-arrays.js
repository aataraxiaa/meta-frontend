/*
Task:
You are preparing costumes for a theatre, and JavaScript is going
to help!

    1. Create an empty array literal and store it in a variable
       named 'costumeItems'.
    2. Use the push method to add 3 items of clothing.
    3. Use the pop method to delete one item.
    4. Log out 'costumeItems' each time to check your results .
    5. Log out just the 2nd item in the array.
*/

var costumeItems = [];

costumeItems.push("Cloak");
console.log(costumeItems);

costumeItems.push("Crown");
console.log(costumeItems);

costumeItems.push("Gloves");
console.log(costumeItems);

costumeItems.pop();
console.log(costumeItems);

console.log(costumeItems[1]);
