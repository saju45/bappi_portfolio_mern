import { CiLocationOn } from "react-icons/ci";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const Contact = () => {
    const contact_info = [
    { logo: MdOutgoingMail, text: "Rafsanah646@gmail.com" },
    { logo: FaWhatsappSquare, text: "01611652988" },
    {
      logo: CiLocationOn,
      text: "babupara,Rangpur",
    },
  ];
  return (
    <section id="contact" className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-primary uppercase mb-2">get in touch</p>
        <h2 className="text-3xl font-bold mb-10">Contact Me</h2>

    <div
        className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-7xl w-full bg-[#1c1c3b] md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          <button
            type="submit"
            className="bg-primary px-6 py-3 rounded-lg hover:bg-violet-600 transition"
          >
            Send Message
          </button>
        </form>
          
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-gray-800 rounded-full">
                  <contact.logo />
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>


        </div>
        
      </div>
    </section>
  );
};

export default Contact;
