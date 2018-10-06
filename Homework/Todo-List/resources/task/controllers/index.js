const Task = require("../../../models/task");

module.exports = (req, res) => {
    //Pull from MongoDB
    //Insert MongoDB records into index.ejs
    Task.find({}, (err, taskData) => {
      console.log(taskData);
        res.render("index", {
            tasks: taskData
        });
    });
}
