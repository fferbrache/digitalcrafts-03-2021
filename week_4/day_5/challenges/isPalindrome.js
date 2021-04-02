// Write a JavaScript function that checks whether a passed string is palindrome or not?
// for ex:
// Red = der, output would be false
// racecar = racecar, output would be true

function isPalindrome(input) {
  let str = input.toString();
  let splitWord = str.split('');
  let reverse = splitWord.reverse();
  let reverseWord = reverse.join('');
  if (str == reverseWord) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("red"))
console.log(isPalindrome("racecar"))