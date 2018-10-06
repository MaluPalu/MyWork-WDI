//Go into our database
const db = require("./models");
const todos = [
  //Add in some simple, hardcoded data
  {
    task: "Rearragne Closet",
    description: "Its messy af",
  },
  {
    task: "Make dinner",
    description: "Im hungry af",
  }
];
//Clear out the todos already there
db.Todo.deleteMany({}, function(err, allTodos) {
  db.Todo.create(todos, function(err, allTodos) {
    console.log("Created Data!");
  });

});
