const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Ola comosta");
})

app.get("/gay", function(req, res){
  res.send("Ola comosta daddy");
})

app.listen(3000, function(){
  console.log("server at 3k");
});
