const http = require("http");
const port = 8000;
const fs = require("fs");

function requestHandler(req, res) {
  console.log(req.url);
  res.writeHead("200", { "content-type": "text/html" });
  //   res.end("<h1>Hello Node</h1>");

  // reading from html
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.end(data);
  });
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log("error in port :", err);
    return;
  }
  console.log("server is running on port", port);
});
