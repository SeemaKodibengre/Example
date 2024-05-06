const mongoose=require("mongoose");
const mongoURL="mongodb://127.0.0.1:27017/Example";

const connectMongo=async()=>{
    try{
        await mongoose.connect(mongoURL);
        console.log("connection mongo success");
    }
    catch(err){
        console.log("Error",err);
    }
}

module.exports=connectMongo;