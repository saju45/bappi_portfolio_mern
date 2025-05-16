import express from "express";
import { addWork, deleteWork, getWorks, singleWork, updateWork } from "../controllers/workController.js";
import adminAuth from "../middlewares/adminAuth.js";
import upload from "../middlewares/multer.js";

const workRouter=express.Router();

workRouter.post('/add',adminAuth,upload.single("image"),addWork);
workRouter.get("/get",getWorks);
workRouter.get("/single/:id",singleWork);
workRouter.put("/update/:id",adminAuth,upload.single("image"),updateWork);
workRouter.delete("/delete/:id",adminAuth,deleteWork);


export default workRouter;