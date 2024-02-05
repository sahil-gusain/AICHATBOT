import express from "express"

const app= express();

app.use(express.json());

app.get('/hello',(req,res,next)=>{
    return res.send("welcome to the world ");
})
app.listen(8000,()=>{console.log('server is open')});
