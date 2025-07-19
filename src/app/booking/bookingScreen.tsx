
// components/BookingModal.tsx
'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useState } from 'react';
import {  Check } from 'lucide-react';
import StepAppointment from './stepAppointment';
import StepInsuranceInfo from './stepInsuranceInfo';
import StepContactInfo from './stepContactInfo';
import RequestSubmitted from './requestSubmitted';

interface BookingModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}




// Main Booking Modal Component
const BookingModal: React.FC<BookingModalProps> = ({ open, setOpen }) => {
  const [step, setStep] = useState(1);
  const [isNewPatient, setIsNewPatient] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState('539 Bloomfield Avenue');
  const [formData, setFormData] = useState<any>({});

  const locations = [
    '539 Bloomfield Avenue',
    '240 Mulberry Street',
    'Downtown Newark'
  ];

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleComplete = () => {
    // Handle appointment booking completion
    console.log('Appointment booked:', formData);
    // alert('Appointment booked successfully!');
    // setOpen(false);
    setStep(4);
    //setFormData({});
  };

  const resetModal = () => {
    setStep(1);
    setFormData({});
    setIsNewPatient(true);
    setSelectedLocation('539 Bloomfield Avenue');
  };

  return (
    <Dialog open={open} onOpenChange={(open) => {
      setOpen(open);
      if (!open) resetModal();
    }}>
      <DialogContent className="!max-w-[700px] p-0 gap-0">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Book Appointment</h2>
          {/* <button
            onClick={() => setOpen(false)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-5 h-5" />
          </button> */}
        </div>

        <div className="p-4 md:p-6">
          {/* New Patient Checkbox */}
          {/* <div className="flex items-center gap-2 mb-4">
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
          </div> */}

          {/* Location Selection */}
          {/* <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            >
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div> */}

          {/* Step Indicators */}
          {/* <div className="flex items-center gap-4 mb-6">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
              step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <span className={`text-sm ${step >= 1 ? 'text-gray-900' : 'text-gray-500'}`}>
              Appointment details
            </span>

            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
              step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
            <span className={`text-sm ${step >= 2 ? 'text-gray-900' : 'text-gray-500'}`}>
              Contact info
            </span>

            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
              step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
            <span className={`text-sm ${step >= 3 ? 'text-gray-900' : 'text-gray-500'}`}>
              Insurance info
            </span>
          </div> */}

          {/* Step Content */}
          {step === 1 && (
            <StepAppointment
              nextStep={nextStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 2 && (
            <StepContactInfo
              nextStep={nextStep}
              prevStep={prevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 3 && (
            <StepInsuranceInfo
              prevStep={prevStep}
              formData={formData}
              setFormData={setFormData}
              onComplete={handleComplete}
            />
          )}
          {step === 4 && (
            <RequestSubmitted
              formData={formData}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;