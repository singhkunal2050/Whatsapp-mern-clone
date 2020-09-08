// importing  libraries 
// import express  from 'express'
const express = require('express')
const mongoose = require('mongoose')

// app config 
const App = express()
const port = process.env.PORT || 9000


//middleware 



// database config
const connection_url = 'mongodb+srv://admin:<iqoMbNLrwYJDGZ8V>@cluster0.tq5ix.mongodb.net/<whatsappdb>?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser:true,
  useUnifiedTopology:true
})





/// 


/// api routes 
App.get('/', (req, res) => {
  res.status(200).send('hello world');
});


// listen

App.listen(port, () => {
  console.log("Listening to port..............");
})