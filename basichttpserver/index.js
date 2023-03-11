const http = require("http");
const port = 8000;

function requestHandler(req, res) {
  console.log(req.url);
  res.end("Hello Node");
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log("error in port :", err);
    return;
  }
  console.log("server is running on port", port);
});
