import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-2 sm:px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Left: Logo & About */}
        <div className="space-y-4 col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/Images/maple-pa-large-Blue-white-website-header.png" alt="Maple Dental Logo" width={160} height={100} className="w-32 sm:w-40 md:w-48 h-auto" />
          </div>
          <p className="text-xs sm:text-sm text-gray-200">
            Maple Dental provides comprehensive dental care in Newark, NJ, with a focus on patient comfort and advanced treatments.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/facebook.png" alt="Facebook" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/instagram.png" alt="Instagram" width={24} height={24} className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/twitter.png" alt="Twitter" width={24} height={24} className="w-6 h-6" />
            </a>
            {/* Add LinkedIn if you have the icon */}
          </div>
        </div>

        {/* Middle: Services Columns */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-base sm:text-lg">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/services/emergency-dentistry" className="hover:underline">Emergency Dentistry</Link></li>
              <li><Link href="/services/root-canal" className="hover:underline">Root Canal</Link></li>
              <li><Link href="/services/oral-surgery" className="hover:underline">Oral Surgery</Link></li>
              <li><Link href="/services/cosmetic-dentistry" className="hover:underline">Cosmetic Dentistry</Link></li>
              <li><Link href="/services/fillings" className="hover:underline">Fillings</Link></li>
              {/* <li><Link href="/services/dental-implants" className="hover:underline">Dental Implants</Link></li> */}
              {/* <li><Link href="/services/orthodontics" className="hover:underline">Orthodontics</Link></li>
              <li><Link href="/services/crowns-and-bridges" className="hover:underline">Crowns and Bridges</Link></li>
              <li><Link href="/services/dental-emergencies" className="hover:underline">Dental Emergencies</Link></li>
              <li><Link href="/services/tooth-extraction" className="hover:underline">Tooth Extraction</Link></li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-base sm:text-lg">Importance</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/about-us" className="hover:underline">About us</Link></li>
              <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              {/* <li><Link href="/accessibility" className="hover:underline">Accessibility</Link></li> */}
              <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/service-areas" className="hover:underline">Service Areas</Link></li>
              {/* <li><Link href="/services/endodontics" className="hover:underline">Endodontics</Link></li>
              <li><Link href="/services/same-day-dentistry" className="hover:underline">Same-Day Dentistry</Link></li> 
              <li><Link href="/services/painless-treatment" className="hover:underline">Painless Treatment</Link></li> 
              <li><Link href="/services/perio-protect" className="hover:underline">Perio Protect</Link></li>
              <li><Link href="/services/halitosis" className="hover:underline">Halitosis</Link></li> */}
            </ul>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4 col-span-1">
          <h4 className="font-semibold mb-3 text-base sm:text-lg">Contact Us</h4>
          <div className="text-xs sm:text-sm text-gray-200">
            <p className="mb-2 flex gap-2 items-start"><MapPin size={20} className="mt-0.5"/>
2017 Eg Drive, Suite 200, Harrisburg, PA 17110</p>
            <p className="mb-2 flex gap-2 items-center"><Phone size={16}/> <a href="tel:9737553500" className="underline">717-745-2700</a></p>
            <p className="mb-2 flex gap-2 items-center"><Mail size={16}/> <a href="mailto:info@example.com" className="underline">info@example.com</a></p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300 gap-2 text-center md:text-left">
        <div>
          &copy; {new Date().getFullYear()} Maple Dental. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-end w-full md:w-auto">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
          <Link href="/accessibility" className="hover:underline">Accessibility</Link>
          <Link href="/contact-us" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
