const express= require("express");
const http = require("https");

const app = express();


app.get("/",function(req,res){
  const url ="https://api.openweathermap.org/data/2.5/weather?q=İzmir&appid=1754d5efd3d0f7aae19a23612571ada7&units=metric";

  http.get(url, function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weather= JSON.parse(data);
      const temp= weather.main.temp;
      const icon= weather.weather[0].icon
      const imageUrl="http://openweathermap.org/img/wn/"+ icon + "@2x.png"
      const description = weather.weather[0].description;
      res.write("<h1>Current temperature in Izmir is  " + temp + "</h1>");
      res.write("<p>Current weather in Izmir is  " + description + "</p>");
      res.write("<img  src="+imageUrl +">");""
      res.send()
    });
  });
});







app.listen(3000,function(){
  console.log("server is runngi in 3000");
});
