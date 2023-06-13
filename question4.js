// Write a JavaScript program that uses a while loop to reverse a given number.

var num = 12345;
var rev = 0;

while (num > 0) {
  rev = rev * 10 + (num % 10);
  num = Math.floor(num / 10);
}

console.log(rev);
