// components/StepInsuranceInfo.tsx
import { Button } from '@/components/ui/button';
import { Check, Clock } from 'lucide-react';
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
    const provider = formData.provider; // Assuming provider is passed in formData
        const [isPoliciesAgreed, setisPoliciesAgreed] = useState(false);
        const [isMessagesAgreed, setisMessagesAgreed] = useState(false);

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
       <div className="flex items-center gap-1 md:gap-4 mb-6 mt-3 w-full overflow-x-scroll md:overflow-x-hidden overflow-y-hidden">
  {/* Step 1 */}
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-secondary text-white text-sm font-medium shrink-0">
      <Check className="w-4 h-4" />
    </div>
    <span className="text-sm text-gray-500">Appointment details</span>
  </div>

  <div className="flex-1 h-1 bg-primary"></div>

  {/* Step 2 */}
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-primary text-white text-sm font-medium shrink-0">
      2
    </div>
    <span className="text-sm text-gray-900">Contact info</span>
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

      <h3 className="text-lg font-medium mb-4">Contact info</h3>
      
      <div className="space-y-4 overflow-y-auto max-h-[40vh]">
        <div>
            <label className="block text-sm text-gray-600 mb-1">Reason for visit (Optional)</label>
            <input
              type="text"
              //value={contactData.firstName}
              //onChange={(e) => handleChange('firstName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
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
        <div className="flex items-start gap-2 mb-4">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isPoliciesAgreed}
                        onChange={(e) => setisPoliciesAgreed(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        onClick={() => setisPoliciesAgreed(!isPoliciesAgreed)}
                        className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center ${
                          isPoliciesAgreed ? 'bg-primary border-primary' : 'border-gray-300'
                        }`}
                      >
                        {isPoliciesAgreed && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                    <label className="text-sm text-gray-700 cursor-pointer" onClick={() => setisPoliciesAgreed(!isPoliciesAgreed)}>
                      I have read and agreed to the Privacy Policy and Terms of Use that I am at least 13 and have the authority to make this appointment
                    </label>
                  </div>
                  <div className="flex items-start gap-2 mb-4">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isMessagesAgreed}
                        onChange={(e) => setisMessagesAgreed(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        onClick={() => setisMessagesAgreed(!isMessagesAgreed)}
                        className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center ${
                          isMessagesAgreed ? 'bg-primary border-primary' : 'border-gray-300'
                        }`}
                      >
                        {isMessagesAgreed && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                    <label className="text-sm text-gray-700 cursor-pointer" onClick={() => setisMessagesAgreed(!isMessagesAgreed)}>
                      I agree to receive text messages from this practice and understand that message frequency and data rates may apply.
                    </label>
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
          disabled={!contactData.firstName || !contactData.lastName || !contactData.email || !contactData.phone || !isPoliciesAgreed || !isMessagesAgreed}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 text-sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepContactInfo;
