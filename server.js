const express= require('express')
const app=express();
const articleRouter=require('./routes/articles')
app.set('view engine','ejs')

app.use('/article',articleRouter)
app.get('/',(request,response)=>{
    response.render('index.ejs')
})
app.listen(5000)