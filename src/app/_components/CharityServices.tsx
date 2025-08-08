"use client";

import { FaHandsHelping, FaPiggyBank } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { MdHealthAndSafety, MdVolunteerActivism } from "react-icons/md";

const services = [
  {
    icon: <FaPiggyBank className="text-7xl mx-auto text-gray-500" />,
    title: "Make Donation",
    description: "Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.",
  },
  {
    icon: <MdHealthAndSafety className="text-7xl mx-auto text-gray-500" />,
    title: "Medical Health",
    description: "Praesentium magnam pariatur quae necessitatibus eligendi voluptate ducimus.",
  },
  {
    icon: <FaBowlRice className="text-7xl mx-auto text-gray-500" />,
    title: "Food for the Poor",
    description: "Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.",
  },
  {
    icon: <FaHandsHelping className="text-7xl mx-auto text-gray-500" />,
    title: "Help & Love",
    description: "Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.",
  },
  {
    icon: <GiReceiveMoney className="text-7xl mx-auto text-gray-500" />,
    title: "Give To The Needy",
    description: "Praesentium magnam pariatur quae necessitatibus eligendi voluptate ducimus.",
  },
  {
    icon: <MdVolunteerActivism className="text-7xl mx-auto text-gray-500" />,
    title: "Volunteer",
    description: "Accusantium dignissimos voluptas rem consequatur ratione illo sit quasi.",
  },
];

export default function CharityServices() {
  return (
    <section className="py-20 bg-white px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
        {services.map((service, index) => (
          <div key={index}>
            {service.icon}
            <h3 className="text-2xl font-bebas tracking-wide font-bold text-orange-600 mt-4 mb-2">{service.title}</h3>
            <p className="text-gray-500 max-w-xs mx-auto">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
