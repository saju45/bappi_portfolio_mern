import cors from "cors";
import { config } from "dotenv";
import express from "express";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminRoute.js";
import testimonialRouter from "./routes/testimonialRoute.js";
import workRouter from "./routes/workRoute.js";
const app=express();

config();

connectDB();
connectCloudinary();
app.get("/",(req,res)=>{
    res.status(200).json({message:"hello bangladesh"})
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/testimonials",testimonialRouter);
app.use("/works",workRouter);
app.use("/admin",adminRouter);
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("app in running on port : ",port);
    
})