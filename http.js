var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    switch (req.url) {
      case "/about":
        fs.readFile("views/about.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
          }
          res.end();
        });
        return;
      case "/contact":
        fs.readFile("views/contact.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
          }
          res.end();
        });
        return;
      case "/products":
        fs.readFile("views/product.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
          }
          res.end();
        });
        return;
      case "/subscribe":
        fs.readFile("views/sub.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
          }
          res.end();
        });
        return;
      case "/":
        fs.readFile("views/blank.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
          }
          res.end();
        });
        return;
      case "/woah":
        fs.readFile("views/woah.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
          }
          res.end();
        });
        return;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 Not Found");
    }
    res.end();
  })
  .listen(8080);
