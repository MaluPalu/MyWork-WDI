const Chirp = require("../../../models/chirp");

module.exports = (req, res) => {
    //Step 1: Extract form data from form submission
    //Step 2: Connect to Mongoose and insert data into MongoDB
    //Step 3: Redirect back to /chirps

    const myChirp = new Chirp({
        chirp: req.body.chirp
    });

    myChirp.save((err) => {
        res.redirect("/chirps");
    });
}
