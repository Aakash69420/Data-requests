// // // // function greeting(){
// // // //   console.log("first")
// // // // }
// // // // module.exports = greeting;
// // // // const os = require("os")
// // // // console.log(os.freemem())  

// // // const EventEmitter = require("events")
// // // // console.log(EventEmitter)

// // // const eventEmitter = new EventEmitter()
// // // eventEmitter.on('messageLogged', function(msg){
// // //  console.log(msg)
// // // })
// // // eventEmitter.emit('messageLogged', "hey")

// // const http = require("http")
// // // console.log(http)

// // const server = http.createServer((req, res) => {
// //   if(req.url == "/"){
// //    res.write("Connection Done!")
// //    res.end()
// //   }

// //   if(req.url == "/Aakash"){
// //    res.write("Connection with Aakash established")
// //    res.end()
// //   }

// //   if(req.url == "/Siddhanth"){
// //    res.write("Connection with Siddhanth established")
// //    res.end()
// //   }
// // })
// // // console.log(server)
// // // server.on("connection", function(socket){
// // //  console.log("Connection Created")
// // // })
// // server.listen(3000)

const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log("This app is listening on port " + port)
})

app.get('/', (req, res) => {
  res.status(200).json({message: "OK"});
})

app.get('/aakash', (req, res) => {
  res.status(200).json({message: "Hey Aakash!"});
})

app.post('/', (req, res) => {
  res.status(200).json({message: "OK again!"});
})

app.get('/hello', (req, res) => {
  res.status(200).json({message: "Hello World!"});
})

app.get('/bye', (req, res) => {
  res.status(200).json({message: "Goodbye World!"});
})

app.put('/update', (req, res) => {
  res.status(200).json({message: "Resource Updated!"});
})

const fs = require('fs');

// GET route to view data
app.get('/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.status(200).json(JSON.parse(data));
  });
});

// POST route to add new data
app.post('/data', (req, res) => {
  const newData = {
    "id": 9,
    "name": "New Tour",
    "duration": 7,
    "maxGroupSize": 20,
    "difficulty": "medium",
    "ratingsAverage": 4.5,
    "ratingsQuantity": 20,
    "price": 500,
    "summary": "This is a new tour",
    "description": "This is the description for the new tour",
    "imageCover": "new-tour-cover.jpg",
    "images": [
      "new-tour-1.jpg",
      "new-tour-2.jpg",
      "new-tour-3.jpg"
    ],
    "startDates": [
      "2023-06-01,10:00",
      "2023-07-01,10:00",
      "2023-08-01,10:00"
    ]
  };
  
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    let currentData = JSON.parse(data);
    currentData.push(newData);
    fs.writeFile('data.json', JSON.stringify(currentData), (err) => {
      if (err) throw err;
      res.status(200).json(newData);
    });
  });
});

