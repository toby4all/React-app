var express= require("express");
var userroute= express.Router();
var user= require("../Model/UserSchema")



userroute.get("/", (req, res)=>{
    res.send("user route is working")
}) //http://localhost:5001/user/

userroute.post("/newuser", (req, res)=>{
  var newuser= new user({
    name:"Oluwatobi ",
    email:"sql@gmail.com",
    phone:"235739900",

   });

   newuser.save()
   .then(()=>{
    res.json({
        status: "Succesfull",
        msg:"inserted data sucesfully"
    });
   })
   .catch(()=>{
    res.json({
        status:"Failure",
        msg:"data not stored succesfully"
    })
   })
}); //http://localhost:5001/user/newuser

module.exports= userroute;