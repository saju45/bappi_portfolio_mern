import axios from "axios";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { TbTrash } from "react-icons/tb";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import upload_icons from '../assets/upload_icon.png';

const RecentWorks = ({token}) => {
    const [image,setImage]=useState(null);
    const [title,setTitle]=useState("");
    const [category,setCategory]=useState("")
    const [recentWorks,setRecentWorks]=useState([]);
    const [editId,setEditId]=useState("");
    const handleImage=(e)=>{
        setImage(e.target.files[0]);
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        const formData=new FormData();
        formData.append("title",title);
        formData.append("category",category);
        formData.append("image",image);
      
        try {
            if (editId) {
             const response=await axios.put(`${backendUrl}/works/update/${editId}`,formData,{headers:{token}});
            toast.success(response.data.message);
            
            setTitle("");
            setCategory("");
            setImage(null);
            setRecentWorks(recentWorks.map((item)=>item._id===editId?{...item,title,category}:item))
            // window.location.reload();
            }else{
            const response =await axios.post(backendUrl+"/works/add",formData,{headers:{token}});
            setTitle("");
            setCategory("");
            setImage(null);
            setRecentWorks((prev)=>[...prev,{...response.data.work}]);
            toast.success(response.data.message)
            }
          
        } catch (error) {
            console.log(error);
            
        }

    }

    const handleDelete=async(workId)=>{

        try {
            const response=await axios.delete(`${backendUrl}/works/delete/${workId}`,{
              headers:{token}
            });
            toast.success(response.data.message);
            setRecentWorks(recentWorks.filter((item)=>item._id!==workId));
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error);
            
        }
    }

    useEffect(()=>{
        const fetchRecetWorks=async()=>{
            try {
                const response=await axios.get(backendUrl+"/works/get");
                console.log("respnse : ",response);
                setRecentWorks(response.data)
                
            } catch (error) {
                console.log(error);
                
            }
        }

        fetchRecetWorks();
    },[]);

    useEffect(()=>{
        const fetchSingleWork=async()=>{

            try {
            
                if (editId) {
                const response=await axios.get(`${backendUrl}/works/single/${editId}`);
                setTitle(response.data.title);
                setCategory(response.data.category);
                // setImage(response.data.image)
                
            }

            } catch (error) {
              console.log(error);
                
            }
        }

        fetchSingleWork();
    },[editId])
  return (
    <div>
        <h3 className="text-green-700">Recent Works</h3>
        <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit} >
            <input
             type="text"
              placeholder="Title"
              className='px-3 py-1.5 ring-1 ring-slate-900/10  rounded bg-[#fffdf4] mt-1 w-full md:w-3/4 max-w-lg'
              name="title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
               />
            <input
             type="text"
              placeholder="Category"
              className='px-3 py-1.5 ring-1 ring-slate-900/10  rounded bg-[#fffdf4] mt-1 w-full md:w-2/4 max-w-lg'
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
               />

             <div className='flex gap-2 pt-2'>
                  <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):upload_icons} alt="" className='w-14 h-14 aspect-square object-center ring-1 ring-slate-900/10 bg-[#fffdf4] rounded-lg' />
                      <input type="file" name='image'  id='image' hidden onChange={handleImage} />
                     </label>
               </div>
               <button type="submit" className="btn-dark cursor-pointer hover:bg-white hover:text-black">{editId?"Update":"Add"} </button>
        </form>
        <hr  className="mt-10 bg-green-700" />

        {/* list of recent works */}

         <div className='flex flex-col gap-2 mt-10'>
        <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-[#fffdf4]  bold-14 sm:bold-15 mb-3 rounded'>
          <h5>Image</h5>
          <h5>Title</h5>
          <h5>Category</h5>
          <h5>Removed</h5>
          <h5>Edit</h5>

        </div>
        {/* food list */}
        {
          recentWorks?.map((item)=>(
            <div key={item._id} className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 bg-[#fffdf4] rounded-xl '>
              <img src={item?.image} alt={item.name} className='w-12 rounded-lg  ' />
              <h5 className='text-sm font-semibold'>{item.title}</h5>
              <p className='font-semibold'>{item.category}</p>
              <div onClick={()=>handleDelete(item._id)}><TbTrash className='text-right md:text-center text-red-500 cursor-pointer text-lg'/></div>
            
               <div onClick={()=>setEditId(item._id)}><CiEdit className='text-right md:text-center text-green-500 cursor-pointer text-lg'/></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RecentWorks