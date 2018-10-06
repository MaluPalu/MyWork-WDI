var db = require('../models');
var Manager = db.Manager;

function index(req, res) {
	Manager.find({}, function(err, managers) {
		if (err) res.send(err);
		else res.json(managers);
	});
}

function create(req, res) {
	Manager.create(req.body, function(err, newManager){
		console.log("This is my manager " + req.body);
		if (err) {
			res.send(err);
		} else {
			console.log(res);
			res.send(newManager);
		}
	});
}

function show(req, res) {
  Manager.findById(req.params.id, function(err, manager){
    if (err) res.send(err);
    else res.json(manager);
  });
}

function update(req, res) {
  Manager.findByIdAndUpdate(req.params.id,
    {$set: req.body}, function(err, manager){
    if (err) res.send(err);
    else res.json(manager);
  });
}

	function destroy(req, res) {
		Manager.findByIdAndRemove(req.params.id, function(err, manager){
	    if (err) res.send(err);
	    else res.send("manager deleted");
	  });
	}


module.exports.index = index;
module.exports.create = create;
module.exports.destroy = destroy;
module.exports.update = update;
module.exports.show = show;
