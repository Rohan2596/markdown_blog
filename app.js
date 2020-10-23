const express=require('express');
const { response } = require('express');
const app=express();
const mongoose=require('mongoose');

//middleWare
app.use('/post',()=>{
    console.log("this is a middle ware");
    
})

//routes
app.get("/",(request,response)=>{
    response.send("Welcome to Node Js.");
});
app.get("/post",(request,response)=>{
    response.send("We are on posts.");
});
//Connect to DB
mongoose.connect('http://localhost:27017/appDB',()=>
console.log('Connected to DB!')
);
//listening to port
app.listen(3000);
