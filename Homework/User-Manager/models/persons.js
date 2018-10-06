const request = require("request-promise");

let Person = {};

Person.getAll = () => {
  return request({
    uri: 'http://myapi-profstream.herokuapp.com/api/dfad28/persons',
    method: "GET",
    json: true
  });
}

Person.create = (personsData) => {
  return request({
      method: 'POST',
      uri: 'http://myapi-profstream.herokuapp.com/api/dfad28/persons',
      body: personsData,
      json: true
  });
}

Person.destroy = (id) => {
  return request({
    uri: 'http://myapi-profstream.herokuapp.com/api/dfad28/persons/' + id,
    method: "DELETE"
  });
}

Person.put = (id, personsData) => {
  return request({
    uri: 'http://myapi-profstream.herokuapp.com/api/dfad28/persons/' + id,
    method: "PUT",
    body: personsData,
    json: true
  });
}

Person.getOne = (id) => {
  return request({
    uri: 'http://myapi-profstream.herokuapp.com/api/dfad28/persons/' + id,
    method: "GET",
    json: true
  });
}

module.exports = Person;
