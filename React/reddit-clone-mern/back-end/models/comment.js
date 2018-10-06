var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CommentSchema = new Schema({
  content: String,
  votes: String
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
