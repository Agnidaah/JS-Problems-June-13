// Modify the previous program to create a new file called "mynewfile2.txt" using the fs.open() method with the "w" flag.

const fs = require("fs");

fs.open("mynewfile2.txt", "w", (err, data) => {
  fs.readFile("mynewfile1.txt", "utf-8", (err, content) => {
    fs.write(data, content, (err) => {
      console.log("file successfully saved");
    });
  });
});
