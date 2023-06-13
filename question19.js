// Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. Implement a promise that resolves with the generated random number.
// The promise should be rejected if the generated number is less than 5.

function getRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

new Promise((resolve, reject) => {
  if (getRandomNumber() < 5) {
    reject(new Error("number < 5"));
  } else {
    resolve("number > 5");
  }
}).then((msg) => console.log(msg));
