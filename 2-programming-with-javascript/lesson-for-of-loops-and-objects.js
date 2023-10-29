const freelancerDev = {
  name: 'Frankie Freeman',
  daysWorked: 26,
  dayRate: 300,
}

/*
Task:
Loop over the properties of the freelancerDev Object and:
  1. Log out an array of all of the keys.
  2. Log out an array of all of the values.
  3. Log out all of the keys and values. Each key/value
  pair should be in it's own array.
  4. Log out the key and value for each property as strings.
*/

console.log(Object.keys(freelancerDev));
console.log(Object.values(freelancerDev));
console.log(Object.entries(freelancerDev));

for (let key of Object.keys(freelancerDev)) {
  console.log(`${key}: ${freelancerDev[key]}`);
}
