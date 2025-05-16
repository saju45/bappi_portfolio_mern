import express from "express";
import { addTestimonials, deleteTestimonial, getTestimonials, singleTestimonial, updateTestimonial } from "../controllers/testimonialcontroller.js";
import adminAuth from "../middlewares/adminAuth.js";
import upload from "../middlewares/multer.js";

const testimonialRouter=express.Router();

testimonialRouter.post('/add',adminAuth,upload.single("image"),addTestimonials);
testimonialRouter.get("/get",getTestimonials);
testimonialRouter.get("/single/:id",singleTestimonial);
testimonialRouter.put("/update/:id",adminAuth,upload.single("image"),updateTestimonial);
testimonialRouter.delete("/delete/:id",adminAuth,deleteTestimonial);


export default testimonialRouter;