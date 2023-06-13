// Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

server.listen(8080, () => {
  console.log("server running on localhost:8080");
});
