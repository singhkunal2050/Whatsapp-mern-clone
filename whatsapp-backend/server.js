// importing  libraries 
// import express  from 'express'
const express = require('express')


// app config 
const App = express()
const port = process.env.PORT || 9000


//middleware 



// database config 



/// 


/// api routes 
App.get('/' , ( req, res )=> {
  res.status(200).send('hello world');
});


// listen

App.listen(port , () =>{
  console.log("Listening to port..............");
})