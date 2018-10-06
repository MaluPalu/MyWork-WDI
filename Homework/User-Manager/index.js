const express = require("express");
const app = express();

const request = require('request-promise');

app.set("view engine", "ejs");


const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.static("./assets"));

// app.get("/persons", (req, res) => {
//   request({
//     uri: 'http://myapi-profstream.herokuapp.com/api/dfad28/persons',
//     method: "GET",
//     json: true
//   })
//   .then((personsData) => {
//     res.render("index", {
//       persons: personsData
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });
// app.post("/persons", (req, res) => {
//   request({
//     uri: 'http://myapi-profstream.herokuapp.com/api/dfad28/persons',
//     method: "POST",
//     body: req.body,
//     json: true
//   })
//   .then(() => {
//     res.redirect("/persons");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });
// app.get("/persons/:id", (req, res) => {
//   request({
//     uri: `http://myapi-profstream.herokuapp.com/api/dfad28/persons/${req.params.id}`,
//     method: "GET",
//     json: true
//   })
//   .then((personsData) => {
//     console.log("personsData", personsData);
//     res.render("edit", {
//       person: personsData
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//
// });
// app.put("/persons/:id", (req, res) => {
//   request({
//     uri: `http://myapi-profstream.herokuapp.com/api/dfad28/persons/${req.params.id}`,
//     method: "PUT",
//     body: req.body,
//     json: true
//   })
//   .then(() => {
//     res.redirect("/persons");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });
// app.delete("/persons/:id", (req, res) => {
//   console.log('delete');
//   request({
//     uri: `http://myapi-profstream.herokuapp.com/api/dfad28/persons/${req.params.id}`,
//     method: "DELETE"
//   })
//   .then(() => {
//     console.log('back fro the');
//     res.redirect("/persons")
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });
app.use(require("./resources"));

app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
