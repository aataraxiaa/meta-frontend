var hotel = {};

hotel.name = 'The Grand';
hotel.price = 200;
hotel.stars = 5;
hotel.isFull = false;

hotel.summariseHotel = function () {
  console.log('The Grand is a beautiful 5 star hotel')
}

hotel.summariseHotel()

/*
Task:
  1. Add a new method to the object called 'hotelClosed'.
  2. When called, this new method should log out the phrase 'I'm sorry,
     the hotel is currently closed.'
  3. Call the method to check it works.
*/

hotel.hotelClosed = function () {
  console.log("I'm sorry, the hotel is currently closed.");
}

hotel.hotelClosed();
