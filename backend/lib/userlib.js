const mongoose=require('mongoose')
const usermodel=require('../models/usermodel');
module.exports.createuser = function(req,res){
    console.log("inpost");

    var user=new usermodel(req.body);
    user.save(function(err,user){
        if(err){
            console.log("err"+err);
        }
        else{
            res.json(user);
        }
    })

}
module.exports.userdetails= function(req,res){
    var query={}
    usermodel.find(query,function(err,userobject){
        if(err){
            res.json({error:err});
        }
        else{
            res.json(userobject)
        }
    })
}
module.exports.profile=function(req,res){
    var idd;
    var id= req.params.email;
    console.log(id)
    var obj = usermodel.find({email: id},function(err,obj){
    console.log(obj);
    
       
  
    })};


    

// odule.exports.getallcourses = function(req,res){
//     var query={}
//     coursemodel.find(query,function(err,courseobjarr){
//         if(err){
//             res.json({ error: err});
//         }
//         else{
//             res.json(courseobjarr);
//         }
//     })

// }