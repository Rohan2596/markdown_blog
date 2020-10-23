const express=require('express');
const router=express.Router();
const Post=require('../model/Post');

router.get("/",(request,response)=>{
    response.send("We are on posts.");
    
});
router.post("/",(request,response)=>{
    
    const post=new Post({
        title:request.body.title,
        description:request.body.description
    });
    
    post.save()
    .then(data=>{
        response.json(data);
    })
    .catch(err=>{
        response.json({message:err})
    });
    
    
});
module.exports=router;