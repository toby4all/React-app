var mongoose= require('mongoose')
var mongoosevalidator= require("mongoose-unique-validator")


      var userschema= new mongoose.Schema({
        name:String,
        email: {
        type:String,
        unique:true,
        required:true,
       },
       password: String,
        phone: Number,
       });

       userschema.plugin(mongoosevalidator);

     var user= new mongoose.model("users", userschema)
     module.exports=user