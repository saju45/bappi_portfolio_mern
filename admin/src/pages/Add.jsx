import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';
import upload_icons from "../assets/upload_icon.png";

const Add = ({token}) => {
    const [image,setImage]=useState(null);
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");

    const handleImage=(e)=>{
        setImage(e.target.files[0]);
    }


    const handleSubmit=async(event)=>{

        try {
            event.preventDefault();

            const formData=new FormData();

            formData.append("name",name);
            formData.append("description",description);
            formData.append("image",image);

            const response =await axios.post(`${backendUrl}/testimonials/add`,formData);
            console.log("add response : ",response);
            
            toast.success(response.data.message);
            setImage(null)
            setName("");
            setDescription("");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error);

        }
    }
  return (
    <div className='px-2 sm:px-8 py-12 h-full'>
        <form  className='flex flex-col gap-y-3 medium-14 lg:w-[777px] ' onSubmit={handleSubmit}>
            <div className='w-full'>
                <h5>Client Name</h5>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Write here...' className='px-3 py-1.5 ring-1 ring-slate-900/10  rounded bg-[#fffdf4] mt-1 w-full max-w-lg' />
            </div>

            <div className='w-full'>
                <h5>Client Review</h5>
                <textarea rows={5} value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder='Write here...' className='px-3 py-1.5 ring-1 ring-slate-900/10  rounded bg-[#fffdf4] mt-1 w-full max-w-lg' />
            </div>
            <div className='flex items-end gap-x-6'>

                <div className='flex gap-2 pt-2'>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image):upload_icons} alt="" className='w-14 h-14 aspect-square object-center ring-1 ring-slate-900/10 bg-[#fffdf4] rounded-lg' />
                        <input type="file" name='image'  id='image' hidden onChange={handleImage} />
                    </label>
                </div>
            </div>

          
            <button type="submit" className='btn-dark rounded mx-3 max-w-44 sm:w-full'>Add Review</button>
        </form>
    </div>
  )
}

export default Add