import axios from "axios";
// import instagramImg from "../assets/instagram-marketing.jpg";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";
import RecentWorkCard from "./RecentWorkCard";

const RecentWork = () => {

  const [recentWorks,setRecentWorks]=useState([]);
  const [allWorks,setAllWorks]=useState([]);
  const [categories,setCategoris]=useState([]);
  const [selectedCategory,setSelectedCategory]=useState('');

  useEffect(()=>{

    const fetchRecentWorks=async()=>{
      try {
        const response=await axios.get(backendUrl+"/works/get");
        setAllWorks(response.data)
        setRecentWorks(response.data);

       const uniqueCategories = [...new Set(response.data.map(item => item.category.toLowerCase()))];
       setCategoris(uniqueCategories);

      } catch (error) {
        console.log(error); 
      }
    }

    fetchRecentWorks();
  },[selectedCategory]);

  useEffect(() => {

  if (selectedCategory) {
    const filtered = allWorks.filter((work) => work.category.toLowerCase() === selectedCategory.toLowerCase());
    setRecentWorks(filtered);
  } else {
    setRecentWorks(allWorks);
  }
  
}, [selectedCategory, allWorks]);
  
  
  return (
    <section id="RecentWork" className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-primary uppercase mb-2">my RecentWork</p>
        <h2 className="text-3xl font-bold mb-6">Recent Works</h2>

        {/* Filter Tags */}
        <div className="mb-10 flex justify-center gap-4">
          <button onClick={()=>setSelectedCategory("")} className="px-4 py-1 bg-primary rounded-full text-sm hover:bg-violet-600">All</button>
          {
            categories?.map((category,i)=>(
              <button onClick={()=>setSelectedCategory(category)} className="px-4 py-1 border border-primary rounded-full text-sm hover:bg-violet-800" key={i}>{category}</button>
            ))
          }
          
        </div>

        {/* work Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {recentWorks.map((work) => (
            <RecentWorkCard key={work._id} work={work}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
