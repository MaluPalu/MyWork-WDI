const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Connect Mongoose to MongoDB
mongoose.connect("mongodb://localhost/chirp_db");

//Create a new schema to model our "chirp" data
const chirpSchema = new Schema({
    chirp: String
});

const Chirp = mongoose.model("Chirp", chirpSchema);

//Export the model so we can require it later in the controllers (AKA business logic)
module.exports = Chirp;
