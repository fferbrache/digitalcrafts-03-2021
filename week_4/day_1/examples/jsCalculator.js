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
    answer = num1 + num2
    console.log(`You chose ${operand} and your answer is ${answer}`);
  } else if (operand == "subtract") {
    answer = num1 - num2
    console.log(`You chose ${operand} and your answer is ${answer}`);
  } else if (operand == "multiply") {
    answer = num1 * num2
    console.log(`You chose ${operand} and your answer is ${answer}`);
  } else if (operand == "divide") {
    answer = num1 / num2
    console.log(`You chose ${operand} and your answer is ${answer}`);
  } else {
    console.log("Error")
  }
};
calculate("add", 5, 2)
calculate("subtract", 5, 2)
calculate("multiply", 5, 2)
calculate("divide", 5, 2)