"use client";

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
      <DiscoverCard
        title="Feeding Children in Africa"
        src="/imgs/child-6.jpg"
        reverse={true}
        stats={[
          { number: 3298, label: "Schools" },
          { number: 38, label: "Children" },
          // Add more if needed
        ]}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quis, nemo explicabo
            cupiditate vero fugiat sit eius sequi."
      />
<DiscoverCard
  title="Health & Medical Support"
  description="We provide free healthcare outreach, medication, and hygiene education to underserved communities."
  src="/imgs/med-1.jpg" // Replace with your actual image
  stats={[
    { number: 12, label: "Medical Camps" },
    { number: 820, label: "Patients Treated" },
    { number: 150, label: "Volunteers Engaged" },
  ]}
/>

      {/* Section 2: Feeding Children */}
      
    </section>
  );
}
