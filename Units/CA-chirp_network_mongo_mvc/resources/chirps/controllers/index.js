const Chirp = require("../../../models/chirp");

module.exports = (req, res) => {
    //Pull from MongoDB
    //Insert MongoDB records into index.ejs
    Chirp.find({}, (err, chirpsData) => {
        res.render("index", {
            chirps: chirpsData
        });
    });
}
