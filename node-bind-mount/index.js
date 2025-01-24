const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const app = express();

app.get('/home', (req, res) => {
  res.send("This is home page")
})

// for mapping the local host and docker file changes
// docker run -it --init -p 3002:3000 -v "%cd%":/prave/nodejs/node-bind-mound-project app-bind-mount-node:latest
// use this cammand to run the docker container
app.get('/info', (req, res) => {
  res.send("This is info page")
})

app.get('/about', (req, res) => {
  res.send("This is about page")
})

app.listen(process.env.PORT, () => {
  console.log("server is started at port no. 3000")
})
