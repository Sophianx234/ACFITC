"use client";

import Image from "next/image";
import MissionInfo from "./MissionInfo";
import DiscoverCard from "./DiscoverCard";

export default function DiscoverSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white text-gray-700">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-black font-bebas uppercase">
          Discover
        </h2>
        <p className="mt-4 max-w-2xl mx-auto leading-7 font-inter text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          aperiam unde natus voluptates placeat accusamus vel laborum
          cupiditate. Reiciendis commodi perferendis dignissimos, amet quis.
        </p>
      </div>

      {/* Section 1: Build Schools */}
      <DiscoverCard
        title="Build Schools in Africa"
        src="/imgs/child-11.jpg"
        stats={[
          { number: 15, label: "Schools" },
          { number: 1039, label: "Students" },
          // Add more if needed
        ]}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quis, nemo explicabo
            cupiditate vero fugiat sit eius sequi."
      />

      {/* Section 2: Feeding Children */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-xl font-bold uppercase text-black mb-2">
            Feeding Children in Africa
          </h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            quis, nemo explicabo cupiditate vero fugiat sit eius sequi.
          </p>
          <div className="flex space-x-10">
            <div>
              <p className="text-3xl font-bold text-orange-600">3,298</p>
              <hr className="border-t-2 border-gray-300 w-10 my-1" />
              <p className="text-sm text-gray-700">Children</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600">38</p>
              <hr className="border-t-2 border-gray-300 w-10 my-1" />
              <p className="text-sm text-gray-700">Orphanage</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/imgs/child-6.jpg"
            alt="Orphan Child"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
