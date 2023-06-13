// Implement a Node.js program that appends the text " This is my text." to the end of the file "mynewfile1.txt" using the fs.appendFile() method.

var fs = require("fs");

fs.appendFile("mynewfile1.txt", "This is my text.", function (err) {
  if (err) throw err;
});
