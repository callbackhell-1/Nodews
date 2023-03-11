const http = require("http");
const port = 8000;

const server = http.createServer();


server.listen(port, (err) => {
  if (err) {
    console.log("error in port :", err);
    return;
  }
  console.log("server is running on", port);
});
