const express = require('express');
 
const app = express();
app.use(express.static(__dirname + "/frontend"));
 
app.get("/", function(req, res){
    res.send("Welcome to jeevan  Site");
})
app.get("/resume",function(req,res){
    let filepath = __dirname +"/frontend/html/resume.html";

    res.sendFile(filepath);
})
app.get("/google",function(req,res){
    let filepath1 = __dirname +"/frontend/html/google.html"
    res.sendFile(filepath1)
})
app.get("/apple",function(req,res){
    let filepath2 = __dirname +"/frontend/html/apple.html"
    res.sendFile(filepath2)
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 //it is changed
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
