//  Write a funciton that reverses a given string
// Do not use .reverse()

// Method: Used a for loop to decrement
let stringReversal = (input) => {
  let str = input.toString()
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(stringReversal("apple"));

// Tyler solution with array methods

const strReversal = (word) => {
  const strArray = word.split("");
  let newArray = [];
  for (let i = word.length - 1; i >= 0; i--) {
    newArray.push(strArray[i])
  }
  let result = newArray.join('')
  return result
};
console.log(strReversal("orange"))