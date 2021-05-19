const mongoose=require('mongoose');
var courseSchema=new mongoose.Schema({
    coursename:String,
    Articels:Number,
    isDeleted:Boolean
});
var coursemodel = mongoose.model('course',courseSchema);
module.exports = coursemodel;