export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-10">
      <div className="text-center space-y-4">
        {/* Clinic Name */}
        <h2 className="text-2xl font-semibold">Maple Dental</h2>

        {/* Contact Info */}
        <div className="text-sm text-gray-300">
          <p>📞 Phone (appointments): <a href="tel:9737553500" className="underline">973-755-3500</a></p>
          <p>📍 Address: 240 Mulberry Street, 2nd floor, Newark, NJ 07102</p>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 text-yellow-400 text-lg">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="text-sm text-gray-400">Average Rating: 4.88/5</p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-medium text-white">
          <a href="/privacy-policy" className="hover:underline">PRIVACY</a>
          <a href="/terms-and-conditions" className="hover:underline">TERMS & CONDITIONS</a>
          <a href="/accessibility" className="hover:underline">ACCESSIBILITY</a>
          <a href="/contact" className="hover:underline">CONTACT US</a>
        </div>
      </div>
    </footer>
  );
}
