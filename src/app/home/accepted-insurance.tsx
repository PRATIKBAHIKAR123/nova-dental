import React from 'react';

const InsuranceSection = () => {
  const insuranceLogos = [
    {
      id: 1,
      name: "Assurant",
      logo: "/Images/Insurance companies/1771832.webp",
      alt: "Assurant Insurance"
    },
    {
      id: 2,
      name: "UnitedHealthcare",
      logo: "/Images/Insurance companies/1771881.webp",
      alt: "UnitedHealthcare Insurance"
    },
    {
      id: 3,
      name: "Aetna",
      logo: "/Images/Insurance companies/1772502.webp",
      alt: "Aetna Insurance"
    },
    {
      id: 4,
      name: "AIG",
      logo: "/Images/Insurance companies/1772499.webp",
      alt: "AIG Insurance"
    },
    {
      id: 5,
      name: "Blue Cross Blue Shield",
      logo: "/Images/Insurance companies/1773057.webp",
      alt: "Blue Cross Blue Shield Insurance"
    },
    {
      id: 6,
      name: "Cigna",
      logo: "/Images/Insurance companies/1858337.webp",
      alt: "Cigna Healthcare"
    },
    {
      id: 7,
      name: "Humana",
      logo: "/Images/Insurance companies/2206449.webp",
      alt: "Humana Insurance"
    },
    {
      id: 8,
      name: "MetLife",
      logo: "/Images/Insurance companies/2761735.webp",
      alt: "MetLife Insurance"
    }
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...insuranceLogos, ...insuranceLogos];

  return (
    <section className="w-full bg-gray-50 py-16 mt-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We Accept Most Insurance Plans
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            At Maple Dental Harrisburg, we work with most major dental insurance providers. If you have any questions about your coverage, feel free to contact our office.
          </p>
        </div>

        {/* Auto-scrolling logos container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll-horizontal">
            {duplicatedLogos.map((insurance, index) => (
              <div
                key={`${insurance.id}-${index}`}
                className="flex-shrink-0 mx-3 md:mx-8 flex items-center justify-center h-16 w-32 md:h-24 md:w-48"
              >
                <img
                  src={insurance.logo}
                  alt={insurance.alt}
                  className="max-h-16 max-w-full object-contain hover:grayscale-0 transition-all duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-horizontal {
          animation: scroll-horizontal 10s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default InsuranceSection;