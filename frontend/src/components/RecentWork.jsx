
// import instagramImg from "../assets/instagram-marketing.jpg";
import imgPixel from "../assets/facebook_pixel.jpg";
import imgGoogleAds from "../assets/googe_ads.jpg";
import imgInstagram from "../assets/instagram_marketing.jpg";
import imgYouTube from "../assets/youtube_marketing.jpg";

const projects = [
  {
    title: "Facebook Ads Specialist",
    category: "Social",
    image:imgPixel,
  },
  {
    title: "Server Side Tracking",
    category: "Pixel",
    image: imgGoogleAds,
  },
  {
    title: "Google Ads Manager",
    category: "Social",
    image:imgGoogleAds,
  },
  {
    title: "Instagram Ads Specialist",
    category: "Social",
    image: imgInstagram,
  },
  {
    title: "YouTube Ads Specialist",
    category: "Social",
    image:imgYouTube,
  },
  {
    title: "Facebook Pixel Tracking",
    category: "Pixel",
    image: imgPixel
  },
];



const RecentWork = () => {
  return (
    <section id="RecentWork" className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-primary uppercase mb-2">my RecentWork</p>
        <h2 className="text-3xl font-bold mb-6">Recent Works</h2>

        {/* Filter Tags */}
        <div className="mb-10 flex justify-center gap-4">
          <button className="px-4 py-1 bg-primary rounded-full text-sm hover:bg-violet-600">All</button>
          <button className="px-4 py-1 border border-primary rounded-full text-sm hover:bg-violet-800">Social</button>
          <button className="px-4 py-1 border border-primary rounded-full text-sm hover:bg-violet-800">Pixel</button>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1c1c3b] rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-primary mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
