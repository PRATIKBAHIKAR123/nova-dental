import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const StepAppointment = ({ nextStep, formData, setFormData }: any) => {
  const [selectedDate, setSelectedDate] = useState(formData.selectedDate || '');
  const [isNewPatient, setIsNewPatient] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTime, setSelectedTime] = useState(formData.selectedTime || '');
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  const locations = [
    {
      id: "bloomfield",
      name: "Bloomfield Avenue Newark",
      shortName: "Bloomfield Av...",
      address: "539 Bloomfield Avenue",
      suite: "Suite 3",
      city: "Newark, NJ 07107",
      phone: "973-604-1600",
      avatar: "/Images/doctor_9439268.png",
      hours: {
        monday: ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "4:00 PM"],
        tuesday: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
        wednesday: ["9:00 AM", "10:00 AM", "2:00 PM", "4:00 PM"],
        thursday: ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
        friday: ["9:00 AM", "10:00 AM", "11:00 AM"],
        saturday: ["9:00 AM", "10:00 AM"],
        sunday: []
      }
    },
    {
      id: "downtown",
      name: "Downtown Newark",
      shortName: "Downtown Ne...",
      address: "240 Mulberry Street",
      suite: "2nd floor",
      city: "Newark, NJ 07102",
      phone: "973-755-3500",
      avatar: "/Images/doctor_9439268.png",
      hours: {
        monday: ["9:00 AM", "11:00 AM", "2:00 PM"],
        tuesday: ["9:00 AM", "10:00 AM", "1:00 PM", "4:00 PM"],
        wednesday: ["9:00 AM", "11:00 AM", "3:00 PM"],
        thursday: ["10:00 AM", "1:00 PM", "2:00 PM"],
        friday: ["9:00 AM", "10:00 AM", "11:00 AM"],
        saturday: ["9:00 AM"],
        sunday: []
      }
    },
    {
      id: "east-orange",
      name: "Park Avenue East Orange",
      shortName: "East Orange",
      address: "90 Washington Street",
      suite: "Suite 309",
      city: "East Orange, NJ 07017",
      phone: "973-604-1900",
      avatar: "/Images/doctor_9439268.png",
      hours: {
        monday: ["9:00 AM", "10:00 AM", "1:00 PM", "3:00 PM"],
        tuesday: ["9:00 AM", "11:00 AM", "2:00 PM"],
        wednesday: ["10:00 AM", "11:00 AM", "1:00 PM"],
        thursday: ["9:00 AM", "2:00 PM", "4:00 PM"],
        friday: ["8:30 AM", "10:00 AM", "11:00 AM"],
        saturday: ["9:00 AM", "10:00 AM"],
        sunday: []
      }
    }
  ];

  // Generate dates for current and next month
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    const startDate = new Date(currentWeekStart);
    
    // Generate 2 months worth of dates starting from current week
    for (let i = 0; i < 60; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
      const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const dayKey = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
      
      dates.push({
        day: dayName,
        date: monthDay,
        fullDate: date.toISOString().split('T')[0],
        dayKey: dayKey,
        available: date >= today
      });
    }
    return dates;
  };

  const [dates, setDates] = useState(generateDates());

  useEffect(() => {
    setDates(generateDates());
  }, [currentWeekStart]);

  // Get visible dates (show 5 at a time)
  const getVisibleDates = () => {
    const startIndex = Math.floor((currentWeekStart.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return dates.slice(Math.max(0, startIndex), Math.max(0, startIndex) + 7);
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() + (direction === 'next' ? 7 : -7));
    
    // Don't go before today
    if (direction === 'prev' && newDate < new Date()) {
      return;
    }
    
    setCurrentWeekStart(newDate);
    setSelectedTime(''); // Reset selected time when navigating
  };

  const getTimeSlotsForDate = (dateObj: any, location: any) => {
    if (!dateObj.available || !location) return [];
    return location.hours[dateObj.dayKey] || [];
  };

  const handleDateSelect = (dateStr: string) => {
    setSelectedDate(dateStr);
    setSelectedTime('');
  };

  const handleTimeSelect = (time: string, locationId: string) => {
    setSelectedTime(time);
    setSelectedLocation(locationId);
  };

  const handleNext = () => {
    if (selectedTime && selectedLocation) {
      const selectedLocationData = locations.find(loc => loc.id === selectedLocation);
      setFormData({ 
        ...formData, 
        selectedDate, 
        selectedTime, 
        provider: selectedLocationData,
        isNewPatient 
      });
      nextStep();
    }
  };

  const visibleDates = getVisibleDates();
  const selectedDateObj = dates.find(d => d.date === selectedDate);

  return (
    <div className="mt-4">
      

      {/* New Patient Checkbox */}
      <div className="flex items-center gap-3 mb-6">
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
              isNewPatient ? 'bg-teal-600 border-teal-600' : 'border-gray-300'
            }`}
          >
            {isNewPatient && <Check className="w-3 h-3 text-white" />}
          </div>
        </div>
        <label className="text-sm text-gray-700 cursor-pointer" onClick={() => setIsNewPatient(!isNewPatient)}>
          I&apos;m a new patient at this practice
        </label>
      </div>

      {/* Location Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <select
          value={selectedLocation}
          onChange={(e) => {
            setSelectedLocation(e.target.value);
            setSelectedTime('');
          }}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        >
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>{location.name}</option>
          ))}
        </select>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-4 mb-8">
        {/* Step 1 */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-medium bg-teal-600 shrink-0">
            1
          </div>
          <span className="text-sm text-gray-900 font-medium">Appointment details</span>
        </div>

        <div className="flex-1 h-0.5 bg-gray-300"></div>

        {/* Step 2 */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm font-medium shrink-0">
            2
          </div>
          <span className="text-sm text-gray-500">Contact info</span>
        </div>

        <div className="flex-1 h-0.5 bg-gray-300"></div>

        {/* Step 3 */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm font-medium shrink-0">
            3
          </div>
          <span className="text-sm text-gray-500">Insurance info</span>
        </div>
      </div>

      {/* Choose a time */}
      <h3 className="text-lg font-semibold mb-6">Choose a time</h3>
      
      {/* Date Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => navigateWeek('prev')}
          className="p-2 hover:bg-gray-100 rounded-full"
          disabled={currentWeekStart <= new Date()}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="flex gap-2">
          {visibleDates.map((dateObj) => (
            <button
              key={dateObj.fullDate}
              onClick={() => handleDateSelect(dateObj.date)}
              disabled={!dateObj.available}
              className={`flex flex-col items-center px-4 py-3 rounded-lg text-sm min-w-[80px] transition-all ${
                selectedDate === dateObj.date
                  ? 'bg-teal-600 text-white'
                  : dateObj.available
                  ? 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span className="text-xs font-medium">{dateObj.day}</span>
              <span className="font-semibold">{dateObj.date}</span>
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => navigateWeek('next')}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Providers and Time Slots */}
      <div className="space-y-6 overflow-y-auto max-h-[30vh]">
        {selectedLocation ? (
          // Show selected location only
          locations
            .filter(location => location.id === selectedLocation)
            .map((location) => {
              const timeSlots = selectedDateObj ? getTimeSlotsForDate(selectedDateObj, location) : [];
              
              return (
                <div key={location.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-12 gap-6">
                    {/* Provider Info */}
                    <div className="col-span-4">
                      <div className="flex items-start gap-3">
                        {/* Avatar */}
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <img
                            src={location.avatar}
                            alt="Provider Avatar"
                            className="w-10 h-10 rounded-full"
                          />
                        </div>
                        
                        {/* Provider Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm mb-1">
                            {location.shortName}
                          </h4>
                          <div className="text-xs text-gray-600 space-y-0.5">
                            <div>{location.address}</div>
                            <div>{location.suite}</div>
                            <div>{location.city}</div>
                          </div>
                          <div className="flex items-center gap-1 mt-3 pt-1 border-t border-gray-100">
                            <Clock className="w-3 h-3 text-gray-500" />
                            <span className="text-xs text-gray-500">Appointments in EDT</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div className="col-span-8">
                      {!selectedDate ? (
                        <div className="flex items-center justify-center h-24 text-gray-500 text-sm">
                          Please select a date to view available times
                        </div>
                      ) : timeSlots.length > 0 ? (
                        <>
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            {timeSlots.slice(0, 6).map((time:any) => (
                              <button
                                key={time}
                                onClick={() => handleTimeSelect(time, location.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-md border transition-all ${
                                  selectedTime === time && selectedLocation === location.id
                                    ? 'bg-teal-600 text-white border-teal-600'
                                    : 'bg-white text-teal-600 border-teal-200 hover:bg-teal-50'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                          {timeSlots.length > 6 && (
                            <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                              more
                            </button>
                          )}
                        </>
                      ) : (
                        <div className="flex items-center justify-center h-24 text-gray-500 text-sm">
                          — No appointments available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
        ) : (
          // Show all locations when none selected
          locations.map((location) => {
            const timeSlots = selectedDateObj ? getTimeSlotsForDate(selectedDateObj, location) : [];
            
            return (
              <div key={location.id} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-12 gap-6">
                  {/* Provider Info */}
                  <div className="col-span-4">
                    <div className="flex items-start gap-3">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <img
                          src={location.avatar}
                          alt="Provider Avatar"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      
                      {/* Provider Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm mb-1">
                          {location.shortName}
                        </h4>
                        <div className="text-xs text-gray-600 space-y-0.5">
                          <div>{location.address}</div>
                          <div>{location.suite}</div>
                          <div>{location.city}</div>
                        </div>
                        <div className="flex items-center gap-1 mt-3 pt-1 border-t border-gray-100">
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-500">Appointments in EDT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="col-span-8">
                    {!selectedDate ? (
                      <div className="flex items-center justify-center h-24 text-gray-500 text-sm">
                        Please select a date to view available times
                      </div>
                    ) : timeSlots.length > 0 ? (
                      <>
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          {timeSlots.slice(0, 6).map((time:any) => (
                            <button
                              key={time}
                              onClick={() => handleTimeSelect(time, location.id)}
                              className={`px-4 py-2 text-sm font-medium rounded-md border transition-all ${
                                selectedTime === time && selectedLocation === location.id
                                  ? 'bg-teal-600 text-white border-teal-600'
                                  : 'bg-white text-teal-600 border-teal-200 hover:bg-teal-50'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        {timeSlots.length > 6 && (
                          <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                            more
                          </button>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-24 text-gray-500 text-sm">
                        — No appointments available
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-8">
        <Button 
          onClick={handleNext}
          disabled={!selectedTime || !selectedLocation}
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepAppointment;