// available t-shirt colors
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
var sizes = [4, 5, 6, 7, 8, 9, 10]

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i])
  }
}

listArrayItems(colors)

/*
Task:
    Build a second function called listSizes which loops through
    the new array ‘sizes’ and logs out only the sizes which are larger
    than 6.
    Hint: you can use an if/else inside a for loop to to do this.
*/
function listSizes(sizeArray) {
  for (var index = 0; index < sizeArray.length; index++) {
    var size = sizeArray[index];
    if (size > 6) {
      console.log("Size:", size);
    }
  }
}

listSizes(sizes);
