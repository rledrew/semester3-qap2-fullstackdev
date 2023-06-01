var http = require("http");
var fs = require("fs");
var EventEmitter = require("events");

var myEmitter = new EventEmitter();

http
  .createServer(function (req, res) {
    myEmitter.on("writeToConsole", (message) => {
      console.log(message);
    });
    switch (req.url) {
      case "/about":
        fs.readFile("views/about.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            myEmitter.emit("writeToConsole", "No file found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            myEmitter.emit("writeToConsole", "About page was visited");
          }
          res.end();
        });
        return;
      case "/contact":
        fs.readFile("views/contact.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            myEmitter.emit("writeToConsole", "No file found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            myEmitter.emit("writeToConsole", "Contact page was visited");
          }
          res.end();
        });
        return;
      case "/products":
        fs.readFile("views/product.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            myEmitter.emit("writeToConsole", "No file found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            myEmitter.emit("writeToConsole", "Products page was visited");
          }
          res.end();
        });
        return;
      case "/subscribe":
        fs.readFile("views/sub.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            myEmitter.emit("writeToConsole", "No file found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            myEmitter.emit("writeToConsole", "Subscribe page was visited");
          }
          res.end();
        });
        return;
      case "/":
        fs.readFile("views/blank.html", (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            myEmitter.emit("writeToConsole", "No file found");
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
            myEmitter.emit("writeToConsole", "No file found");
            return;
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            myEmitter.emit("writeToConsole", "Woah page was visited");
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
