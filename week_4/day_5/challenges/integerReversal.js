// 2. Integer Reversal
//  Write a function that reverses a given integer.
// Caveats:
// - Remove trailing and beginning zeros.
// - Keep floats floats and numbers numbers.
// - Negative numbers should be kept negative

// 485 = 584
// 0076 = 67
// -756.65 = -56.657
// 7560.00 = 657

const integerReversal = (num) => {
  const removeZero = num.toString().replace(/^0+(\d)|(\d)0+$/gm, "$1$2");
  const reversedString = removeZero.split('').reverse();
  if (reversedString[reversedString.length -1] === '-') {
    reversedString.pop()
    result = Number(reversedString.join('')) * -1;
  } else {
    result = Number(reversedString.join(''));
  }
  return result
};

console.log(integerReversal(485))
console.log(integerReversal(0076))
console.log(integerReversal(-756.65))
console.log(integerReversal(7560.00))
