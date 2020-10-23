const express=require('express');
const { response } = require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser=require('body-parser');


app.use(bodyparser.json());

//Import postsRoute
const postsRoute=require('./routes/post');
app.use('/post',postsRoute);

//middleWare
app.use('/post',()=>{
    console.log("this is a middle ware");
    
})

//routes
app.get("/",(request,response)=>{
    response.send("Welcome to Node Js.");
});

//Connect to DB
mongoose.connect('http://localhost:27017/myDb',
{ useNewUrlParser:true },
()=>console.log('Connected to DB!')
);
//listening to port
app.listen(3001);
