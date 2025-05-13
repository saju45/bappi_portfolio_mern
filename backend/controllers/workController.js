import { v2 as cloudinary } from "cloudinary";
import Work from "../models/workModel.js";

export const getWorks = async (req, res) => {
 
    try {
        const works=await Work.find({});
        return res.status(200).json(works);
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};


export const singleWork = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);

    if (!work) {
      return res.status(404).json({ error: "Works not found" });
    }

    res.json(work);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const addWork = async (req, res) => {
    try {
      const { title, category, } =
        req.body;
    
      if (!title || !category) {
        return res.status(400).json({ error: "All fields are required" });
      }
    
      if (!req.file) {
        return res.status(400).json({ error: "Please upload a Work image" });
      }
  
      const imageUrl=await cloudinary.uploader.upload(req.file.path,{resource_type:"image"}).then((res)=>res.secure_url);

    

      const newWork = new Work({
        title,
        category,
        image: imageUrl,
      });
  
      await newWork.save();
      res
        .status(201)
        .json({ message: "Works add successfully", work: newWork });
    } catch (error) {
      console.log("errror : ");
        res.status(500).json({ error: error.message });
    }
  };
  

  //remove item
export const deleteWork=async(req,res)=>{

    try {
        const work=await Work.findByIdAndDelete(req.params.id);
       res.status(201).json({message:"Work delete Success"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });

    }
}

export const updateWork = async (req, res) => {
  
       try {
      const { title, category}=req.body;
          console.log(title,category);
          
      if (!title || !category) {
        return res.status(400).json({ error: "Please provide title and category" });
      }
    
     const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: "please provide blogId" });
    }

      
    let work;

    if (req.file) {
        const imageUrl=await cloudinary.uploader.upload(req.file.path,{resource_type:"image"}).then((res)=>res.secure_url);

      work = await Work.findByIdAndUpdate(id, {
        title,
        category,
        image: imageUrl,
      });
    } else {
      work = await Work.findByIdAndUpdate(id, {
        title,
        category,
      });
    }

    res.status(201).json({ message: "Work update successfully", work });
  
     
  } catch (error) {
      console.log("errror : ",error);
        res.status(500).json({ error: error.message });
    }
};
