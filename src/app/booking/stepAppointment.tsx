import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";

// Step 1: Appointment Details Component
const StepAppointment = ({ nextStep, formData, setFormData }: any) => {
  const [selectedDate, setSelectedDate] = useState(formData.selectedDate || 'Jul 21');
    const [isNewPatient, setIsNewPatient] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState('bloomfield');
  const [selectedTime, setSelectedTime] = useState(formData.selectedTime || '');

//     const locations = [
//     '539 Bloomfield Avenue',
//     '240 Mulberry Street',
//     'Downtown Newark'
//   ];

  const locations = [
  {
    id: "bloomfield",
    name: "Bloomfield Avenue Newark",
    address: "539 Bloomfield Avenue, Suite 3\nNewark, NJ 07107",
    phone: "973-604-1600",
    hours: [
      "Monday: 9:00 AM - 7:00 PM",
      "Tuesday: 9:00 AM - 7:00 PM",
      "Wednesday: 9:00 AM - 7:00 PM",
      "Thursday: 9:00 AM - 7:00 PM",
      "Friday: 9:00 AM - 7:00 PM",
      "Saturday: 9:00 AM - 3:00 PM",
      "Sunday: Closed",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.4354875674995!2d-74.1906044!3d40.7594038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253e013fd8125%3A0x7497a1117e95a6d5!2s539%20Bloomfield%20Ave%2C%20Newark%2C%20NJ%2007107%2C%20USA!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  },
  {
    id: "downtown",
    name: "Downtown Newark",
    address: "240 Mulberry Street, 2nd floor\nNewark, NJ 07102",
    phone: "973-755-3500",
    hours: [
      "Monday: 9:00 AM - 7:00 PM",
      "Tuesday: 9:00 AM - 5:00 PM",
      "Wednesday: 9:00 AM - 6:30 PM",
      "Thursday: 9:00 AM - 6:30 PM",
      "Friday: 9:00 AM - 6:30 PM",
      "Saturday: 9:00 AM - 3:00 PM",
      "Sunday: Closed",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.281485707488!2d-74.1719829!3d40.7339645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253788878b48d%3A0x249918dd544f7426!2s240%20Mulberry%20St%2C%20Newark%2C%20NJ%2007102%2C%20USA!5e0!3m2!1sen!2sin!4v1710000000001!5m2!1sen!2sin",
  },
  {
    id: "east-orange",
    name: "Park Avenue East Orange",
    address: "90 Washington Street, Suite 309\nEast Orange, NJ 07017",
    phone: "973-604-1900",
    hours: [
      "Monday: 9:00 AM - 7:00 PM",
      "Tuesday: 9:00 AM - 7:00 PM",
      "Wednesday: 9:00 AM - 7:00 PM",
      "Thursday: 9:00 AM - 7:00 PM",
      "Friday: 8:30 AM - 5:00 PM",
      "Saturday: 9:00 AM - 3:00 PM",
      "Sunday: Closed",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.0295803954474!2d-74.2159333!3d40.7681949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2548ad47a57d9%3A0xc4f0a99d6a6ba33c!2s90%20Washington%20St%2C%20East%20Orange%2C%20NJ%2007017%2C%20USA!5e0!3m2!1sen!2sin!4v1710000000002!5m2!1sen!2sin",
  },
];

  const dates = [
    { day: 'SAT', date: 'Jul 19', available: true },
    { day: 'SUN', date: 'Jul 20', available: false },
    { day: 'MON', date: 'Jul 21', available: true },
    { day: 'TUE', date: 'Jul 22', available: true },
    { day: 'WED', date: 'Jul 23', available: true },
  ];

  const timeSlots: { [key: string]: string[] } = {
    'Jul 19': [],
    'Jul 20': [],
    'Jul 21': ['9:00 AM', '10:00 AM', '11:00 AM'],
    'Jul 22': ['10:00 AM', '11:00 AM', '1:00 PM'],
    'Jul 23': ['9:00 AM', '10:00 AM', '1:00 PM'],
  };

  const [provider, setProvider] = useState(locations.find(loc => loc.id === selectedLocation)) ;

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (selectedTime) {
      setFormData({ ...formData, selectedDate, selectedTime, provider });
      nextStep();
    }
  };

  return (
    <div className="mt-4">
        <div className="flex items-center gap-2 mb-4">
            <div className="relative">
              <input
                type="checkbox"
                checked={isNewPatient}
                onChange={(e) => setIsNewPatient(e.target.checked)}
                className="sr-only"
              />
              <div
                onClick={() => setIsNewPatient(!isNewPatient)}
                className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center ${
                  isNewPatient ? 'bg-primary border-primary' : 'border-gray-300'
                }`}
              >
                {isNewPatient && <Check className="w-3 h-3 text-white" />}
              </div>
            </div>
            <label className="text-sm text-gray-700 cursor-pointer" onClick={() => setIsNewPatient(!isNewPatient)}>
              I&lsquo;m a new patient at this practice
            </label>
          </div>
        {/* Location Selection */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => {setSelectedLocation(e.target.value); setProvider(locations.find(loc => loc.id === e.target.value))}}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            >
              {locations.map((location) => (
                <option key={location.id} value={location.id}>{location.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-1 md:gap-4 mb-6 w-full overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
  {/* Step 1 */}
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full text-white text-sm font-medium bg-primary shrink-0">
      1
    </div>
    <span className="text-sm text-gray-900">Appointment details</span>
  </div>

  <div className="flex-1 h-1 bg-gray-300"></div>

  {/* Step 2 */}
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm font-medium shrink-0">
      2
    </div>
    <span className="text-sm text-gray-500">Contact info</span>
  </div>

  <div className="flex-1 h-1 bg-gray-300"></div>

  {/* Step 3 */}
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm font-medium shrink-0">
      3
    </div>
    <span className="text-sm text-gray-500">Insurance info</span>
  </div>
</div>

      <h3 className="text-lg font-medium mb-4">Choose a time</h3>
      
      {/* Date Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button className="p-1">
          <ChevronLeft className="w-4 h-4 text-gray-400" />
        </button>
        
        <div className="flex gap-2">
          {dates.map((dateObj) => (
            <button
              key={dateObj.date}
              onClick={() => handleDateSelect(dateObj.date)}
              disabled={!dateObj.available}
              className={`flex flex-col items-center px-3 py-2 rounded text-xs min-w-[60px] transition-all ${
                selectedDate === dateObj.date
                  ? 'bg-primary text-white'
                  : dateObj.available
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span className="font-medium">{dateObj.day}</span>
              <span className="font-semibold">{dateObj.date}</span>
            </button>
          ))}
        </div>
        
        <button className="p-1">
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Provider and Time Slots */}
      <div className="grid grid-cols-12 gap-4">
        {/* Provider Info */}
        <div className="col-span-5">
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <img
                    src="/Images/doctor_9439268.png"
                    alt="Provider Avatar"
                    className="w-10 h-10 rounded-full"
                />
            </div>
            
            {/* Provider Details */}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 text-sm mb-1">
                {provider!.name}
              </h4>
              <div className="text-xs text-gray-600 space-y-1">
                <div>{provider!.address}</div>
                {/* <div>{provider.suite}</div>
                <div>{provider.city}</div> */}
                <div className="flex items-center gap-1 mt-2 pt-1">
                  <Clock className="w-3 h-3" />
                  <span>Appointments in EDT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time Slots */}
        <div className="col-span-7">
          <div className="grid grid-cols-3 gap-2">
            {timeSlots[selectedDate]?.length > 0 ? (
              <>
                {timeSlots[selectedDate].map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`px-3 py-1.5 text-xs font-medium rounded border transition-all ${
                      selectedTime === time
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-primary border-teal-200 hover:bg-teal-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
                {timeSlots[selectedDate].length > 0 && (
                  <button className="px-3 py-1.5 text-xs text-primary hover:text-teal-700">
                    more
                  </button>
                )}
              </>
            ) : (
              <div className="col-span-3 text-center py-4 text-gray-500 text-sm">
                {dates.find(d => d.date === selectedDate)?.available ? 
                  'No appointments available' : 
                  '—'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-6">
        <Button 
          onClick={handleNext}
          disabled={!selectedTime}
          className="bg-primary hover:bg-teal-700 text-white px-6 py-2 text-sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepAppointment;