var express= require("express")
var cors= require('cors')
var{MongoClient}=require('mongodb')

var dburl= "mongodb+srv://tobby123:Meandsunday08@cluster0.bu7qdsk.mongodb.net/?retryWrites=true&w=majority"
var route= express();
const dbname= "UserdataDB";
const collectionname="UserdataCollection";


route.get("/userdata", (err, res)=>{
    MongoClient.connect(dburl, (err, cluster)=>{
        if(err){
            res.send({
                ok: false,
                msg: "failed to connect with database"
            });
        }else{

            const dbref= cluster.db("UserdataDB")
            const collref= dbref.collection("UserdataCollection")
         collref.find().toArray((err, data)=>{
            if(err){
                res.send({
                    ok: false,
                    msg:"Error while getting data from collection"
                });
            }else{
                res.json({
                    ok:true,
                    length:data.length,
                    results:data,
                });
            };
         });

        };
    });//path will be //http://localhost:4001/users/userdata

});
route.post("/newusers", (req, res)=>{
    console.log(req.body);
    MongoClient.connect(dburl,(err, cluster)=>{
        var dbref= cluster.db(dbname);
        var collRef= dbref.collection(collectionname);
        collRef.insertOne(req.body, (err)=>{
            if(err){
         res.send({
            ok: false,
            msg:"error while inserting data"
         })
            }else{
                res.json({
                    ok:true,
                    msg:"inserted data sucessfully",
                });
            };
        });

    });
}); //path will be //http://localhost:4001/users/newUsers



module.exports=route;