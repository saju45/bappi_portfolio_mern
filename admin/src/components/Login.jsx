import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';
import loginImage from "../assets/bappy_hero.png";

const Login = ({setToken}) => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();

    const handleSubmit=async(event)=>{

        try {
            event.preventDefault();
            const res=await axios.post(`${backendUrl}/admin/login`,{email,password});
            console.log("response : ",res);
            setToken(res.data.token)
            toast.success(res.data.message);
            navigate("/")
            
        } catch (error) {
            console.log("error : ",error);
            toast.error(error.response.data.error)
            
        }
    }
  return (
    <div className=" absolute top-0 left-0 w-full h-full z-50 bg-white">

        {/* container */}
        <div className=" flex w-full h-full">
            {/* image */}
            <div className='w-1/2 hidden sm:block'>
                <img src={loginImage} alt="" className='object-cover h-full w-full' />
            </div>

            {/* form size */}
            <div className='flexCenter w-full sm:w-1/2'>
                <form action="" className='flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800' onSubmit={handleSubmit}>
                    <div className='w-full pb-3'>
                        <h3 className='bold-32'>Admin Panel</h3>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="Email" className='medium-15'>Email</label>
                        <input type="email" placeholder='Email' className='w-full px-3  py-1 ring-1 ring-slate-700/10 rounded bg-[#f9f9f9] mt-1' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className='w-full'>
                        <label htmlFor="password" className='medium-15'>Password</label>
                        <input type="password" placeholder='Password' className='w-full px-3  py-1 ring-1 ring-slate-700/10 rounded bg-[#f9f9f9] mt-1' value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className='btn-dark w-full mt-5 py-[7px] rounded'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login