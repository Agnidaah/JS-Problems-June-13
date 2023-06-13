// Write a Node.js program that reads the contents of an HTML file and returns the content as the response when accessed via an HTTP server.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(data);
  });
});

server.listen(8080);
