import axios from 'axios';
import { useEffect, useState } from 'react';
import { TbTrash } from 'react-icons/tb';
import { toast } from 'react-toastify';
import { backendUrl, currency } from '../App';

const List = ({token}) => {
  const [list,setList]=useState([]);
  
  
  useEffect(()=>{
    const fetchList=async()=>{
      try {
        const response =await axios.get(`${backendUrl}/products/list`);        
        setList(response.data.products);        
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
        
      }
    }

    fetchList();
  },[]);

  const productRemoved=async(productId)=>{
    try {
      const respnse=await axios.delete(backendUrl+`/products/remove/${productId}`,{
        headers:{
          token
        }
      });
      toast.success(respnse.data.message);
      setList(list.filter((item)=>item._id!==productId))      
      
    } catch (error) {
      toast.error(error.response.data.error)
    }
  }
  return (
    <div className='px-2 sm:px-8 py-12 h-screen'>
      <div className='flex flex-col gap-2'>
        <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-[#fffdf4]  bold-14 sm:bold-15 mb-3 rounded'>
          <h5>Image</h5>
          <h5>name</h5>
          <h5>category</h5>
          <h5>price</h5>
          <h5>removed</h5>
        </div>
        {/* food list */}
        {
          list?.map((item)=>(
            <div key={item._id} className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 bg-[#fffdf4] rounded-xl '>
              <img src={item?.image} alt={item.name} className='w-12 rounded-lg  ' />
              <h5 className='text-sm font-semibold'>{item.name}</h5>
              <p className='font-semibold'>{item.category}</p>
              <div className='text-sm font-semibold'>
                {currency} {Object.values(item.price)[0]}
              </div>
              <div onClick={()=>productRemoved(item._id)}><TbTrash className='text-right md:text-center text-red-500 cursor-pointer text-lg'/></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default List