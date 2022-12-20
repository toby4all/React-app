var express = require("express");
var fs = require("fs");
var cors = require("cors")
const route = express();

route.use(cors());


route.get("/user", (req, res) => {
    res.json([{ name: "Kabir" }, { name: "Raj" }, { name: "Isha" }]);
  }); //http://localhost:6001/user

route.get("/products", (req, res) =>{
   
    fs.readFile("./products.json", "utf-8", (err, data) => {
      res.json(JSON.parse(data));
    });
    console.log('json loaded in the terminal')
  }); //http://localhost:6001/products

  route.listen(6001, () => {
    console.log("Server Started");
  });
