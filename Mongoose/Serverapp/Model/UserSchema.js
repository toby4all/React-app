var mongoose= require('mongoose')
      var userschema= new mongoose.Schema({
        name:String,
        email: String,
        phone: Number,
       });

     var user=  new mongoose.model("users", userschema)
     module.exports=user