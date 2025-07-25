"use client";

import Image from "next/image";
import clsx from "clsx";

const reviews = [
  {
    name: "Kimball T.",
    date: "Jul 10, 2025",
    rating: 5,
    text: "Very impressed. Very nice staff. Highly recommend",
    image: "/Images/836.jpg",
  },
  {
    name: "John P.",
    date: "Apr 30, 2025",
    rating: 5,
    text: "I was very impressed with Dr. Kaur and Amelie their care toward me was thorough and timely, I look forward to my next visit!!",
    image: "/Images/837.jpg",
  },
  {
    name: "Brent S.",
    date: "Mar 04, 2025",
    rating: 4,
    text: "My visit went very smoothly. The stuff was friendly and professional.",
    image: "/Images/836.jpg",
  },
  {
    name: "Madison L.",
    date: "Feb 14, 2025",
    rating: 5,
    text: "Amazing dentist very caring and kind staff. I have already recommend people to come here.",
    image: "/Images/837.jpg",
  },
  {
    name: "Mani Dattatreya S.",
    date: "Jan 19, 2025",
    rating: 5,
    text: "Maple Dental is an outstanding clinic offering top-notch care in a welcoming, modern environment. The skilled dentists, friendly staff, and state-of-the-art technology ensure a comfortable and efficient experience.",
    image: "/Images/836.jpg",
  },
  {
    name: "Achyuth M.",
    date: "Dec 22, 2024",
    rating: 5,
    text: "I had an excellent experience at Maple Dental. The staff was professional, friendly, and attentive throughout my visit. The dentist explained every step clearly, ensuring I was comfortable and informed. for high-quality dental care!",
    image: "/Images/837.jpg",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={clsx(
            "w-5 h-5",
            i < rating ? "text-yellow-400" : "text-gray-300"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-12">
      {/* Header Section */}
      <div className="details-page-header-section">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg text-center">Reviews</h1>
        <div className="flex justify-center mt-4">
          <button className="px-6 py-2 rounded-full bg-white text-teal-700 font-semibold shadow hover:bg-teal-100 transition-all duration-200 text-base flex items-center gap-2">
            SHARE FEEDBACK
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
      <div className="max-w-7xl mt-10 mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-8">Patient Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, idx) => (
            <div
              key={review.name + review.date}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center w-full transition-transform hover:-translate-y-2 hover:shadow-2xl border border-teal-100 h-72 sm:h-80 md:h-80 lg:h-80 xl:h-80 mx-auto"
              style={{ minWidth: 0 }}
            >
              <div className="flex-1 flex flex-col justify-between items-center p-4 sm:p-6 w-full">
                <div className="mb-3 flex justify-center w-full">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-gray-700 text-sm sm:text-base text-left mb-3 leading-relaxed flex-1 flex items-center justify-center">
                  {review.text}
                </p>
                <div className="mt-auto text-xs sm:text-sm text-gray-500 text-center w-full">
                  <span className="font-semibold">{review.name}</span> | {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 