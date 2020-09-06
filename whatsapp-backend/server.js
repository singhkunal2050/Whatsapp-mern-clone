// importing  libraries 
import express from 'express'


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

app.listen(port , () =>{
  console.log("Hello world");
})