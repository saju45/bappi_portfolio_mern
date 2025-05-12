import { FaRegFileVideo, FaSearch } from "react-icons/fa";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { LuGalleryThumbnails } from "react-icons/lu";

const Experience = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-primary uppercase mb-2">my experience</p>
        <h2 className="text-3xl font-bold mb-12">My Experience</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Experience Card */}
          <div className="bg-[#1c1c3b] rounded-lg p-6 text-left">
            <h3 className="text-xl font-semibold mb-4 text-primary">Digital Marketer</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-primary"><FaFacebook/></span> Facebook marketing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary"><FaInstagram/></span> Instagram marketing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary"><FaTwitter/></span> X marketing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary"><LuGalleryThumbnails/></span> YouTube Thumbnails
              </li>
            </ul>
          </div>

          {/* Right Experience Card */}
          <div className="bg-[#1c1c3b] rounded-lg p-6 text-left">
            <h3 className="text-xl font-semibold mb-4 text-primary">Digital Marketer</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-primary"><FaGoogle/></span> Google marketing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary"><FaYoutube/></span> YouTube marketing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary"><FaSearch/></span> SEO
              </li>
                            <li className="flex items-center gap-2">
                <span className="text-primary"><FaRegFileVideo/></span> Video Editing & Reels Optimization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
