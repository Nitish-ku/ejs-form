const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.render("index.ejs");
});

app.post("/", function(req, res){
    const fName = req.body.fName;
    const lName = req.body.lName;
    const numberOfLetters = fName.length + lName.length;

    console.log(numberOfLetters);
    res.render("index.ejs", { numberOfLetters : numberOfLetters });
});

const port = 6969;
app.listen(port, ()=>{
    console.log("server is running on port 6969");
});