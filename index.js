var express = require('express')


var app = express()

app.get("/", (request, response)=>{
    response.send("<h2>Hello Youyou !!</h2>")
});


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`))

/// START MONGODB
// docker exec -ti node-docker_mongo_1 mongo -u "tary" -p "youyou"  

/// DOWN 
// node-docker % docker-compose -f docker-compose.yml -f docker-compose.dev.yml  down 

/// UP
// docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d 

