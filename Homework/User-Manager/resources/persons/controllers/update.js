const request = require("request-promise");
const Person = require("../../../models/persons");

module.exports = (req, res) => {
  Person
.put(req.params.id, req.body.persons)
.then(() => {
  res.redirect("/persons")
})
.catch((err) => {
  console.log(err);
});
};
