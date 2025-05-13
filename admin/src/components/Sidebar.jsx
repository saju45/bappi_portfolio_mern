import { BiLogOut } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { MdFactCheck } from "react-icons/md";

import { NavLink } from "react-router-dom";

const Sidebar = ({setToken}) => {
  return (
    <div className="max-sm:flexCenter max-xs:pb-3 rounded bg-[#fffdf4] pb-3 sm:w-1/5 sm:hyphens-auto">
        <div className="flex flex-col gap-y-6 max-sm:items-center sm:flex-col pt-4 sm:pt-14">
            {/* logo */}
            <div  className='bold-24 flex-1 hidden sm:flex md:pl-[15%] '>
           <span className='inline-flex'>
            <span className='inline-flex items-center justify-center p-2 h-8 w-8 bg-[#217041] text-white -rotate-[-310deg] rounded-full'>B</span>appi 
           </span> Islam
           </div> 
           <div className="flex sm:flex-col gap-x-5 gap-y-6 sm:pt-10">
            <NavLink to={"/"} className={({isActive})=>isActive?"active_link flexStart gap-2 sm:pl-12 p-5 medium-15 cursor-pointer  h-10 rounded-xl":"flexStart gap-2 sm:pl-12 p-5 medium-15 cursor-pointer  h-10 rounded-xl"}>
             <FaSquarePlus/>
             <div className="hidden lg:flex">Add Testimonial</div>
            </NavLink>

            <NavLink to={"/list"} className={({isActive})=>isActive?"active_link flexStart gap-2 sm:pl-12 p-5 medium-15 cursor-pointer  h-10 rounded-xl":"flexStart gap-2 sm:pl-12 p-5 medium-15 cursor-pointer  h-10 rounded-xl"}>
             <FaListAlt/>
             <div className="hidden lg:flex">All Testimonials</div>
            </NavLink>

            <NavLink to={"/recent-works"} className={({isActive})=>isActive?"active_link flexStart gap-2 sm:pl-12 p-5 medium-15 cursor-pointer  h-10 rounded-xl":"flexStart gap-2 sm:pl-12 p-5 medium-15 cursor-pointer  h-10 rounded-xl"}>
             <MdFactCheck/>
             <div className="hidden lg:flex">Recent Works</div>
            </NavLink>

            <div className="max-sm:ml-5 sm:mt-72">
                <button onClick={()=>setToken("")} className="flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl text-red-500">
                    <BiLogOut className="text-lg"/>
                    <div className="hidden lg:flex">Logout</div>
                </button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Sidebar;