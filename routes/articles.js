const express=require('express')
const router=express.Router()

router.get('/res',(request,response)=>{
    response.send('In articles.')
})
module.exports=router