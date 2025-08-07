"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Slider from "./_components/SliderComponent";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
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
      <div className="h-dvh">

      <Slider/>
      </div>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-orange-200 text-center">
        <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
        <p className="max-w-xl mx-auto mb-6 text-gray-700">
          We are on a mission to empower children and families by providing access to education,
          food, and essential resources in underprivileged regions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xl font-bold">
          <div>15<br /><span className="text-sm font-medium">Years of service</span></div>
          <div>392<br /><span className="text-sm font-medium">Volunteers</span></div>
          <div>3,298<br /><span className="text-sm font-medium">Children helped</span></div>
          <div>1,212<br /><span className="text-sm font-medium">Schools built</span></div>
        </div>
      </section>

      {/* Donation Prompt */}
      <section className="py-12 bg-orange-600 text-white text-center">
        <h3 className="text-2xl font-bold">Make A Donation Now! You May Change Lives Forever</h3>
        <button className="mt-4 bg-white text-orange-600 font-bold px-6 py-2 rounded-full">Donate Now</button>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">OUR LEADERSHIP</h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((id) => (
            <div key={id} className="p-4 bg-white shadow rounded-lg">
              <Image src="/avatar.png" alt="Leader" width={80} height={80} className="mx-auto rounded-full" />
              <h4 className="mt-4 font-bold">John Doe</h4>
              <p className="text-sm text-gray-600">Executive Director</p>
              <div className="flex justify-center gap-3 mt-2 text-orange-600">
                <FaFacebookF /><FaTwitter /><FaLinkedinIn />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-orange-200 text-center">
        <h2 className="text-3xl font-bold mb-10">TESTIMONIAL</h2>
        <div className="grid sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white p-6 rounded-lg shadow">
              <p className="text-sm text-gray-600">
                "I am so grateful for the support I received from this foundation. It has changed my life!"
              </p>
              <h4 className="mt-4 font-bold">Jane Smith</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">OUR BLOG</h2>
        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2].map((id) => (
            <div key={id} className="bg-white shadow-lg p-4 rounded">
              <Image src="/hero.jpg" alt="Blog" width={600} height={300} className="rounded mb-4" />
              <h3 className="text-xl font-bold text-orange-600">How to Invest in Investing Company</h3>
              <p className="text-sm text-gray-700 mt-2">Learn how to contribute meaningfully and transform communities.</p>
              <Link href="#" className="text-orange-600 font-semibold mt-2 block">Read More</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">CONTACT US</h2>
        <form className="max-w-2xl mx-auto space-y-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="p-3 w-full border rounded" />
            <input type="email" placeholder="Email" className="p-3 w-full border rounded" />
          </div>
          <textarea placeholder="Write your message" rows={5} className="w-full p-3 border rounded"></textarea>
          <button className="bg-orange-600 text-white px-6 py-2 rounded">Send Message</button>
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
