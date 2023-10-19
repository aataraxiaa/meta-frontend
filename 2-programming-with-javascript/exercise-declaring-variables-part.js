/*
    🐈 Pet Cat Simulator 🐈

    I.  Give the cat a name
        1. Declare a petCat variable and assign a name for the cat to it.
        2. Console.log the variable to make sure it has been declared correctly.
        3. Use concatenation to console log the message: "My pet cat's name
           is: [your cat's name]."

    II. Create a sound for the cat.
        4. Declare a catSound variable and assign a string for the cat's sound
           to that variable.
        5. Console.log the following message: "[Your cat's name] says [your cat's
           sound]." Use commas, your two variables, and a string to create the message.

    III. Change the sound of the cat.
         6. Reassign a new sound to the catSound variable.
         7. Console.log the following message: "[Your cat's name] now says [your cat's
            sound]." Use commas, both variables, and a string to create the message.
*/

// I
var petCat = "Nicha";
console.log(petCat);
console.log("My pet cat's name is " + petCat);

// II
var catSound = "Meow";
console.log(petCat, "says", catSound);

// III
catSound = "Eeek";
console.log(petCat, "now says", catSound);
