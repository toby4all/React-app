var express= require("express");
var userroute= express.Router();
var user= require("../Model/UserSchema")
var bcrypt= require("bcryptjs")



userroute.get("/", (req, res)=>{
    res.send("user route is working")
}) //http://localhost:5001/user/



userroute.post("/newuser", (req, res)=>{
    console.log(req.body)
    var salt=  bcrypt.genSaltSync(10)
 var hashpassword= bcrypt.hashSync(req.body.password, salt)
  var match = bcrypt.compareSync("david124@", hashpassword)
  console.log(match);
 console.log(salt);
  
 var newuser= new user({
    name:req.body.name,
    email:req.body.email,
    password: hashpassword,
    phone:req.body.phone
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

userroute.get('/getusers',(req, res)=>{
    user.find({}, (err, data)=>{
        if(err){
            res.json({
                status: "Failuer", 
                msg: "failed to retreive data"
            })
        }else{
            res.json({
                status:"Successful",
                msg: "Retrieved data succesfully",
                results: data
            });
        };
    });
} ); //http://localhost:5001/user/getusers

userroute.get('/specificuser', (req, res)=>{
    user.findById('63b3a7508a6050642e63381c', (err, data)=>{
        if(err){
            res.json({
                status: "Failuer", 
                msg: "failed to retreive data"
            })
        }else{
            res.json({
                status:"Successful",
                msg: "Retrieved data succesfully",
                results: data
            });
        };
    })
})

userroute.delete("/deleteuser", (req, res)=>{
    user.deleteOne({email:"mary234@gmail.com"},
    (err, data)=>{
        if(err){
            res.json({
                status: "Failuer", 
                msg: "failed to delete data"
            })
        }else{
            res.json({
                status:"Successful",
                msg: "data deleted succesfully",
            });
        };
    });

});

userroute.put("/updateuser", (req, res)=>{
    var salt=  bcrypt.genSaltSync(10)
    var hashpassword1= bcrypt.hashSync(req.body.password, salt)
     var match = bcrypt.compareSync("david123@", hashpassword1)
     console.log(match);
    console.log(salt);
    user.updateOne({name:"David gary"}, {$set:{password:hashpassword1}},
    (err, data)=>{
        if(err){
            res.json({
                status: "Failure", 
                msg: "failed to update data"
            })
        }else{
            res.json({
                status:"Successful",
                msg: "Updated data succesfully",
            });
        };
    })
})



module.exports= userroute;