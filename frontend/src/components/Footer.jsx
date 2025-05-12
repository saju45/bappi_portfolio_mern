import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111122] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h3 className="text-2xl font-bold text-primary">MD BAPPI ISLAM</h3>
        <p className="text-gray-400 max-w-xl mx-auto">
          Thank you for visiting my portfolio. Let's connect and create something amazing together!
        </p>

        <div className="flex justify-center gap-6 text-primary text-lg">
          <a href="https://www.facebook.com/iamraf420" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-white transition" />
          </a>
          <a href="https://www.youtube.com/@rhbappiislam-420" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-white transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/md-bappi-islam-845078263/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-white transition" />
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} BAPPI . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
