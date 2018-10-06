const request = require("request-promise");
const Person = require("../../../models/persons");
module.exports = (req, res) => {
  Person
  .destroy(req.params.id)
  .then(() => {
    res.redirect("/persons")
  })
  .catch((err) => {
    console.log(err);
  });
};
