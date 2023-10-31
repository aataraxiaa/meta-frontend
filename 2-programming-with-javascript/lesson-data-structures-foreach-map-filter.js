const kmWalked = [15.5256, 48.7884, 31.5453, 24.7295, 35.9073, 26.2654, 21.3653, 10.8763, 16.3526,
  37.9873, 14.8647, 32.9367, 27.0643, 2.2347, 4.0987];

/*
Task:
    .forEach()
    1. Use the .forEach() method to iterate over the
       array and reduce each element to just 2 decimal
       places. You can do that using a method we have
       seen before called toFixed(). Push the modified
       element to a new array.

    .map()
    2. Now refactor your code to use the .map method.
       You should no longer need to use the .push()
       method or declare an empty array.

    .filter()
    3. Use the filter method to:
       - Remove any number greater than 40.
       - Remove any number less than 3.
*/

// Task 1
const task1 = [];

kmWalked.forEach(function (num) {
  task1.push(num.toFixed(2));
});

console.log(task1);

// Task 2

const task2 = kmWalked.map(function (num) {
  return num.toFixed(2);
});

console.log(task2);

// Task 3

const task3 = task2.filter(function (num) {
  return num <= 40 && num >= 3;
});

console.log(task3);

