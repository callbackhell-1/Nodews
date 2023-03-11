const express = require("express");
const port = 8000;

const app = express();

app.listen(port, (err) => {
  if (err) {
    console.log("Error in port", err);
  }
  console.log(`Server is up and running on port ${port}`);
});
