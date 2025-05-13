import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Sidebar from './components/Sidebar';
import Add from './pages/Add';
import List from './pages/List';
import RecentWorks from './pages/RecentWorks';


export const backendUrl=import.meta.env.VITE_BACKEND_URL;
const App = () => {
  const [token,setToken]=useState(localStorage.getItem("token")?localStorage.getItem("token"):"");

  useEffect(()=>{
    localStorage.setItem("token",token)
  },[token])
  return (
    <main className="min-h-screen bg-[#ebf9dc] text-[#404040]">
  
   <div className='mx-auto max-w-[1440px] flex flex-col sm:flex-row'>

      <Sidebar setToken={setToken} />
      <div className="flex-1 px-2 sm:px-8 py-12">
        <Routes>
          <Route path="/" element={<Add token={token} />} />
          <Route path='/recent-works' element={<RecentWorks/>}/>
          <Route path="/list" element={<List token={token} />} />

        </Routes>
      </div>
    </div>
  <ToastContainer />
</main>

   
  )
}

export default App