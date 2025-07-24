"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const services = [
  {
    title: "Emergency Dentistry",
    image: "/Images/banners/dental emergency.jpg",
    link: "/services/emergency-dentistry",
  },
  {
    title: "Root Canal",
      image: "/Images/banners/Endodontics.jpg",
    link: "/services/root-canal",
  },
  {
    title: "Oral Surgery",
      image: "/Images/banners/div.elementor-widget-wrap (5).png",
    link: "/services/oral-surgery",
  },
  {
    title: "Cosmetic Dentistry",
    image: "/Images/dental3.jpg",
    link: "/services/cosmetic-dentistry",
  },
  {
    title: "Fillings",
    image: "/Images/banners/Tooth filling.jpg",
    link: "/services/fillings",
  },
  {
    title: "Dental Implants",
      image: "/Images/Dental Implant.jpg",
    link: "/services/dental-implants",
  },
  {
    title: "Orthodontics",
    image: "/Images/banners/portrait-smiling-teenage-girl-with-braces-sitting-chair-while-dentist-standing-clinic.jpg",
    link: "/services/orthodontics",
  },
  {
    title: "Crowns and Bridges",
    image: "/Images/banners/dental crown_homepage.jpg",
    link: "/services/crowns-and-bridges",
  },
  {
    title: "Dental Emergencies",
    image: "/Images/banners/dental emergency.jpg",
    link: "/services/dental-emergencies",
  },
  {
    title: "Tooth Extraction",
    image: "/Images/banners/Tooth Extraction.jpg",
    link: "/services/tooth-extraction",
  },
  {
    title: "Whitening & Veneers",
    image: "/Images/banners/Whitening.jpg",
    link: "/services/whitening-&-veneers",
  },
  {
    title: "Invisalign",
      image: "/Images/Perio Protect.jpg",
    link: "/services/invisalign",
  },
  {
    title: "Kids & Children Dentistry",
    image: "/Images/banners/Children Denstiry.jpg",
    link: "/services/kids-&-children-dentistry",
  },
  {
    title: "Permanent Teeth Replacement",
    image: "/Images/banners/Teeth Replacement.jpg",
    link: "/services/permanent-teeth-replacement",
  },
  {
    title: "Sports Dentistry",
    image: "/Images/banners/Sports Dentistry.jpg",
    link: "/services/sports-dentistry",
  },
  {
    title: "Wisdom Teeth",
    image: "/Images/banners/Wisdom Teeth.jpg",
    link: "/services/wisdom-teeth",
  },
  {
    title: "Endodontics",
    image: "/Images/banners/Endodontics.jpg",
    link: "/services/endodontics",
  },
  {
    title: "Same-day Dentistry",
    image: "/Images/same.jpg",
    link: "/services/same-day-dentistry",
  },
  {
    title: "Painless Treatment",
    image: "/Images/banners/Painless treatment.jpg",
    link: "/services/painless-treatment",
  },
  {
    title: "Perio Protect",
    image: "/Images/Perio Protect.jpg",
    link: "/services/perio-protect",
  },
  {
    title: "Halitosis",
    image: "/Images/Halitosis.jpg",
    link: "/services/halitosis",
  },
];

export default function ServicesPage() {
  // Split into rows of 5
  const rows = [];
  for (let i = 0; i < services.length; i += 5) {
    rows.push(services.slice(i, i + 5));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12 ">
      {/* Header Section with blue background */}
      <div className="w-full bg-primary py-12 px-4 md:px-0 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">Services We Offer</h1>
          <p className="text-center mt-6 text-lg text-blue-100 mb-0">Cosmetic & Family Dentist located in Newark and East Orange, NJ</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {rows.map((row, rowIdx) => {
            const isLastRow = rowIdx === rows.length - 1;
            const isPartialRow = row.length < 5;
            return (
              <div
                key={rowIdx}
                className={clsx(
                  "flex gap-6",
                  isPartialRow ? "justify-center" : "justify-center"
                )}
                style={{ minHeight: '18rem' }}
              >
                {/* Add empty divs to center the last card if last row has fewer than 5 cards */}
                {isLastRow && isPartialRow && Array.from({ length: Math.floor((5 - row.length) / 2) }).map((_, i) => (
                  <div key={i} className="flex-1 max-w-[260px]" />
                ))}
                {row.map((service, idx) => (
                  <div
                    key={service.title}
                    className={clsx(
                      "relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center w-full sm:w-56 md:w-56 transition-transform hover:-translate-y-2 hover:shadow-2xl border border-blue-100 h-72"
                    )}
                    style={{ minWidth: 200, maxWidth: 260 }}
                  >
                    <div className="w-full h-2/3 relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center rounded-t-3xl"
                        sizes="(max-width: 768px) 100vw, 260px"
                        priority={rowIdx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                    </div>
                    <div className="flex-1 flex flex-col justify-end items-center p-4 w-full">
                      <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-2 text-center drop-shadow-sm">
                        {service.title}
                      </h2>
                      <Link
                        href={service.link}
                        className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition-all duration-200 text-sm md:text-base"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
                {/* Add empty divs to center the last card if last row has fewer than 5 cards */}
                {isLastRow && isPartialRow && Array.from({ length: Math.ceil((5 - row.length) / 2) }).map((_, i) => (
                  <div key={i} className="flex-1 max-w-[260px]" />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 