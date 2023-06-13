// Write a JavaScript function multiplyByTwo that takes a number as an argument and multiplies it by two. Implement a callback function callback that receives the result of the multiplication and displays it on the console. Example Input: multiplyByTwo(5, callback);

function multiplyByTwo(num, callback) {
  callback(num * 2);
}

function print(number) {
  console.log(number);
}

multiplyByTwo(5, print);
