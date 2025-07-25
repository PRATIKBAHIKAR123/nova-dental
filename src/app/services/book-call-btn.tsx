import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import BookingModal from '../booking/bookingScreen';



const BookCallBtn: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <Fade direction="up" triggerOnce className='bg-white'>
                    <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
                      <div className="hidden md:flex gap-3">
                        <button className="w-full flex flex-col border border-primary text-primary rounded-lg px-4 py-3 hover:opacity-50 text-sm font-medium transition">
                          <span className="text-base">Call Us for Booking</span>
                          717-745-2700
                        </button>
                        <button onClick={() => setIsBookingOpen(true)} className="w-full flex flex-col bg-primary text-white rounded-lg px-4 py-3 hover:bg-secondary text-sm font-medium transition">
                          Book Online
                          <span className="text-base">Click Here for Appointment</span>
                        </button>
                      </div>
                    </section>
                    <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen}/>
                  </Fade>
    );
};

export default BookCallBtn;