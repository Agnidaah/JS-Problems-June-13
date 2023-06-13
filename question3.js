// Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels. Input: "Hello, World!"

var input = "Hello, World!";
input = input.toLowerCase();
var count = 0;
for (var i = 0; i < input.length; i++) {
  if (check(input.charAt(i))) {
    count++;
  }
}

console.log(count);

function check(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  }
  return false;
}
