//  Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum. The function should accept a callback function callback that receives the calculated sum. Invoke the callback function with the sum of the array elements.

function calculateSum(arr, callback) {
  const sum = arr.reduce((sum_, elem) => {
    return sum_ + elem;
  });
  callback(sum);
}

function print(sum) {
  console.log("Sum: ", sum);
}

calculateSum([2, 4, 6, 8], print);
