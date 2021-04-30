const express = require('express');
 
const app = express();
 
app.get("/", function(req, res){
    res.send("Welcome to jeevan  Site");
})
app.get("/resume",function(req,res){
    let filepath = __dirname +"/frontend/html/resume.html";

    res.sendFile(filepath);
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 //it is changed
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
