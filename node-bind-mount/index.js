const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const app = express();

app.get('/home', (req, res) => {
  res.send("This is home page")
})

app.get('/info', (req, res) => {
  res.send("This is info page")
})

app.get('/about', (req, res) => {
  res.send("This is about page")
})

app.listen(process.env.PORT, () => {
  console.log("server is started at port no. 3000")
})
