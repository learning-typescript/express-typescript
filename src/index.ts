import express from 'express';
const app = express();
app.use(express.json())
const PORT =  4000;

app.get('/ping',(_req,res)=>{
    
    console.log('sesion pingeed here!!');
    res.send('asssion pingeed here')
})

app.listen(PORT,()=>{
    console.log(`server run in port : ${new Date().toLocaleString()}`);
    
})