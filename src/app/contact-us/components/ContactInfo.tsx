import Image from 'next/image'

export default function ContactInfo() {
  return (
    <div className="relative bg-primary rounded-lg p-8 text-white shadow-lg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/Images/banners/doctor-presenting-something-isolated-white-background.jpg"
          alt="Dental professional"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Green square decoration */}
      <div className="absolute top-4 left-4 w-4 h-4 bg-secondary"></div>
      
      {/* Up arrow decoration */}
      <div className="absolute top-4 right-4 text-secondary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14l5-5 5 5z"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 space-y-6">
        <div>
          <h4 className="font-bold text-lg mb-2">Address:</h4>
          <p className="text-white/90 leading-relaxed">
            258C, Saintpatrick, Main Street, North Town, New York
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-2">Phone:</h4>
          <div className="space-y-1">
            <p className="text-white/90">+32145 987 654</p>
            <p className="text-white/90">+12345 987 456</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-2">Web:</h4>
          <div className="space-y-1">
            <p className="text-white/90">info@example.com</p>
            <p className="text-white/90">www.example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
} 