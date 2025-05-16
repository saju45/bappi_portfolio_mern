import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();
export const adminLogin=async(req,res)=>{
  try {
    const {email,password}=req.body;

    if (!email || !password) {
     return res.status(400).json({ error: "pleasee provide email and password" });

    }
    if (email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD) {
        //generate a token
    const token = jwt.sign(email+password,
      process.env.JWT_SECRET
    );

    res.cookie("jwt", token, { expiresIn: "30d", httpOnly: true });
      return res.status(200).json({ message: "Admin Login Success" ,token});

    }else{
      return res.status(400).json({error:"Invalid Credentials"})
    }

  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: "There was an error in server side" });

  }
}