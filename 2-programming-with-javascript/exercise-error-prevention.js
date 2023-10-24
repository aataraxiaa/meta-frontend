/*
This function adds a $10 tourist surcharge to every hotel
booking. But there's a problem. If we pass in an argument
that is not a number, we get weird and unexpected results.
Let's refactor it to fix that!
*/

function addTouristSurcharge(payment) {
  /*
  Task:
      1. Add a try block.
      2. Inside the try block, check if 'payment' is a number.
       If it's not a number, throw a reference error stating
       'payment is not a number'.
       If it is a number, perform the calculation and log out
       the result.
    3. Add a catch block to log out the error.
*/
  try {
    if (typeof (payment) == "number") {
      console.log(payment + 10);
    } else {
      throw ReferenceError("Payment is not a number");
    }
  } catch (error) {
    console.log(error);
  }
}

addTouristSurcharge(60);
addTouristSurcharge('60');
