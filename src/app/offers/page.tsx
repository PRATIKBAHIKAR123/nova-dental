import Image from 'next/image';

export default function OffersPage() {
    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="details-page-header-section flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Get Professional Teeth Whitening for Only $299!</h1>
                <div className="text-lg font-semibold mb-2">A Confident Smile Starts Here – No Hidden Fees, No Pressure!</div>
            </div>

            {/* Welcome Offer Section */}
            <div className="max-w-7xl mx-auto text-center py-10 px-4">
                <h2 className="text-xl font-bold mb-2">Welcome Offer for New & Existing Patients in Belleville & Nearby Areas</h2>
                <p className="mb-2">We’re thrilled to help you achieve your dream smile! At Maple Dental, NJ, our $299 Whitening Special gives you professional-grade teeth whitening in a single, safe, and comfortable visit. No surprises – just dazzling results.</p>
                <p className="mb-2 p-4">Whether you’re from Nutley, Kearny, Newark (07104 & 07106) or the surrounding areas, our team is here to brighten your smile with care and confidence.</p>
                <p className="mb-4">Looking for a trusted whitening treatment near you? You’ve come to the right place!</p>
                <button className="bg-primary text-white px-6 py-2 rounded font-semibold shadow hover:bg-primary/90 transition">Claim Your Special Offer Now</button>
            </div>

            {/* Main Offer Section */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-8 px-4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image src="/Images/banners/woman-patient-dentist.jpg" alt="Teeth Whitening" width={400} height={350} className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[350px]" />
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4">What’s Included in Your Whitening Visit?</h3>
                    <ul className="space-y-4 text-left">
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1">✔️</span>
                            <div>
                                <span className="font-semibold">Professional Whitening Treatment</span>
                                <div className="text-sm text-gray-700">Get visibly whiter teeth with a dental-grade treatment that’s safe, effective, and lasts longer than over-the-counter options.</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1">✔️</span>
                            <div>
                                <span className="font-semibold">Quick, Comfortable Process</span>
                                <div className="text-sm text-gray-700">Achieve a brighter smile in about an hour – perfect for busy schedules or special events.</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1">✔️</span>
                            <div>
                                <span className="font-semibold">Personalized Care & Aftercare Guidance</span>
                                <div className="text-sm text-gray-700">We tailor the treatment to your needs and provide tips to help you maintain your smile’s brilliance.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full details-page-header-section text-left text-white py-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-xl font-bold mb-4">Why Maple Dental NJ is the Right Dentist Near You</h3>
                    <p className="mb-4">Wherever you’re located — from Nutley to Kearny, from Newark’s 07104 or 07106 — Maple Dental NJ makes high-quality care accessible and affordable.</p>
                    <ul className="space-y-2 text-base">
                        <li className="flex items-center gap-2"><span className="text-green-300">✔️</span> Caring, Experienced Dentists - Gentle, thorough, and committed to your comfort</li>
                        <li className="flex items-center gap-2"><span className="text-green-300">✔️</span> No Guesswork or Gimmicks - Transparent pricing and clear communication</li>
                        <li className="flex items-center gap-2"><span className="text-green-300">✔️</span> Family-Friendly Office - We treat kids, teens, adults, and seniors</li>
                        <li className="flex items-center gap-2"><span className="text-green-300">✔️</span> Flexible Scheduling - Your time matters, and we run on time</li>
                    </ul>
                </div>
            </div>

            {/* What to Expect Section */}
            <div className="max-w-5xl mx-auto py-12 px-4">
                <h3 className="text-xl font-bold text-center mb-6">What to Expect During Your Whitening Appointment</h3>
                <p className="text-center mb-8">From the moment you walk into <span className="font-semibold">Maple Dental NJ</span> at our Belleville office, you’ll be treated with warmth and respect. Here’s how your visit will go:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl">✔️</span>
                        <span className="font-semibold">A friendly welcome from our staff</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl">✔️</span>
                        <span className="font-semibold">A brief consultation with our dentist to confirm you’re a good candidate</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl">✔️</span>
                        <span className="font-semibold">Safe and effective whitening treatment, done in-office</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
                        <span className="text-primary text-2xl">✔️</span>
                        <span className="font-semibold">Expert advice on maintaining your brighter smile</span>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-primary text-white px-6 py-2 rounded font-semibold shadow hover:bg-primary/90 transition">Claim Your Free Exam Today!</button>
                </div>
            </div>
        </div>
    );
} 