const express = require("express");
const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hello from Express js</h1>");
});

app.get("/contactus",(req,res)=>{
    res.end("<h1>Thanks for contacting us !</h1>")
})

app.listen(port, (err) => {
  if (err) {
    console.log("Error in port", err);
  }
  console.log(`Server is up and running on port ${port}`);
});
