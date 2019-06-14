var express     = require("express"),
    bodyParser  = require("body-parser");




//so body-parser works
app.use(bodyParser.urlencoded({extended: true}));

//making it so express uses the public dir
app.use(express.static("public"));
    
//setting the view engine to ejs
app.set("view engine", "ejs");

app.get("/", function(res, req){
    res.render("index");
});

app.get("/contact", function(res, req){
    res.render("contact");
});

app.post("/contact", function(res, req){
    
});


app.listen(3000, function(){
    console.log("Server Started");
});