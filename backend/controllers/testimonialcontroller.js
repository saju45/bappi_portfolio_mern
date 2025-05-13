import { v2 as cloudinary } from "cloudinary";
import Testimonial from "../models/testimonialModel.js";

export const getTestimonials = async (req, res) => {
 
    try {
        const testimonials=await Testimonial.find({});
        return res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};


export const singleTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ error: "Testimonials not found" });
    }

    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const addTestimonials = async (req, res) => {
    try {
      const { name, description, } =
        req.body;
    
      if (!name || !description) {
        return res.status(400).json({ error: "All fields are required" });
      }
    
      if (!req.file) {
        return res.status(400).json({ error: "Please upload a Testimonials image" });
      }
  
      const imageUrl=await cloudinary.uploader.upload(req.file.path,{resource_type:"image"}).then((res)=>res.secure_url);

    

      const newTestimonials = new Testimonial({
        name,
        description,
        image: imageUrl,
      });
  
      await newTestimonials.save();
      res
        .status(201)
        .json({ message: "Testimonials add successfully", testimonial: newTestimonials });
    } catch (error) {
      console.log("errror : ");
        res.status(500).json({ error: error.message });
    }
  };
  

  //remove item
export const deleteTestimonial=async(req,res)=>{

    try {
        const testimonial=await Testimonial.findByIdAndDelete(req.params.id);
       res.status(201).json({message:"Testimonial delete Succes"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });

    }
}

export const updateTestimonial = async (req, res) => {
  
       try {
      const { name, description}=req.body;
          
      if (!name || !description) {
        return res.status(400).json({ error: "Please provide name and description" });
      }
    
     const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: "please provide blogId" });
    }

      

    let testimonial;

    if (req.file) {
        const imageUrl=await cloudinary.uploader.upload(req.file.path,{resource_type:"image"}).then((res)=>res.secure_url);
        
      testimonial = await Testimonial.findByIdAndUpdate(id, {
        name,
        description,
        image: imageUrl,
      });
    } else {
      testimonial = await Testimonial.findByIdAndUpdate(id, {
        name,
        description,
      });
    }

    res.status(201).json({ message: "testimonial update successfully", testimonial });
  
     
  } catch (error) {
      console.log("errror : ",error);
        res.status(500).json({ error: error.message });
    }
};
