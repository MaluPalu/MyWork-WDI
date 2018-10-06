var models = require('../models');
var TextPost = models.TextPost;

function index(req, res) {
  TextPost.find({}, function(err, posts) {
    if (err) res.send(err);
    else res.json(posts);
  });
}

function retrieve(req, res) {
  TextPost.findById(req.params.id, function(err, posts){
    if (err) res.send(err);
    else res.json(posts);
  });
}

function create(req, res) {
  TextPost.create(req.body, function(err, posts){
    if (err) res.end(err);
    else res.json(posts);
  });
}

function update(req, res) {
  TextPost.findByIdAndUpdate(req.params.id,
    {$set: req.body}, function(err, post){
    if (err) res.send(err);
    else res.json(post);
  });
}

function destroy(req, res) {
  TextPost.findByIdAndRemove(req.params.id, function(err, post){
    if (err) res.send(err);
    else res.send("post deleted");
  });
}

module.exports.index = index;
module.exports.destroy = destroy;
module.exports.retrieve = retrieve;
module.exports.update = update;
module.exports.create = create;
