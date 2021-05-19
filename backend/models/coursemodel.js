const mongoose=require('mongoose');
var courseSchema=new mongoose.Schema({
    coursename:String,
    articles:Number,
    isDeleted:Boolean
});
var coursemodel = mongoose.model('course',courseSchema);
module.exports = coursemodel;