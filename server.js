const express = require('express');
 
const app = express();
 
app.get("/", function(req, res){
    res.send("Welcome to jeevan  Site");
})
app.get("/resume",function(req,res){
    res.send("html");
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 //it is changed
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
