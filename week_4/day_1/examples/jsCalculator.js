// Make a calculator in JavaScript
// Do not need a quit statement

// if statements
// if (condition) {
  // do something
// } else {
//   do something else
// }

// if else statements
// if (condition) {
//   // do this
// } else if (condition) {
//   do this thing
// } else {
//   do the final thing
// }

// calculate("multiply", num1, num2);
// print out the mseesage of whatever operation they did
// console.log("You did multiply and your answer is ${answerHere}")
// and the correct answer

function calculate(operand, num1, num2) {
  // operand = ""
  if (operand == "add") {
    console.log(num1 + num2);
  } else if (operand == "subtract") {
    console.log(num1 - num2);
  } else if (operand == "multiply") {
    console.log(num1 * num2);
  } else if (operand == "divide") {
    console.log(num1 / num2);
  } else {
    console.log("Error")
  }
};
calculate("divide", 5, 2)