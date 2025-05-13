import { TbTrash } from "react-icons/tb"
const TestimonialCard = ({testimonial,onDelete}) => {
  return (
         <div
              className=" bg-green-700/20 w-full md:w-[48%]  p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
           <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-primary"
              />
              <p className="text-black text-sm mb-4 italic">"{testimonial.description}"</p>
              <div className="flex justify-between">
              <h4 className="text-primary font-semibold">{testimonial.name}</h4>
             
              <div onClick={()=>onDelete(testimonial._id)}><TbTrash size={30} className='text-right md:text-center text-black cursor-pointer text-lg'/></div>
              </div>

      </div>
    
  )
}

export default TestimonialCard