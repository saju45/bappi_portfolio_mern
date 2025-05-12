import { config } from "dotenv";
import express from "express";

const app=express();

config();
app.get("/",(req,res)=>{
    res.status(200).json({message:"hello bangladesh"})
});

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("app in running on port : ",port);
    
})