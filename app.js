var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");




//so body-parser works
app.use(bodyParser.urlencoded({extended: true}));

//making it so express uses the public dir
app.use(express.static("public"));
    
//setting the view engine to ejs
app.set("view engine", "ejs");

// Routes

// index route
app.get("/", function(req, res){
    res.render("index");
});

// post request for contact form
app.post("/contact", function(req, res){
    
});

// serving the application to local host 3000
app.listen(3000, function(){
    console.log("Server Started");
});