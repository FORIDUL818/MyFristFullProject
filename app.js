const express=require("express")
const router=require("./src/Routes/api")
const mongoose=require("mongoose")
const bodyPerser=require("body-parser")
const app=express()

app.use(bodyPerser.json());


mongoose.connect("mongodb+srv://practice:practice@cluster0.p6zgz4y.mongodb.net/practice?retryWrites=true&w=majority")
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))

app.use("/api/v1",router);
app.use("*",(req,res)=>{

    res.status(404).json({status:"bad requiest"})
})

module.exports=app;
