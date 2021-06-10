const mongoose=require('mongoose')
var userSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    number:Number,
    email:String,
    newpassword:String,
    confirmpassword:String

})
var usermodel = mongoose.model('user',userSchema);
module.exports = usermodel;

// const mongoose=require('mongoose');
// var courseSchema=new mongoose.Schema({
//     coursename:String,
//     Articels:Number,
//     isDeleted:Boolean
// });
// var coursemodel = mongoose.model('course',courseSchema);
// module.exports = coursemodel;