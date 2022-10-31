const express = require('express');
const path = require('path');
const app= express();
const port = 8000;

//app.use(express.static('static',Options)) 

//express specific stuff
app.use('/static',express.static('static'))  //for serving static
app.use(express.urlencoded())

//PUG specific stuff
app.set('view engine','pug') //set the template enginer as PUG
app.set('views',path.join(__dirname,'views'))  //set the views direction

//ENdPOINTs
app.get('/',(req,res)=>{
   // const con = "THis is the best content on Internet so far"
    const params = {}
    res.status(200).render('home.pug',params);
})

app.get('/contact',(req,res)=>{
    // const con = "THis is the best content on Internet so far"
     const params = {}
     res.status(200).render('contact.pug',params);
 })


//server
app.listen(port,()=>
{
    console.log(`The applications started successfully on port ${port}`)
})

