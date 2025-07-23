"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Fade, Slide } from "react-awesome-reveal";

// Blog post data based on the second screenshot
const blogPosts = [
  {
    id: 1,
    title: "5 Clear Signs It's Time for Wisdom Teeth Removal in East Orange",
    date: "Jul 16, 2025",
    description: "Wisdom teeth removal is a common dental procedure that many people need. Learn about the signs that indicate it's time to consider wisdom teeth extraction and how Maple Dental can help you through the process.",
    image: "/Images/banners/dentist-examining-patient-s-teeth.jpg",
    slug: "wisdom-teeth-removal-signs"
  },
  {
    id: 2,
    title: "The Benefits of Choosing Maple Dental for Root Canals in Newark & East Orange, NJ",
    date: "May 18, 2025",
    description: "Root canal treatment doesn't have to be scary. Discover why choosing Maple Dental for your root canal procedure ensures a comfortable experience with advanced technology and experienced professionals.",
    image: "/Images/banners/dentist-matching-colour-tooth-enamel-with-whitening-chart.jpg",
    slug: "root-canal-benefits-nova-dental"
  },
  {
    id: 3,
    title: "Smile Brighter with Natural-Looking Implants from Maple Dental, NJ",
    date: "May 12, 2025",
    description: "Dental implants are the gold standard for tooth replacement. Learn how Maple Dental's advanced implant technology can restore your smile with natural-looking, permanent results.",
    image: "/Images/banners/young-man-with-patient-bib-dental-chair-dentist-who-sits-him-he-looks-his-teeth-using-dental-microscope-holds-dental-bur-mirror.jpg",
    slug: "natural-looking-implants-nova-dental"
  },
  {
    id: 4,
    title: "Should You Call Your Dentist for a Cracked Tooth?",
    date: "Mar 25, 2025",
    description: "A cracked tooth can be a serious dental emergency. Find out when you should immediately contact your dentist and what treatment options are available for different types of tooth fractures.",
    image: "/Images/banners/senior-woman-having-dental-treatment-dentist-s-office-woman-is-being-treated-teeth.jpg",
    slug: "cracked-tooth-dental-emergency"
  },
  {
    id: 5,
    title: "Trust a Local Dentist in Newark & East Orange, NJ | Maple Dental",
    date: "Mar 21, 2025",
    description: "Choosing a local dentist you can trust is crucial for your oral health. Discover why Maple Dental is the preferred choice for families in Newark and East Orange, offering comprehensive care close to home.",
    image: "/Images/banners/portrait-smiling-teenage-girl-with-braces-sitting-chair-while-dentist-standing-clinic.jpg",
    slug: "local-dentist-newark-east-orange"
  },
  {
    id: 6,
    title: "Is My Dental Practice Available When I Need Them the Most?",
    date: "Mar 18, 2025",
    description: "Dental emergencies can happen at any time. Learn about Maple Dental's emergency services and how we ensure you have access to quality dental care when you need it most.",
    image: "/Images/banners/close-up-man-carrying-young-woman-his-back.jpg",
    slug: "dental-practice-availability-emergency"
  },
  {
    id: 7,
    title: "Emergency Dentist: Same-Day Appointments in Newark & East Orange | Maple Dental",
    date: "Jan 31, 2025",
    description: "Don't wait for dental emergencies to get worse. Maple Dental offers same-day emergency appointments to provide immediate relief and treatment when you're experiencing severe dental pain.",
    image: "/Images/banners/doctor-presenting-something-isolated-white-background.jpg",
    slug: "emergency-dentist-same-day-appointments"
  },
  {
    id: 8,
    title: "Get Instant Tooth Pain Relief at Maple Dental in Newark & East Orange, NJ",
    date: "Jan 17, 2025",
    description: "Tooth pain can be debilitating and affect your daily life. Learn about the various causes of tooth pain and how Maple Dental provides effective, immediate relief through advanced treatment options.",
    image: "/Images/banners/dentist-examining-patient-s-teeth.jpg",
    slug: "instant-tooth-pain-relief-nova-dental"
  },
  {
    id: 9,
    title: "Your Trusted Emergency Dentist in Newark & East Orange, NJ | Maple Dental",
    date: "Jan 06, 2025",
    description: "When dental emergencies strike, you need a trusted provider you can rely on. Discover why Maple Dental is the go-to emergency dentist for families throughout Newark and East Orange.",
    image: "/Images/banners/AdobeStock_537857878.webp",
    slug: "trusted-emergency-dentist-newark-east-orange"
  },
  {
    id: 10,
    title: "Caring for Your Dental Health During COVID-19",
    date: "Jun 17, 2020",
    description: "Maple Dental is a warm, inviting dentist facility in Newark,NJ. Dr. Bhavneet Singh, DDS, is a trusted dentist who practices adults and kids’ dentistry, and is dedicated to providing the best dental care in Newark, NJ.",
    image: "/Images/banners/AdobeStock_537857878.webp",
    slug: "caring-for-your-dental-health-during-covid-19"
  }
];

export default function BlogGridPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down" triggerOnce>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR BLOG</h1>
            <h2 className="text-2xl md:text-3xl font-light mb-2">Blog Post</h2>
            <p className="text-lg opacity-90">Home / Blog</p>
          </Fade>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Slide key={post.id} direction="up" delay={index * 100} triggerOnce>
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Blog Post Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Blog Post Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Date */}
                  <p className="text-sm text-gray-500 mb-4">{post.date}</p>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Continue Reading Button */}
                  <Link href={`/blog/${post.slug}`}>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      Continue Reading
                      <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </article>
            </Slide>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-16">
          <Fade direction="up" triggerOnce>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              <span className="text-lg font-medium text-gray-700">01 / 09</span>
              <Button variant="outline" className="p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </Fade>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Fade direction="up" triggerOnce>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-medium mb-2">NEWSLETTER</h3>
                <h4 className="text-3xl font-bold">Subscribe our Newsletter</h4>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter Your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </Fade>
        </div>
      </div> */}
    </div>
  );
} 