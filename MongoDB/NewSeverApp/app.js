var express = require("express");
var mongodb= require("mongodb");
var cors= require("cors");
 var mongoClient=  mongodb.MongoClient;
 var userRouter= require("./Routes/Users/User");

var dburl= "mongodb+srv://tobby123:Meandsunday08@cluster0.bu7qdsk.mongodb.net/?retryWrites=true&w=majority";
Route= express();
Route.use(cors());
Route.use("/users", userRouter)
Route.get('/productdb', (req, res)=>{
mongoClient.connect(dburl, (err, cluster)=>{
    if(err){
        res.send('Error while connecting to the database')
        console.log(err)
    }else {
        dbRef= cluster.db("ProductDB");
        var collectonRef= 
        dbRef.collection("electronicCollection");
        collectonRef.find().toArray((error, data)=>{
            if(error){
                res.send('Error fetching documented data');

            }else{
                res.json({
                    results:data,
                    ok:true,
                });
            }
        });
    }
});
  console.log('database information loaded in the terminal');
});//pathh will be http://localhost:4001/productdb

Route.listen(4001,()=>{
    console.log('Server started')
});