const express = require('express');
 
const app = express();
app.use(express.static(__dirname + "/frontend"));
 
app.get("/", function(req, res){
    let filepathh=__dirname +"/frontend/html/home.html"
    res.sendFile(filepathh);
})
app.get("/resume",function(req,res){
    let filepath = __dirname +"/frontend/html/resume.html";

    res.sendFile(filepath);
})
app.get("/color", function(req,res){
     let filepathcolor = __dirname +"/frontend/html/color.html";
     res.sendFile(filepathcolor);

})
app.get("/api", function(req,res){
    let filepathapi = __dirname +"/frontend/html/apicall.html";
    res.sendFile(filepathapi);
})
app.get("/google",function(req,res){
    let filepath1 = __dirname +"/frontend/html/google.html"
    res.sendFile(filepath1)
})
app.get("/apple",function(req,res){
    let filepath2 = __dirname +"/frontend/html/apple.html"
    res.sendFile(filepath2)
})
app.get("/register",function(req,res)
{
    let filepathr=__dirname +"/frontend/html/register.html"
    res.sendFile(filepathr)
})
app.get("/login",function(req,res)
{
    let filepathl=__dirname +"/frontend/html/login.html"
    res.sendFile(filepathl)
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 //it is changed
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
