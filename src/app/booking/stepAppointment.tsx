import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";

// Step 1: Appointment Details Component
const StepAppointment = ({ nextStep, formData, setFormData }: any) => {
  const [selectedDate, setSelectedDate] = useState(formData.selectedDate || 'Jul 21');
  const [selectedTime, setSelectedTime] = useState(formData.selectedTime || '');

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

  const provider = {
    name: 'Bloomfield Ave...',
    address: '539 Bloomfield Avenue',
    suite: 'Suite 3',
    city: 'Newark, NJ 07107',
    timezone: 'EDT'
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (selectedTime) {
      setFormData({ ...formData, selectedDate, selectedTime });
      nextStep();
    }
  };

  return (
    <div className="mt-4">
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
                  ? 'bg-teal-600 text-white'
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
              <div className="w-6 h-6 bg-orange-400 rounded-full relative">
                <div className="absolute inset-1 bg-white rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-blue-600 rounded-t"></div>
              </div>
            </div>
            
            {/* Provider Details */}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 text-sm mb-1">
                {provider.name}
              </h4>
              <div className="text-xs text-gray-600 space-y-1">
                <div>{provider.address}</div>
                <div>{provider.suite}</div>
                <div>{provider.city}</div>
                <div className="flex items-center gap-1 mt-2 pt-1">
                  <Clock className="w-3 h-3" />
                  <span>Appointments in {provider.timezone}</span>
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
                        ? 'bg-teal-600 text-white border-teal-600'
                        : 'bg-white text-teal-600 border-teal-200 hover:bg-teal-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
                {timeSlots[selectedDate].length > 0 && (
                  <button className="px-3 py-1.5 text-xs text-teal-600 hover:text-teal-700">
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
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 text-sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepAppointment;