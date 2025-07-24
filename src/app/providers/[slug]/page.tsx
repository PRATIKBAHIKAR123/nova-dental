"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const doctors = [
  {
    slug: "bhavneet-singh",
    name: "Bhavneet Singh, DDS",
    title: "Family Dentist",
    image: "/Images/dentist1.jpg",
    description: `Dr. Bhavneet Singh is a dedicated family dentist committed to providing comprehensive dental care to patients of all ages. He is known for his gentle approach and attention to detail, ensuring every patient feels comfortable and well-cared for. Dr. Singh is passionate about preventive dentistry and enjoys helping his patients achieve healthy, beautiful smiles. In his free time, he enjoys reading and spending time with his family.`
  },
  {
    slug: "joyce-lau",
    name: "Joyce Lau, DDS",
    title: "Cosmetic Dentist",
    image: "/Images/dentist2.jpg",
    description: `Dr. Joyce Lau specializes in cosmetic dentistry, helping patients enhance their smiles with the latest techniques and technology. She is dedicated to ongoing education and strives to provide the best possible outcomes for her patients. Outside of work, Dr. Lau enjoys traveling and exploring new cuisines.`
  },
  {
    slug: "sahiba-atwal-purewal",
    name: "Sahiba Atwal-Purewal, DDS",
    title: "General Dentist",
    image: "/Images/dentist3.jpg",
    description: `Dr. Sahiba Atwal-Purewal is a general dentist with a passion for patient education and preventive care. She believes in building strong relationships with her patients and empowering them to take charge of their oral health. Dr. Atwal-Purewal enjoys yoga and painting in her spare time.`
  },
  {
    slug: "egli-hajdarmataj",
    name: "Egli Hajdarmataj, DMD",
    title: "Restorative Dentist",
    image: "/Images/dentist4.jpg",
    description: `Dr. Egli Hajdarmataj focuses on restorative dentistry, helping patients regain function and confidence in their smiles. He is known for his meticulous work and caring demeanor. Dr. Hajdarmataj is an avid runner and enjoys outdoor activities.`
  },
  {
    slug: "jimi-stewart",
    name: "Jimi Stewart, DMD",
    title: "Pediatric Dentist",
    image: "/Images/dentist1.jpg",
    description: `Dr. Jimi Stewart is a pediatric dentist who loves working with children and making dental visits fun and stress-free. He is dedicated to creating positive dental experiences for young patients. In his free time, Dr. Stewart enjoys music and hiking.`
  },
  {
    slug: "joey-kim",
    name: "Joey Kim, DMD",
    title: "Orthodontist",
    image: "/Images/dentist2.jpg",
    description: `Dr. Joey Kim is an orthodontist passionate about helping patients achieve straight, healthy smiles. He stays up-to-date with the latest advancements in orthodontics and is committed to personalized care. Dr. Kim enjoys photography and cycling.`
  },
];

export default function DoctorProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Doctor Profile Not Found</h1>
          <Link href="/providers">
            <span className="inline-block mt-2 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">← Back to Providers</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1>{doctor.name}</h1>
        <p>Cosmetic and Family Dentist located in Georgetown Place, Maplecrest, Fort Wayne and New Haven, IN</p>
      </div>
      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Doctor Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          {/* Doctor Info */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-semibold mb-2">Meet {doctor.name}</h2>
            <div className="text-lg text-gray-700 mb-4">{doctor.title}</div>
            <hr className="mb-6" />
            <div className="text-base text-gray-800 leading-relaxed">
              {doctor.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 