"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaLinkedinIn, FaPlay } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Slider from "./_components/SliderComponent";
import Navbar from "./_components/Navbar";
import InfoCard from "./_components/InfoCard";
import { TbLineDashed } from "react-icons/tb";
import MissionInfo from "./_components/MissionInfo";
import DiscoverSection from "./_components/DiscoverSection";
import CharityServices from "./_components/CharityServices";
import { RiDoubleQuotesL } from "react-icons/ri";
import { ImQuotesRight } from "react-icons/im";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import GallerySection from "./_components/GallerySection";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
  className="font-sans bg-cover bg-center bg-no-repeat h-screen w-screen overflow-x-hidden"
  style={{
    backgroundImage: `url(/imgs/child-5.jpg)`,
  }}
>
      {/* Navbar */}
      {/* <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
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
      </nav> */}

      {/* Hero Section */}
      {/* <section className="pt-28 bg-orange-100 text-center md:text-left ">
        <div className="bg-[url(/imgs/child-5.jpg)] bg-cover bg-center h-dvh flex flex-col justify-center items-center text-white">

        <div className="md:grid grid-cols-2 w-full h-full  px-8">
          <div className=" self-center">

          <h2 className="text-4xl md:text-7xl font-bold text-orange-600 font-archivo mb-2">Education</h2>
          <p className="text-2xl font-semibold font-caveat">for Brighter Future</p>
          </div>
          <div >

          </div>
          
        </div>
        </div>
      </section> */}
      <Navbar/>

      <Slider/>
      <div className="grid grid-cols-3 justify-center  ">
            <InfoCard title="Feed the Hungry" style="bg-orange-600" />
            <InfoCard title="Rescue an Orphan" style="bg-gray-800" />
            <InfoCard title="Free Education" style="bg-gray-800 bg-red-500" />
            
          </div>
          

      {/* Mission Section */}
      <section id="mission" className="  pt-32  bg-orange-200 text-center">
        <div className="grid grid-cols-2 mx-10 ">

        <div className=" px-8">
          <div className="relative flex items-center justify-center h-[26rem]">
            <div className="absolute flex hover:scale-110 group border border-transparent hover:border-black cursor  items-center justify-center duration-150 bg-white size-16 rounded-full z-10">
              <FaPlay className=" z-10 size-3"/>
            </div>

