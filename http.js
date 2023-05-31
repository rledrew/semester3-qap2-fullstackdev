var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    switch (req.url) {
      case "/about":
        res.write("WHAT'S THIS ALL ABOUT?????");
        break;
      case "/contact":
        res.write("Do not contact me");
        break;
      case "/products":
        res.write("Khajit has wares if you has coin");
        break;
      case "/subscribe":
        res.write("snubsnirb");
        break;
      case "/":
        res.write("you sneaky you");
        break;
      case "/woah":
        res.write("Far out man");
        break;
    }
    res.end();
  })
  .listen(8080);
