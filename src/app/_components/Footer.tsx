// components/Footer.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#333333] pt-28 pb-32 text-[#999999] font-bold font-karla py-16 px-24">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-12">
        
        {/* About Us */}
        <div>
          <h3 className="text-white font-bold font-bebas tracking-wider text-xl mb-4">ABOUT US</h3>
          <p className="text-sm leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere
            laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis
            aliquam.
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-white font-bold font-bebas tracking-wider text-xl mb-4">FEATURES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
<div className="pr-32">

        {/* Some Paragraph */}
        <div>
          <h3 className="text-white font-bold font-bebas tracking-wider text-xl mb-4">SOME PARAGRAPH</h3>
          <p className="text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nostrum
            libero iusto dolorum vero atque aliquid.
          </p>

          {/* Newsletter */}
          <h3 className="text-white font-bold font-bebas tracking-wider text-xl mb-3">
            SUBSCRIBE TO NEWSLETTER
          </h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="px-4 py-2 bg-white  rounded-l-md focus:outline-none w-full"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 rounded-r-md"
              >
              Subscribe
            </button>
          </form>
        </div>

        {/* Follow Us */}
        <div className="pt-8">
          <h3 className="text-white font-bebas font-bold tracking-widest mb-4">FOLLOW US</h3>
          <div className="flex space-x-4 text-gray-400 text-lg">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

              </div>
      {/* Divider */}
      <div className="border-t border-[#999999] pt-12 mt-12 font-medium text-[#707070]  text-center ">
        Copyright ©{new Date().getFullYear()} All rights reserved | <a href="#" className="text-[#999999] hover:text-white">African Center for Islam and Culture</a>
      </div>
    </footer>
  );
}
