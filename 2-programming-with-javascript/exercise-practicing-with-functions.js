/*
Task:
    1. Create a function called letterFinder which takes two
       parameters: 'word' and 'letterToMatch'.
    2. Inside letterFinder, create a for loop. The for loop
       should run until its counter (i) is equal to the length
       of 'word'.
    3. Add an if statement inside the for loop and have it check
       if the letter at word[i] is equal to 'letterToMatch'. If it is, log out
       "Found the letter x at index y". (Replace x and y with the
       letter and position!)
    4. Add an else statement that logs out "No match found at index y".

    Expected output when letterFinder is called with 'test' and 't':

    Found letter t at index 0
    ---No match found at index 1
    ---No match found at index 2
    Found letter t at index 3
*/

function letterFinder(word, letterToMatch) {
  for (let i = 0; i < word.length; i++) {
    var letter = word[i];
    if (letter == letterToMatch) {
      console.log("Found letter", letter, "at index", i);
    } else {
      console.log("---No match found at index", i);
    }
  }
}

letterFinder('Giraffe', 'f');
