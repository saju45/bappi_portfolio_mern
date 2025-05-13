
const RecentWorkCard = ({work}) => {
  return (
    <div
      className="bg-[#1c1c3b] rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
       >
       <img
        src={work.image}
        alt={work.title}
        className="w-full h-48 object-cover"
          />
      <div className="p-4 text-left">
         <h3 className="text-lg font-semibold text-primary mb-1">{work.title}</h3>
          <p className="text-sm text-gray-400">{work.category}</p>
        </div>
     </div>
  )
}

export default RecentWorkCard