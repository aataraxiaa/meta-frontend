/* Challenge

    Imagine you're creating an app that helps children practice the multiplication tables. You need to create a list of all of the multiplications for the numbers 1 to 10.

    Task:
        - Use a nested loop to console log the multiplications for each table, in ascending order,    displaying each multiplication as a string.
        - At the start of each table, console log a string that says which number the table is for.

    Expected Results:

        "----- 1 Times Table ----- "
        "1 times 1 equals 1"
        "1 times 2 equals 2"
        "1 times 3 equals 3"
        "1 times 4 equals 4"
        "1 times 5 equals 5"
        "1 times 6 equals 6"
        "1 times 7 equals 7"
        "1 times 8 equals 8"
        "1 times 9 equals 9"
        "1 times 10 equals 10"
         "----- 2 Times Table ----- "
        "2 times 1 equals 2"
        "2 times 2 equals 4"
        "2 times 3 equals 6"
        "2 times 4 equals 8"
        etc...
*/

for (let i = 1; i <= 10; i++) {
  console.log("-----", i, "Times Table -----");
  for (let j = 1; j <= 10; j++) {
    console.log(i, "times", j, "equals", i * j);
  }
}

/* Challenge

    Imagine the app also allows children to practice custom tables — for examples, multiples of 10 in descended order, each one divided by 5 and 10.

    Task:
        - Use a nested loop to console log each of the divisions for each of the multiples between
          100 and 10, in the following format.

    Expected Results:

        "100 divided by 5 equals 20"
        "100 divided by 10 equals 10"
        "90 divided by 5 equals 18"
        "90 divided by 10 equals 9"
        "80 divided by 5 equals 16"
        "80 divided by 10 equals 8"
        etc...
        "10 divided by 10 equals 1 "
*/

for (var i = 100; i >= 10; i -= 10) {
  for (var j = 5; j <= 10; j += 5) {
    console.log(i, "divided by", j, "equals", i / j);
  }
}
