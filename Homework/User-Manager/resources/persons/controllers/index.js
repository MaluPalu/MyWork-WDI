const request = require("request-promise");
const Person = require("../../../models/persons");
module.exports = (req, res) => {
  Person
    .getAll()
    .then((personsData) => {
      res.render("index", {
        persons: personsData
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };
