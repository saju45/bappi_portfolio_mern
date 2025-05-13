import mongoose from "mongoose";

const workSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
   
    category: {
      type: String,
      required: true,
    },
    image: {
        type:String,
        required:true,
    },
  },

  { timestamps: true }
);

const Work = mongoose.model("Work", workSchema);

export default Work;