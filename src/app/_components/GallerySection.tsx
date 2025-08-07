"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryItem {
  src: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  { src: "/imgs/child-4.jpg", alt: "School building project" },
  { src: "/imgs/child-6.jpg", alt: "School building project" },
  { src: "/imgs/child-9.jpg", alt: "School building project" },
  { src: "/imgs/child-14.jpg", alt: "Feeding children event" },
  { src: "/imgs/child-15.jpg", alt: "Feeding children event" },
  { src: "/imgs/child-18.jpg", alt: "Feeding children event" },
  { src: "/imgs/child-19.jpg", alt: "Medical camp" },
  { src: "/imgs/child-20.jpg", alt: "Medical camp" },
  { src: "/imgs/child-21.jpg", alt: "Volunteers teaching" },
  { src: "/imgs/child-23.jpg", alt: "Volunteers teaching" },
  { src: "/imgs/child-24.jpg", alt: "Clothes distribution" },
  { src: "/imgs/child-25.jpg", alt: "Community cleanup" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-black font-bebas uppercase">
          Our Work in Action
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 font-inter">
          A glimpse into the projects, events, and initiatives we’ve carried out
          to help communities in need.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => setSelectedImage(item.src)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={300}
              className="object-cover w-full h-64 transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        ))}
      </div>

      {/* Lightbox Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Preview"
            width={900}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
