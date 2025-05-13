
const TestimonialCard = ({testimonial}) => {
  return (
      <div
              className="bg-[#1c1c3b] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-primary"
              />
              <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.description}"</p>
              <h4 className="text-primary font-semibold">{testimonial.name}</h4>
      </div>
  )
}

export default TestimonialCard