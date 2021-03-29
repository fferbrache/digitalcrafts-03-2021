// Python Basics
// hello = "Hello World"
// integer = 2
// boolean = False

// def sum(num1, num2):
//     return num1 + num2

// while (pizza < 8):
//     print("pizza")

// for slice in pizza: 
//     print(slice)

// JavaScript Basics
// Define a variable
// var variable, has a functional scope, function scope
var hello = "Hello World";
// ES6, let has a block scope
let integer = 2;
// constant, has a block scope as well
const boolean = false;

// OG Way
function sumNumbers(num1, num2) {
  // function body, aka inside the curlies
  // for loop syntax
  // for (first arg: variable we define, we initialize to 0)
  // for (second arg: our loop condition, is your loop container)
  // for (third arg: incrementer, add value to it, helps our loop to stop)
  // lexical scoping, variables declared outside or inside of a function
  // are accessible to children of that function, as long as the variable is defined outside of the child function

  // variables defined inside a function, can only exist inside that function

  let number = 9;
  let array = [1,2,3]
  for (let number = 0; loopNumber < array.length; loopNumber++) {
    console.log("inside the loop", number)
  }
  console.log("outside the loop", number)
  return num1 + num2
}
console.log("this is the sum " + sumNumbers(1, 2));

// for (let slice = 0; slice < pizza.length; slice++) {
//   // does stuff here
// }
