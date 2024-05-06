const express =require('express');
const app=express();
const Connect=require("./dbConnection");
Connect();
app.use(express.json());

const Router=require('./router/route');
app.use('/app',Router);


Port=3000;
app.listen(Port,()=>{
    console.log("app using port no 7000");
})
