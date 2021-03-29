// Define Variables
const hello = "hello"
var helloWorld = "Hello World"

// define an array in javascript
arr = [1, 2, 3, 4, 5]

// define an object in javascript
breakoutRoom = {
  name: "randy",
  name: "randi",
  name: "jorge", 
  name: "frankie"
}
// define an integer
let integer = 2

// define a string
var str = "string"
// re-assign the string you defined above to "This is a new string"
var str = "This is a new string"
// create a new variable that takes your integer above and multiplies it by 5
let timesFive = integer * 5
// Create an array that has the following in it ["swag", 123123, true, false, "boolean"]
randomArray = ["swag", 123123, true, false, "boolean"]

// print out 123123 print out false print out boolean bonus: print out the length of the array
console.log(randomArray[1])
console.log(randomArray[3])
console.log(randomArray[4])
console.log(randomArray.length)

// -Create an object that has the following structure name: "name", age: 20, height: 7.1, metric: "ft"
let infoObject = {
  name: "name",
  age: 20,
  height: 7.1,
  metric: "ft"
}
// You will create 5 objects with unique names, with unique ages, height.
let complexInfoObject = {
  tim: {
    name: "tim",
    age: 25,
    height: 5.10,
    metric: "ft",
  },
  joe: {
    name: "joe",
    age: 30,
    height: 6.0,
    metric: "ft",
    sport: "basketball",
  },
  frankie: {
    name: "frankie",
    age: 31,
    height: 1.2,
    metric: "meters",
  },
  zoe: {
    name: "zoe",
    age: 35,
    height: 5.4,
    metric: "ft",
  },
  sara: {
    name: "sara",
    age: 33,
    height: 5.6,
    metric: "ft",
  },
}
// Print out the first objects name
// Print out the last objects age
// print out the 3rd objects height
// change the 3rd objects height to be 1.2
// change the 3rd objects metric to be "meters"
// create a new key on the 2nd object called sport. Assign it your favorite sport
console.log(complexInfoObject.tim.name)
console.log(complexInfoObject.sara.age)
console.log(complexInfoObject.frankie.height)
console.log(complexInfoObject.frankie.metric)
console.log(complexInfoObject.joe.sport)