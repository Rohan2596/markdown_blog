const express=require('express');
const { response } = require('express');
const app=express();
//routes
app.get("/",(request,response)=>{
    response.send("Welcome to Node Js.");
});
app.get("/post",(request,response)=>{
    response.send("We are on posts.");
});

//listening to port
app.listen(3000);
