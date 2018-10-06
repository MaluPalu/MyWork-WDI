const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Connect Mongoose to MongoDB -- MONGOOSE IS THE CODE PART, MONGODB IS THE DB
mongoose.connect("mongodb://localhost/task_db");


const tasksSchema = new Schema({
    name: String
});

const Task = mongoose.model("Task", tasksSchema);

//Export the model so we can require it later in the controllers (AKA business logic)
module.exports = Task;
