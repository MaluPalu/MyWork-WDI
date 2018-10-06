// const request = require("request-promise");
const Person = require("../../../models/persons");
module.exports = (req, res) => {
  Person
  .create(req.body)
      .then(() => {
          res.redirect("/persons")
      })
      .catch((err) => {
          console.log(err);
      });
}
