// Write a JavaScript function checkFileExists that checks if a file exists asynchronously  using promises. The function takes a file path as an argument and returns a promise. Inside the function, after a delay of 1 second, check if the file exists. If the file exists, resolve the promise. If the file does not exist, reject the promise.
const fs = require("fs");

function checkFileExists(filePath) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.access(filePath, fs.constants.F_OK, (error) => {
        if (error) {
          reject(new Error("File does not exist"));
        } else {
          resolve("File exists");
        }
      });
    }, 1000);
  });
}

checkFileExists("mynewfile2.txt").then((msg) => console.log(msg));
