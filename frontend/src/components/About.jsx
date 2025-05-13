import heroImg from "../assets/hero.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-primary uppercase mb-2">my intro</p>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-15">
          {/* Profile image */}
          <div className="flex justify-center">
            <img
              src={heroImg} // Replace with your actual image path
              alt="About"
              className="rounded-xl w-[280px] h-[350px] object-cover shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="text-left space-y-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-[#1c1c3b] p-4 rounded-lg text-center">
                <p className="font-semibold text-lg text-primary">2+</p>
                <p className="text-sm text-gray-300">Experience</p>
              </div>
              <div className="bg-[#1c1c3b] p-4 rounded-lg text-center">
                <p className="font-semibold text-lg text-primary">100+</p>
                <p className="text-sm text-gray-300">Completed</p>
              </div>
              <div className="bg-[#1c1c3b] p-4 rounded-lg text-center">
                <p className="font-semibold text-lg text-primary">24/7</p>
                <p className="text-sm text-gray-300">Support</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              I am Md Bappi Islam — a Digital Marketing Expert and Content Strategist, I help brands take their campaigns to the next level with expertise in Google Ads, Facebook Ads, SEO and Social Media Management.

I have been successfully working for various local and international clients for the past few years. My main goal is to understand the client’s goals and audience and create an effective digital roadmap — one that delivers results.

I don’t just stop at marketing. I also have experience in video thumbnail design and video content optimization, which helps increase clicks on YouTube and social media.


            </p>

            <button className="mt-4 bg-primary px-5 py-2 rounded-lg text-white hover:bg-violet-600">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
