const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>Hello from the Jenkins Web Pipeline</h1>");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
