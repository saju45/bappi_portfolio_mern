import express from "express";
import { addWork, deleteWork, getWorks, singleWork, updateWork } from "../controllers/workController.js";
import upload from "../middlewares/multer.js";

const workRouter=express.Router();

workRouter.post('/add',upload.single("image"),addWork);
workRouter.get("/get",getWorks);
workRouter.get("/single/:id",singleWork);
workRouter.put("/update/:id",upload.single("image"),updateWork);
workRouter.delete("/delete/:id",deleteWork);


export default workRouter;