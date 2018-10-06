const request = require("request-promise");
const Person = require("../../../models/persons");
module.exports = (req, res) => {
  Person
  .getOne(req.params.id)
  .then((personsData) => {
    res.render("edit", {
      person: personsData
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
