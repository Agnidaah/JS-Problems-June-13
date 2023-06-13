// Modify the previous program to include an HTTP header with the content type 'text/html' in the server response.

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead({
    contentType: "text/html",
  });
  res.end("Hello World!");
});

server.listen(8080, () => {
  console.log("server running...");
});
