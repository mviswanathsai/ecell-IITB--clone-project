const express = require("express");
const app = express();

const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res)=>{

  res.sendFile(__dirname +"/index.html");
})

app.post("/", (req, res)=>{

  const cityName = req.body.cityName;
  const url ="https://api.openweathermap.org/data/2.5/weather?"+ cityName + ",uk&APPID=de61814edef49cd17126f0b3becca3ad";
  // get hold of the data

  https.get(url, function(response){
    response.on("data", function(data){

      //parse the data
      const weatherData = JSON.parse(data);

      //print the data
      console.log(weatherData);

      //pick and choose what part of data you want
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;

      res.write("The temperature in london is "+ temp);
      res.write("The weather is currrently " + description );
      res.send();
    });
});

})


app.listen(3000, ()=>{
  console.log("server up at 3k");
})