<Image fill src='/imgs/child-2.jpg' alt="" className="object-cover"/>
          </div>
        </div>
        <div className="pt-16 px-12">

        <h2 className="text-7xl text-left font-bold mb-4 font-bebas">OUR MISSION</h2>
        <p className="  text-gray-700 text-left leading-7">
          We are on a mission to empower children and families by providing access to education,
          food, and essential resources in underprivileged regions.We are on a mission to empower children and families by providing access to education,
          food, and essential resources in underprivileged regions.
        </p>
        
        
        </div>
        <div className="col-span-2 block w-full pb-12 pt-12  ">

        <div className="grid  grid-cols-2 sm:grid-cols-4 gap-4 text-xl font-bold">
          
          <MissionInfo digit={15} desc="Years of service"/>
          <MissionInfo digit={392} desc="Volunteers"/>
          <MissionInfo digit={3298} desc="Children helped"/>
          <MissionInfo digit={1212} desc="Schools built"/>
          
        </div>
        </div>
        </div>
        
      </section>


      {/* Discover Section */}
      <DiscoverSection/>
      {/* Donation Prompt */}
      <section className="py-12 bg-orange-600 flex items-center justify-center h-96 text-white text-center">
        <div className="grid grid-cols-1">

        <h3 className="text-3xl px-32 font-anton font-bold">Make A Donation Now! <br /> You May Change Lives Forever</h3>
        <button className="mt-4 bg-white text-orange-600 font-bold px-6 mx-8 border rounded-sm border-gray-200 py-5 shadow">Donate Now</button>
        </div>
      </section>
      <section className="bg-white h-dvh">
        <CharityServices/>

      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 bg-white  text-center">
        <h2 className="text-6xl font-bebas  font-bold mb-5">OUR LEADERSHIP</h2>
        <p className="mb-12 text-stone-700 mx-auto ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium <br />laboriosam aspernatur ipsam maxime eveniet?</p>
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto ">
          {[1, 2, 3].map((id) => (
            <div key={id} className="p-4 flex flex-col justify-center items-center bg-white border border-gray-200 pt-5 rounded-lg">
              <div className="size-24 relative rounded-full overflow-hidden mb-10">

              <Image src="/imgs/prof-2.jpg" alt="Leader" fill  className="object-cover" />
              </div>
              <h4 className="mt-4 font-bold">John Doe</h4>
              <p className="text-xs font-bold font-karla text-gray-600 uppercase">Executive Director</p>
              <p className=" px-4 text-sm leading-5 mt-3 mb-4 font-karla">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ex voluptatum repudiandae recusandae unde rem? Repellat, neque sapiente. Vitae asperiores ducimus quas delectus molestiae?</p>
              <div className="flex justify-center gap-3 mt-2 text-orange-600">
                <FaFacebookF /><FaTwitter /><FaLinkedinIn />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 pb-24 bg-orange-200/70 text-center">
        <h2 className="text-5xl tracking-wide font-bebas font-bold mb-10">TESTIMONIAL</h2>
        <div className="grid sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white relative flex flex-col justify-center items-center p-6 size-fit rounded-lg shadow">
              <BiSolidQuoteAltLeft className="size-9 text-orange-600 absolute left-2 top-0"/>
              <BiSolidQuoteAltRight className="size-9 text-orange-600 absolute right-2 bottom-0"/>
              <p className="text-lg px-3 text-gray-600">
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dicta magnam nam, sed debitis quo tenetur ullam sunt laudantium harum esse exercitationem excepturi. Voluptatibus enim aperiam odit, deserunt libero a quos nihil?"
              </p>
              <div className="flex flex-col items-center justify-center mt-4">

              <div className="size-16 relative rounded-full overflow-hidden ">

              <Image src="/imgs/prof-3.jpg" alt="Leader" fill  className="object-cover" />
              </div>
              <h4 className="text-center font-bold">Jane Smith</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection/>
      
      {/* Contact Form */}
      <section id="contact" className="py-16 pt-24 bg-slate-100 text-center">
        <h2 className="text-7xl font-bold mb-12 font-bebas">CONTACT US</h2>
        <form className="max-w-xl mx-auto space-y-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-4">
            <input type="text" placeholder="Name" className="p-3 focus:border-orange-600 py-4 w-full border border-gray-400 rounded" />
            <input type="email" placeholder="Email" className="p-3 w-full border border-gray-400 rounded" />
          </div>
          <textarea placeholder="Write your message" rows={10} className="w-full p-3 border-gray-400 border rounded"></textarea>
          <div className="grid grid-cols-[1fr_.6fr]  ">
            <div></div>

          <button className="bg-orange-600  text-white px-7 py-4 rounded">Send Message</button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-sm">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">About Us</h4>
            <p>We are a non-profit foundation focused on transforming lives through education and health.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Programs</h4>
            <ul>
              <li>Education</li>
              <li>Feeding Program</li>
              <li>Medical Aid</li>
              <li>Child Sponsorship</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Stay Connected</h4>
            <input type="email" placeholder="Your Email" className="p-2 w-full text-black rounded" />
            <button className="bg-orange-600 px-4 py-2 mt-2 rounded">Subscribe</button>
          </div>
          <div>
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex gap-3 text-orange-600">
              <FaFacebookF /><FaTwitter /><FaLinkedinIn />
            </div>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-400">&copy; 2025 Charity Foundation. All rights reserved.</p>
      </footer>
    </main>
  );
}
