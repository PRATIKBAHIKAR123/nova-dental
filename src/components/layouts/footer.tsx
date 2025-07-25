import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left: Logo & About */}
        <div className="space-y-4 col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/Images/maple-pa-large-Blue-white-website-header.png" alt="Maple Dental Logo" width={194} height={130} />
          </div>
          <p className="text-sm text-gray-200">
            Maple Dental provides comprehensive dental care in Newark, NJ, with a focus on patient comfort and advanced treatments.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/facebook.png" alt="Facebook" width={28} height={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/instagram.png" alt="Instagram" width={28} height={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/twitter.png" alt="Twitter" width={28} height={28} />
            </a>
            {/* Add LinkedIn if you have the icon */}
          </div>
        </div>

        {/* Middle: Services Columns */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-lg">Services</h4>
            <ul className="space-y-2 text-sm">
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
            <h4 className="font-semibold mb-3 text-lg">Importance</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="hover:underline">About us</Link></li>
              <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              {/* <li><Link href="/accessibility" className="hover:underline">Accessibility</Link></li> */}
              <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/locations" className="hover:underline">Locations</Link></li>
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
          <h4 className="font-semibold mb-3 text-lg">Contact Us</h4>
          <div className="text-sm text-gray-200">
            <p className="mb-2 flex gap-2"><MapPin size={24}/>
2017 Eg Drive, Suite 200, Harrisburg, PA 17110</p>
            <p className="mb-2 flex gap-2"><Phone size={18}/> <a href="tel:9737553500" className="underline">717-745-2700</a></p>
            <p className="mb-2 flex gap-2"><Mail size={18}/> <a href="mailto:info@example.com" className="underline">info@example.com</a></p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300 gap-2">
        <div>
          &copy; {new Date().getFullYear()} Maple Dental. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
          <Link href="/accessibility" className="hover:underline">Accessibility</Link>
          <Link href="/contact-us" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
