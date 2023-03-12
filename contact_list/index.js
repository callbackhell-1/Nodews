const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
// console.log(__dirname);
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  return res.render("home", {
    name: "John",
  });
});

app.get("/contactus", (req, res) => {
  res.end("<h1>Thanks for contacting us !</h1>");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in port", err);
  }
  console.log(`Server is up and running on port ${port}`);
});
