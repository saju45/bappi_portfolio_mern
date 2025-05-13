import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import armandoImg from "../assets/armando.jpeg";
import carlImage from "../assets/carl.jpeg";
import reviewVideo from "../assets/client.mp4";
import lourentImg from "../assets/laurent.jpeg";
import steveImg from "../assets/steve.jpeg";
const testimonials = [
  {
    name: "Laurent Rozenfeld",
    image: lourentImg,
    review:
      "I am very satisfied with the services of Md Bappi Islam. He delivered the work on time and had perfect attention to every detail. His expertise in YouTube thumbnails, video SEO and content optimization is truly commendable. He not only met my expectations but exceeded them. I would recommend him blindly for any YouTube or digital marketing project. Thank you, Bappi",
  },
  {
    name: "Steve Chemont",
    image: armandoImg,
    review:
      "Md Bappi Islam's services were a game-changer for my YouTube channel. He designed explorable thumbnails for my videos, did advanced video SEO, and set up video ads perfectly for the target audience. I saw results within 7 days—video views, watchtime, and engagement increased dramatically. He was professional, friendly, and responsive at every step. I will continue to work with him on future projects. Highly recommended",
  },
  {
    name: "Armando R. Garza",
    image: steveImg,
    review:
      "To be honest, I was completely new to YouTube. I didn't understand where to start, how to set it up—I didn't know anything. That's when Md Bappi Islam guided me and created the entire channel. Not just the channel—he set up the video thumbnail, SEO, and even the video ads perfectly. I just uploaded the video, and he took care of the rest. Now the channel is getting views and subscribers are increasing—which I never thought would happen so quickly! In short, he knows how to build a YouTube brand.",
  },
    {
    name: "Carl Allen,UK",
    image: carlImage,
    review:
      "Bappi knew exactly what my YouTube channel needed. Great thumbnails, smart SEO and a level of professionalism in the work. I was pleased with both the timely delivery and the quality of the work. I would definitely recommend him.",
  },
  
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-primary uppercase mb-2">what my clients say</p>
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

       <video controls className="w-1/2 mx-auto mb-5 rounded-lg shadow">
        <source src={reviewVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            700: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1050: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className=" "
      >
       
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}
>
            <div
              className="bg-[#1c1c3b] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-primary"
              />
              <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.review}"</p>
              <h4 className="text-primary font-semibold">{testimonial.name}</h4>
            </div>
            </SwiperSlide>

          ))}
       
      </Swiper>

       
        {/* <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1c1c3b] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-primary"
              />
              <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.review}"</p>
              <h4 className="text-primary font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
