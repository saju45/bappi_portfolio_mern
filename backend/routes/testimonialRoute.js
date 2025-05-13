import express from "express";
import { addTestimonials, deleteTestimonial, getTestimonials, singleTestimonial, updateTestimonial } from "../controllers/testimonialcontroller.js";
import upload from "../middlewares/multer.js";

const testimonialRouter=express.Router();

testimonialRouter.post('/add',upload.single("image"),addTestimonials);
testimonialRouter.get("/get",getTestimonials);
testimonialRouter.get("/single/:id",singleTestimonial);
testimonialRouter.put("/update/:id",upload.single("image"),updateTestimonial);
testimonialRouter.delete("/delete/:id",deleteTestimonial);


export default testimonialRouter;