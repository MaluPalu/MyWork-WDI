const Task = require("../../../models/task");

module.exports = (req, res) => {

    const myTask = new Task({
        name: req.body.name
    });
    myTask.save((err) => {
        res.redirect("/tasks");
    });
}
