// components/StepInsuranceInfo.tsx
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Step 2: Contact Info Component
const StepContactInfo = ({ nextStep, prevStep, formData, setFormData }: any) => {
  const [contactData, setContactData] = useState({
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
    email: formData.email || '',
    phone: formData.phone || '',
    dateOfBirth: formData.dateOfBirth || '',
    gender: formData.gender || '',
    ...formData
  });

  const handleChange = (field: string, value: string) => {
    setContactData({ ...contactData, [field]: value });
  };

  const handleNext = () => {
    if (contactData.firstName && contactData.lastName && contactData.email && contactData.phone) {
      setFormData({ ...formData, ...contactData });
      nextStep();
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium mb-4">Contact info</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">First Name *</label>
            <input
              type="text"
              value={contactData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Last Name *</label>
            <input
              type="text"
              value={contactData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Email Address *</label>
          <input
            type="email"
            value={contactData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Phone Number *</label>
          <input
            type="tel"
            value={contactData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Date of Birth</label>
            <input
              type="date"
              value={contactData.dateOfBirth}
              onChange={(e) => handleChange('dateOfBirth', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Gender</label>
            <select
              value={contactData.gender}
              onChange={(e) => handleChange('gender', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={prevStep}
          className="px-6 py-2 text-sm"
        >
          Back
        </Button>
        <Button 
          onClick={handleNext}
          disabled={!contactData.firstName || !contactData.lastName || !contactData.email || !contactData.phone}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 text-sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepContactInfo;
