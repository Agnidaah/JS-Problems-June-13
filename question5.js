// write a JavaScript program that checks if a given string is a palindrome.

var string = "racecar";

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome(string));
