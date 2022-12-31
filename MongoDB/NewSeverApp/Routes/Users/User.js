var express= require("express")
var cors= require('cors')
var{MongoClient, ObjectId}=require('mongodb')

var dburl= "mongodb+srv://tobby123:Meandsunday08@cluster0.bu7qdsk.mongodb.net/?retryWrites=true&w=majority"
var route= express();
const dbname= "UserdataDB";
const collectionname="UserdataCollection";


route.get("/userdata", (req, res)=>{
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

route.get("/specificuser/:id", (req,res)=>{
    var id= req.params.id;
    MongoClient.connect(dburl,(error, cluster)=>{
        if(error){
         res.send({
            ok:false,
            msg:"Error whle connecting to database",
         });
    } else{
        var dbref= cluster.db(dbname);
        var coll= dbref.collection(collectionname)
        coll.find({
            _id:ObjectId(id),
        }).toArray((err, data)=>{
            console.log(data)
            if(err){
                   res.json({
                    ok:false,
                    msg:"Error while fetching the data"
                });
            }else{
                res.json({
                    ok:true,
                    length:data.length,
                    results:data
                });
                
            }
        })
    }
 });
}); //the path will be http://localhost:4001/users/specificuser/<id>

route.put("/updateuser/:id",(req, res)=>{
    console.log(req.body)
    var id= req.params.id
    MongoClient.connect(dburl,(err, cluster)=>{
        if(err){
     res.json({
        ok:false,
        msg:"Error while conneting to database"
     })
        }else{
            dbref=cluster.db(dbname);
            collref=dbref.collection(collectionname)
            collref.updateOne(
               {_id:ObjectId(id)},{
                $set: req.body
               },(err, data)=>{
             if(err){
             res.json({
                ok:false,
                msg:"Failed to update information"
             })
             }else{
                res.json(
                    {
                    ok:false,
                    msg:"updated sucessfully"
                    } );
             };
               });
        };
    });
}); 
// http://localhost:4001/users/specificuser/<id>

route.delete("/deletuser/:id", (req, res)=>{
    var id= req.params.id;
    MongoClient.connect(dburl, (err, cluster)=>{
        if(err){
            res.json({
                ok:false,
                msg: "Error while connecting to Database"
            })
        }else{
            var dbref= cluster.connect(dbname)
            var collref= dbref.collection(collectionname)
            collref.deletone({
                _id:ObjectId(id),
            }, (err, data)=>{
                if(err){
                    res.json(
                        {
                            ok:false,
                            msg:"failed to delete inforrmation"
                        }
                    )
                }else{
                    res.json({
                        ok:true,
                        msg:"Deleted succesfully"
                    })
                }
            }

            )
        }
    })
})
//path will be http://localhost:4001/users/deleteuser/<id>
module.exports=route;