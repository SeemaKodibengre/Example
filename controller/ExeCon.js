const mySchema=require("../models/Exe");

//Insert

const Insert= async(req,res)=>{
try{
const {name,age}=req.body;
const checkAge=await mySchema.findOne({age});
if(checkAge){
    console.log("already exist");
    return res.status(500).json("akready exists");
}else{
    const data=await new mySchema({name,age});
    const dataSave=await data.save();
    res.send({"success":true,dataSave})
    
}
}
catch(err){
    console.log("error");
    res.status(400).json("internal error",err);
}
}


const View=async(req,res)=>{
const data=await mySchema.find();
if(!data){
    console.log("not present ");
    return res.status(404).json("not present");
}else{
    console.log(data);
    res.json(data)
}
}
const View1=async(req,res)=>{
    const data=await mySchema.findById(req.params.id);
    if(!data){
        console.log("not present with this id ");
        return res.status(404).json("not present with this id");
    }else{
        console.log(data);
        res.json(data)
    }
    }

const Delete=async(req,res)=>{
    try{
        const data=await mySchema.findById(req.params.id);
        if(!data){
            console.log("not present with this id ");
            return res.status(500).json("not present with this id");
        }else{
            data=await mySchema.findByIdAndDelete(req.params.id);
            console.log("data delete successfully");
            res.json(data)

        }
    }
    catch(err){
        console.log("error");
       
    }
}





const Update=async(req,res)=>{
    const {name,age}=req.body;
    try{
        const newData={};
        if(name){newData.name=name};
if(age){newData.age=age};

const data=await mySchema.findById(req.params.id);
if(!data){
    console.log("not present");
}else{
    data=await new mySchema.findByIdAndUpdate(req.params.id,{$set:newData});
    console.log("successfully updated");
    res.json(data)
}
    }
    catch(err){
        console.log("error");
        res.status(500).json("internal error",err);
    }
}


module.exports={Insert,View,View1,Delete,Update};


























