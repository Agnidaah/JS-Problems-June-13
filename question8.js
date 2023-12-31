// Write a Node.js program that creates a server using the built-in 'http' module. Include a custom module called "myDateTime" that returns the current date and time. The server should respond to incoming requests by displaying the current date and time

const http = require("http");
const myDateTime = require("./myDateTime");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(myDateTime.getDateTime().toString());
  res.end("");
});

server.listen(8080);
