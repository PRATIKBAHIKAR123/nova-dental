"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const providers = [
    {
        name: "Bhavneet Singh, DDS",
        image: "/Images/dentist3.jpg",
        link: "/providers/bhavneet-singh",
    },
    {
        name: "Joyce Lau, DDS",
        image: "/Images/dentist2.jpg",
        link: "/providers/joyce-lau",
    },
    {
        name: "Sahiba Atwal-Purewal, DDS",
        image: "/Images/dentist3.jpg",
        link: "/providers/sahiba-atwal-purewal",
    },
    {
        name: "Egli Hajdarmataj, DMD",
        image: "/Images/dentist2.jpg",
        link: "/providers/egli-hajdarmataj",
    },
    {
        name: "Jimi Stewart, DMD",
        image: "/Images/dentist3.jpg",
        link: "/providers/jimi-stewart",
    },
    {
        name: "Joey Kim, DMD",
        image: "/Images/dentist2.jpg",
        link: "/providers/joey-kim",
    },
];

export default function ProvidersPage() {
    // Split into rows of 3
    const rows = [];
    for (let i = 0; i < providers.length; i += 3) {
        rows.push(providers.slice(i, i + 3));
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12">
            {/* Header Section with blue background */}
            <div className="details-page-header-section">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">Providers</h1>
                <p className="text-center mt-6 text-lg text-blue-100 mb-0">Cosmetic and Family Dentist located in Georgetown Place, Maplecrest, Fort Wayne and New Haven, IN</p>
            </div>
            <div className="max-w-7xl mt-6 mx-auto">
                <div className="space-y-12">
                    {rows.map((row, rowIdx) => {
                        const isLastRow = rowIdx === rows.length - 1;
                        const isPartialRow = row.length < 3;
                        return (
                            <div
                                key={rowIdx}
                                className={clsx(
                                    "flex gap-12",
                                    isPartialRow ? "justify-center" : "justify-center"
                                )}
                                style={{ minHeight: '18rem' }}
                            >
                                {/* Add empty divs to center the last card if last row has fewer than 3 cards */}
                                {isLastRow && isPartialRow && Array.from({ length: Math.floor((3 - row.length) / 2) }).map((_, i) => (
                                    <div key={i} className="flex-1 max-w-[260px]" />
                                ))}
                                {row.map((provider, idx) => (
                                    <div
                                        key={provider.name}
                                        className={clsx(
                                            "relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center w-full sm:w-56 md:w-56 transition-transform hover:-translate-y-2 hover:shadow-2xl border border-blue-100 h-72"
                                        )}
                                        style={{ minWidth: 200, maxWidth: 260 }}
                                    >
                                        <div className="w-full h-2/3 relative">
                                            <Image
                                                src={provider.image}
                                                alt={provider.name}
                                                fill
                                                className="object-cover object-center rounded-t-3xl"
                                                sizes="(max-width: 768px) 100vw, 260px"
                                                priority={rowIdx === 0}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-end items-center p-4 w-full">
                                            <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-2 text-center drop-shadow-sm">
                                                {provider.name}
                                            </h2>
                                            <Link
                                                href={provider.link}
                                                className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition-all duration-200 text-sm md:text-base"
                                            >
                                                Learn More →
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                                {/* Add empty divs to center the last card if last row has fewer than 3 cards */}
                                {isLastRow && isPartialRow && Array.from({ length: Math.ceil((3 - row.length) / 2) }).map((_, i) => (
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