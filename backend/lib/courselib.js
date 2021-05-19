const mongoose=require('mongoose')
const coursemodel=require('../models/coursemodel');
module.exports.createcourse = function(req,res){

    // var course=new coursemodel(req.body);
    // course.save(function(err,course){
    //     if(err){
    //         console.log("err"+err);
    //     }
    //     else{
    //         callback(Err,courseobj);
    //     }
    // })

}
module.exports.getallcourses = function(req,res){
    var query={}
    coursemodel.find(query,function(err,courseobjarr){
        if(err){
            res.json({ error: err});
        }
        else{
            res.json(courseobjarr);
        }
    })

}