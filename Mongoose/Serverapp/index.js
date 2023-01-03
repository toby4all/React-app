var express= require('express');
var app= express()
var userroute= require("./Routes/UsersRoute")
var Mongoose= require("mongoose")
var dotenv= require("dotenv")
const port= 5001

dotenv.config({path:"./config.env"});
app.use("/user", userroute)

Mongoose.connect(process.env.DATABASE).then(()=>{
console.log("succesfully connected with database")
})
.catch((err)=>{
    console.log(err)
});

app.get("/", (req,res)=>{
    res.send(`<h2>Express app is ok</h2>`

    )
})
app.listen(port,()=>{
    console.log("Server started");
}) // http://localhost:5001/