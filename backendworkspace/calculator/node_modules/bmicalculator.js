
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname +"/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
  console.log(req.body);

  var num1 = Number(req.body.h);
  var num2 = Number(req.body.w);

  var result = num1/Math.pow(num2, 2);

  res.send("Your BMI is " + result);
})

//naming of the values comes from the "name" attr in the html.


app.listen(3030, function(){
console.log("Server at 3030")});
