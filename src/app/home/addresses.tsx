"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bounce, Fade } from "react-awesome-reveal";
import BookingModal from "../booking/bookingScreen";

const locations = [
  // {
  //   id: "bloomfield",
  //   name: "Bloomfield Avenue Newark",
  //   address: "539 Bloomfield Avenue, Suite 3\nNewark, NJ 07107",
  //   phone: "973-604-1600",
  //   hours: [
  //     "Monday: 9:00 AM - 7:00 PM",
  //     "Tuesday: 9:00 AM - 7:00 PM",
  //     "Wednesday: 9:00 AM - 7:00 PM",
  //     "Thursday: 9:00 AM - 7:00 PM",
  //     "Friday: 9:00 AM - 7:00 PM",
  //     "Saturday: 9:00 AM - 3:00 PM",
  //     "Sunday: Closed",
  //   ],
  //   mapUrl:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.4354875674995!2d-74.1906044!3d40.7594038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253e013fd8125%3A0x7497a1117e95a6d5!2s539%20Bloomfield%20Ave%2C%20Newark%2C%20NJ%2007107%2C%20USA!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  // },
    {
    id: "harrisburg",
    name: "Harrisburg, PA",
    address: "2017 Eg Drive, Suite 200, Harrisburg, PA 17110",
    phone: "717-745-2700",
    hours: [
      "Monday: 9:00 AM - 6:00 PM",
      "Tuesday: 9:00 AM - 6:00 PM",
      "Wednesday: 9:00 AM - 6:00 PM",
      "Thursday: 9:00 AM - 6:00 PM",
      "Friday: 9:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 3:00 PM",
      "Sunday: Closed",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48699.53187959969!2d-76.92187807181904!3d40.28195319387061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c116b8079e97%3A0xbb6e42c8128d46d5!2sHarrisburg%2C%20PA%2C%20USA!5e0!3m2!1sen!2sin!4v1753263853796!5m2!1sen!2sin",
  },
  // {
  //   id: "downtown",
  //   name: "Downtown Newark",
  //   address: "240 Mulberry Street, 2nd floor\nNewark, NJ 07102",
  //   phone: "973-755-3500",
  //   hours: [
  //     "Monday: 9:00 AM - 7:00 PM",
  //     "Tuesday: 9:00 AM - 5:00 PM",
  //     "Wednesday: 9:00 AM - 6:30 PM",
  //     "Thursday: 9:00 AM - 6:30 PM",
  //     "Friday: 9:00 AM - 6:30 PM",
  //     "Saturday: 9:00 AM - 3:00 PM",
  //     "Sunday: Closed",
  //   ],
  //   mapUrl:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.281485707488!2d-74.1719829!3d40.7339645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253788878b48d%3A0x249918dd544f7426!2s240%20Mulberry%20St%2C%20Newark%2C%20NJ%2007102%2C%20USA!5e0!3m2!1sen!2sin!4v1710000000001!5m2!1sen!2sin",
  // },
  // {
  //   id: "east-orange",
  //   name: "Park Avenue East Orange",
  //   address: "90 Washington Street, Suite 309\nEast Orange, NJ 07017",
  //   phone: "973-604-1900",
  //   hours: [
  //     "Monday: 9:00 AM - 7:00 PM",
  //     "Tuesday: 9:00 AM - 7:00 PM",
  //     "Wednesday: 9:00 AM - 7:00 PM",
  //     "Thursday: 9:00 AM - 7:00 PM",
  //     "Friday: 8:30 AM - 5:00 PM",
  //     "Saturday: 9:00 AM - 3:00 PM",
  //     "Sunday: Closed",
  //   ],
  //   mapUrl:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.0295803954474!2d-74.2159333!3d40.7681949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2548ad47a57d9%3A0xc4f0a99d6a6ba33c!2s90%20Washington%20St%2C%20East%20Orange%2C%20NJ%2007017%2C%20USA!5e0!3m2!1sen!2sin!4v1710000000002!5m2!1sen!2sin",
  // },
];

export default function LocationTabs() {
  const [selected, setSelected] = useState(locations[0]);
const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-12">
      {/* Tab Buttons */}
      {/* <div className="flex justify-start md:justify-center gap-2 md:gap-4 w-full overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
        {locations.map((loc) => (
          <Button
            key={loc.id}
            variant={selected.id === loc.id ? "default" : "outline"}
            onClick={() => setSelected(loc)}
          >
            {loc.name}
          </Button>
        ))}
      </div> */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">

      {/* Info Block */}
      <div className="flex-1 text-center space-y-4">
        <Bounce>
        <h2 className="text-2xl font-bold">{selected.name}</h2>
        </Bounce>
        <p className="whitespace-pre-line text-gray-600">{selected.address}</p>

        <h3 className="text-md font-medium mt-4">Hours of Operation:</h3>
        <Fade delay={400}>
        <ul className="text-sm text-gray-700">
          {selected.hours.map((hour, i) => (
            <li key={i}>{hour}</li>
          ))}
        </ul>
        </Fade>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            onClick={()=>setIsBookingOpen(true)}
            className="bg-primary text-white px-5 py-2 rounded-md text-sm hover:bg-secondary transition cursor-pointer"
          >
            Book Online
          </a>
          <a
            href={`tel:${selected.phone}`}
            className="bg-blue-100 text-primary border border-primary px-5 py-2 rounded-md text-sm hover:opacity-50 transition"
          >
            {selected.phone}
          </a>
        </div>
      </div>

      {/* Single Map */}
      <div className="flex-1 w-full h-[400px] rounded-xl overflow-hidden shadow">
        <iframe
          src={selected.mapUrl}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </div>
      </div>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen}/>
    </div>
  );
}
