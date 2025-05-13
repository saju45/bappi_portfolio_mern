import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';
import TestimonialCard from '../components/TestimonialCard';

const List = ({token}) => {
  const [testimonialList,setTestimonialList]=useState([]);
  
  
  useEffect(()=>{
    const fetchList=async()=>{
      try {
        const response =await axios.get(`${backendUrl}/testimonials/get`);        
        setTestimonialList(response.data);        
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
        
      }
    }

    fetchList();
  },[]);

  const handleDelete=async(testimonialId)=>{
    try {
      const respnse=await axios.delete(backendUrl+`/testimonials/delete/${testimonialId}`,{
        headers:{
          token
        }
      });

      console.log("delete response : ",respnse);
      
      toast.success(respnse.data.message);
      setTestimonialList(testimonialList.filter((item)=>item._id!==testimonialId))      
      
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <div className='px-2 sm:px-8 py-12 h-full'>
      <div className='flex flex-col flex-wrap md:flex-row gap-2'>
        
        {
          testimonialList?.map((testimonial)=>(
           <TestimonialCard key={testimonial._id} testimonial={testimonial} onDelete={handleDelete}/>
          ))
        }
      </div>
    </div>
  )
}

export default List