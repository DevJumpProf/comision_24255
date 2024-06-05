const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    if (req.url == "/") {
      res.end("este es el home");
    } else if (req.url == "/conocenos") {
      res.end("estas en la seccion conocenos");
    } else {
      /*     res.writeHead(400,{"content-type":"text/plain"}) */
      res.end("Error 404");
    }
  })
  .listen(3030, "localhost");
