var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TextPostSchema = new Schema({
  title: String,
  content: String,
  thumbnail_image_url: String,
  votes: Number,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
});

var TextPost = mongoose.model('TextPost', TextPostSchema);

module.exports = TextPost;
