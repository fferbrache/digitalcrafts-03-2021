// Create a JS function to transform the object values to an array
// Pseudocode
// Have an object with key:value pairs
// We want to transform the object values to an array
// Ex: ['Tyler', 28, '180cm", 'Football', 'Overwatch']
// We should use .push method in JS, in Python it would be .append
// Use dot notation for each value, (ex. .push(obj.person.name) should add 'Tyler' to the array)
// We will also need to define an empty array
// We need to return the array once the values are in it
// We should console.log the array to view it in the console
const obj = {
    person: {
        name: 'Tyler',
        age: 28,
        height: '180cm'
    },
    hobbies: {
        sport: 'Football',
        game: 'Overwatch'
    }
}
const newArray = [];
function transform (obj) {
  newArray.push(obj.person.name)
  newArray.push(obj.person.age)
  newArray.push(obj.person.height)
  newArray.push(obj.hobbies.sport)
  newArray.push(obj.hobbies.game)
  return newArray
}
console.log(transform(obj))