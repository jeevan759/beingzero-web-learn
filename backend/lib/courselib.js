const mongoose=require('mongoose')
const coursemodel=require('../models/coursemodel');
module.exports.createcourse = function(req,res){
    console.log("inpost");

    var course=new coursemodel(req.body);
    course.save(function(err,course){
        if(err){
            console.log("err"+err);
        }
        else{
            res.json(course);
        }
    })

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
module.exports.deletecourse =function(req,res){
    console.log("from delete");
    // coursemodel.remove({ _id: req.body.id }, function(err) {
    //     if (!err) {
    //             message.type = 'notification!';
    //     }
    //     else {
    //             message.type = 'error';
    //     }
    // });
    var idd;
    var id= req.params.id;
    var obj = coursemodel.find({_id: id},function(err,obj){
       
    coursemodel.findByIdAndRemove(obj[0]._id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Removed User : ", docs);
        }
    });
    });

}
module.exports.update = function(req,res)
{
   // console.log(req);
    var id =req.params.id;
    var obj = coursemodel.find({_id: id},function(err,obj){
        console.log(JSON.stringify(req.body));
    
    coursemodel.findByIdAndUpdate(obj[0]._id, {Articels: req.body.Articels},
     function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
});
    })
}

   
    // coursemodel.find({
    //     _id: id1
    // }, function (err, docs) {
    //     console.log(JSON.stringify(docs));
    //     // docs.remove(); //Remove all the documents that match!
    // });

   
    // coursemodel.findById(id,function(err,courseobjarr){
    //     console.log(id);
    //     if(err){
    //         console.log(JSON.stringify(courseobjarr));
    //         console.log(res.json({ error: err}).body);
    //     }
    //     else{
    //         console.log(res.json(courseobjarr));
    //     }
    // })
//   }
// 