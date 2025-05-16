
import { motion } from "framer-motion";
import { default as heroImg, default as heroImg3 } from "../assets/bappy_hero.png";
import { default as heroImg2, default as heroImg4 } from "../assets/bappy_hero2.png";

import hackingImg from "../assets/hacking.gif";

import { useEffect, useState } from "react";
// import { FaFacebook } from "react-icons/fa";
import digital from "../assets/digital2.gif";
import digital2 from "../assets/digital4.gif";

import social from "../assets/social.gif";
import socialImg from "../assets/social1_bg.gif";

const images = [
 heroImg,
 heroImg2,
 heroImg3,
 heroImg4
];

const texts = [
  "We help grow your business.",
  "SEO & Digital Strategy.",
  "Branding & Social Media.",
];
const Hero = () => {
const [index,setIndex]=useState(0);
const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
   

useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  
  useEffect(() => {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText('');
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // pause before next sentence
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  
  return (
    <section
      id="home"
      className="bg-black text-white pt-24 pb-16 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-400 mb-2">Welcome to bappi portfolio</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your <span className="text-red-600">Strategic Business Partner</span> <br />
            For <span className="text-red-600">Ultimate Success</span>.
          </h1>
          <p className="mt-6 text-gray-300 max-w-lg">
            I provide growth-driven digital marketing strategies and services tailored for your success.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Book Free Consultancy
            </a>
            <a
              href="#"
              className="border border-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Working Scope With You
            </a>
          </div>
        </motion.div>

        {/* Right Image with Animation */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={`relative w-full max-w-md mx-auto md:h-70 bg-gradient-to-br ${index===0?"from-yellow-400":index===1?"from-[#152AFF]":"from-[#317378]"}  rounded-l-full`}>
          
             <img
             src={images[index]}
              alt="Hero"
              className="rounded-xl md:absolute top-0 left-5 h-full md:h-[100%] w-[50%]  "
            />
            <div className="absolute top-4 right-0 md:-right-15 p-4 bg-white/20 backdrop:blur-md  text-white text-lg rounded-lg w-1/2 shadow-md">
               {displayText}
         <span className="animate-pulse">|</span>
             </div>

             <motion.div initial={{
                x:1000
             }}
             animate={{
                x:0
             }}
             transition={{
                duration:2,
             }}
              className="absolute top-20  right-0  bg-white/20 backdrop:blur-md text-white text-lg rounded-lg  shadow-md z-50">
             
               <img src={socialImg} alt="social icon" className="w-25 h-25 object-cover" />
             </motion.div>

                <div className="absolute bottom-4 right-15  rounded-lg w-1/4 h-30 shadow-md border border-blue-400 z-5">
               <img src={index===0?social:index===1?digital:index===2?digital2:hackingImg} alt="image" className="w-full h-full" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
