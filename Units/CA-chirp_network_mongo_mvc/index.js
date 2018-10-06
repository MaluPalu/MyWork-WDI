const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("./assets"));

//Configure body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes in app middleware
app.use(require("./resources"));

app.listen(3000, () => {
    console.log("Server started on port 3000...");
});
