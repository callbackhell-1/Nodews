const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var contactLst = [
  {
    name: "John Wick",
    phone: "2222",
  },
  {
    name: "John cena",
    phone: "123",
  },
  {
    name: "Bruce wayne",
    phone: "8888",
  },
];

app.get("/", (req, res) => {
  return res.render("home", {
    title: "Contact List",
    contacts_list: contactLst,
  });
});

app.get("/practice", (req, res) => {
  res.render("practice", {
    title: "Practice",
  });
});

app.post("/create-contact", (req, res) => {
  console.log(req);
  // return res.redirect("/practice");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in port", err);
  }
  console.log(`Server is up and running on port ${port}`);
});
