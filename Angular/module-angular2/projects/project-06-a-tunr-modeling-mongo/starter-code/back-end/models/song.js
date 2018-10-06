var song = require('mongoose'),
  Schema = mongoose.Schema;

  var SongSchema = new Schema({
  	title: String,
  	durations: String,
  	date_of_release: String,
  	album_title: String
  });

var Manager = mongoose.model('Song', SongSchema);

module.exports = Song;
