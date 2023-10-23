var castle = {};

castle['price'] = 2000000;
castle['color'] = 'pink';
castle['number of rooms'] = 20;


function updateObject(object, key, value) {
  /*
      Task:
      As the function's name suggests, we want to make a change to our
      object. I have added a third parameter called value.

      1. Write code inside the function so that when we call the
         function a new value is assigned to the specified key on
         the object.

      2. Call that function (I have added the value 'Lime Green').
         In the console, you should see the updated color for the
         castle.

         Experiment with different keys and values, for example:
         updateObject(castle, 'price', 4000000).
  */

  object[key] = value;
  console.log(object);
}

updateObject(castle, 'color', 'Lime Green');
updateObject(castle, 'price', 4000000);
