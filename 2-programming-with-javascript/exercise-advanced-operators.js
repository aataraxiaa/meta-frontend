/* Task 1: Using the logical && operator
You are coding an RPG game, where your main character has a certain skill level
based on the value saved the variable named "score".

When your character has a score between 70 and 79 (inclusive of both), it is
at the "Guru Level".

Use "console.log()" to log out whether or not your main character is at the
"Guru Level". The expected output based on the current score is "Guru Level: true".

Hint: Use the && operator in combination with <, and >.

*/

var score = 73;
var isGuru = score > 69 && score < 80;
console.log("Guru Level:", isGuru);

/*
Task 2: Using the logical || operator
Imagine you are coding a video game. Currently, you’re about to code some snippets
related to the game over condition.

Write a piece of code that could be used to determine if the game is over,
based on whether either the value of the timeRemaining variable is 0 or the value of the
energy variable is 0.

Use the console.log() to log our whether or not the game is over. The expected output is
"Game Over: true", or "Game Over: false", based upon the values of the variables.

*/

var timeRemaining = 0;
var energy = 10;
var isOver = timeRemaining == 0 || energy == 0;
console.log("Game Over:", isOver);

/* Task 3: Using the modulus operator, %, to test if your age is even or odd

You need to code a small program that takes a number and determines if it's an even
number (like 2, 4, 6, 8, 10).

1. Set the variable "myAge" equal to your age.
2. Create a new variable "isAgeEven" that evaluates to "true" if you age is even,
and to "false" if your age is odd. Use the modulus operator, %, to create this expression.
3. Log to the console whether your age is even or odd. The output should be as follows:

"I'm 39 years old. Even: false"
"I'm 20 years old. Even: true"

Once you've written your solution, try changing the "myAge" variable to 5 to test that it
works for both even and odd numbers.
*/

var myAge = 36;
var isAgeEven = (myAge % 2) == 0
console.log("I'm", myAge, "years old. Even:", isAgeEven);

/*
1. Using the data below, add up the profits for quarter one and quarter two. Use the + operator to add the profits for beverages, snacks, and candy together, and assign the result to the variable that corresponds to it (either quarterOneProfit or quarterTwoProfit).

2. Add these two totals together to get the grand total of mid-year profit. Use the + operator and assign the result to the totalProfit variable.

3. Console.log the totalProfit variable to see what it is and write down your answer.

Quarter One Profits
-Beverages: 152555
-Snacks:     95543
-Candy:     121235

Quarter Two Profits
-Beverages:  164569
-Snacks:     104072
-Candy:      175423
*/

var quarterOneProfit;
var quarterTwoProfit;
var totalProfit;

quarterOneProfit = 152555 + 95543 + 121235;
quarterTwoProfit = 164569 + 104072 + 175423;
totalProfit = quarterOneProfit + quarterTwoProfit;
console.log("Total profit:", totalProfit);

/*
Task 5: Use the + concatenation operator to combine strings and a number.

    Imagine you're helping a survey team create a profile of a survey participant, using information they've entered in an online form. For this task, you're going to write the opening sentence of the profile, which will report the person's name and age.

    1. Assign values to the three variables below to describe a real or imaginary person. Assign strings to firstName and lastName. Assign a number to age.

    2. Use the + operator to combine the variables and additional strings to console.log a report about the person. The final result should be a single string in the console — for example, "Jane Doe is 42 years old."
*/

var firstName = "John";
var lastName = "Doe";
var age = 25;
var profileText = firstName + " " + lastName + " is " + age + " years old."
console.log(profileText)

/*
Task 6: Use the += operator to accumulate values in a variable.

  Imagine you're creating an app that tracks how many steps a user has walked per day and per week. Your task is to update the weekly total at the end of each day and maintain a log of their daily reports on how many steps they've walked so far in the week. For each day of the week, you will do the following.

  1. Update totalSteps using the data provided and the += operator (functioning here as the addition assignment operator).
  2. Console.log the dailyReport to check if it's correct.

  3. Update the reportLog by adding the dailyReport to it using the += operator (functioning here as the concatenation assignment operator).

  4. On the final day (Wednesday), console.log the reportLog to check if it's correct. All three daily reports should appear inside of it.
*/

/*-----Variables----------------------------------------------------*/
var totalSteps = 0;
var dailyReport = "";
var reportLog = "";


/*------Monday-------------------------------------------------------*/
// The user walks 11505 steps.

totalSteps += 11505;

dailyReport = "As of Monday, you walked " + totalSteps + " steps this week. ";

console.log(dailyReport);

reportLog += dailyReport + "\n";


/*------Tuesday-------------------------------------------------------*/
// The user walks 6754 steps.

totalSteps += 6754;

dailyReport = "As of Tuesday, you walked " + totalSteps + " steps this week. ";

console.log(dailyReport);

reportLog += dailyReport + "\n";


/*------Wednesday-----------------------------------------------------*/
// The user walks 7582 steps.

totalSteps += 7582;

dailyReport = "As of Wednesday, you walked " + totalSteps + " steps this week. ";

console.log(dailyReport);

reportLog += dailyReport;

console.log("\n" + "Report log:\n" + reportLog)
