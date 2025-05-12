import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logoImg from "../assets/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills","Contact"];

  return (
    <header className="bg-black text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
       
        <div className="flex">
        <img src={logoImg} alt="logo" className="w-20 h-10" />
        <h1 className="text-2xl font-bold text-[#AE8643]"> Bappy Islam</h1>
        </div>

        <nav className="hidden md:flex space-x-6 font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-red-500 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-4 pb-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 border-b border-gray-700 hover:text-red-500"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
