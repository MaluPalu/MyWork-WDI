const express = require("express");
const app = express();

//LISTEN for GET request to the /hello route
app.get("/hello",  (req, res) => {
  //Issure HTML response with text "Hello World"
  res.send("Hello World!");
});

app.get("/goodbye", (req, res) => {
  res.send("Goodbye World :(");
});

app.get("/greet/:greeting/:name", (req, res) => {
  //The colons allow the multiple variables
  //Retrieve request parameters from the URL using req.params.{reoute parameter name}
  res.send(`${req.params.greeting} ${req.params.name}`);
});

app.listen(3000);
