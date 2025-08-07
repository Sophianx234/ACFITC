import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-12 py-10 flex justify-between items-center">
              <h1 className="text-3xl tracking-tighter font-amatic font-bold text-orange-600 uppercase">Center for Islam and culture</h1>
              <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
              <ul className="hidden md:flex space-x-6 font-medium">
                <li><a href="#" className="hover:text-orange-600">Home</a></li>
                <li><a href="#mission" className="hover:text-orange-600">Mission</a></li>
                <li><a href="#leadership" className="hover:text-orange-600">Leadership</a></li>
                <li><a href="#blog" className="hover:text-orange-600">Blog</a></li>
                <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
              </ul>
            </div>
            {menuOpen && (
              <ul className="md:hidden bg-white px-4 pb-4 space-y-2">
                <li><a href="#">Home</a></li>
                <li><a href="#mission">Mission</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            )}
          </nav> 
  );
}