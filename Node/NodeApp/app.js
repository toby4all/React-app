var http = require("http");
var fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.end("NodeJS application is working");
  } else if (req.url === "/users") {
    fs.readFile("./Users.json", "UTF-8", (err, data) => {
      if (err) {
        res.end(
          "Something went wrong while accessing the data,Plz try after sometime"
        );
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/users/1") {
    fs.readFile("./Users.json", "utf-8", (err, data) => {
       data= JSON.parse(data)
      if (err) {
        res.end(
          "Something went wrong while accessing the data,Plz try after sometime"
        );
      } else {
        NewData = data.data.filter((ele) => {
               return  ele.id===1;        
        });
        console.log(NewData)
        //  var filteredData= JSON.stringify(NewData)
         var userdata= NewData[0];
         console.log(userdata)
         userdata= JSON.stringify(userdata)
          res.end(userdata)
      }
    });
  }
}); // http://localhost:5001

server.listen(5001, () => {
  console.log("Server Started");
});

