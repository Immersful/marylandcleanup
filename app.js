var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");




//so body-parser works
app.use(bodyParser.urlencoded({extended: true}));

//making it so express uses the public dir
app.use(express.static("public"));
    
//setting the view engine to ejs
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/contact", function(req, res){
    res.render("contact")
});

app.post("/contact", function(req, res){
    
});


app.listen(3000, function(){
    console.log("Server Started");
});