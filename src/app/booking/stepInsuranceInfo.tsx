import { Button } from "@/components/ui/button";
import { useState } from "react";

const StepInsuranceInfo = ({ prevStep, formData, setFormData, onComplete }: any) => {
  const [insuranceData, setInsuranceData] = useState({
    hasInsurance: formData.hasInsurance || 'yes',
    insuranceProvider: formData.insuranceProvider || '',
    memberId: formData.memberId || '',
    groupNumber: formData.groupNumber || '',
    ...formData
  });

  const handleChange = (field: string, value: string) => {
    setInsuranceData({ ...insuranceData, [field]: value });
  };

  const handleSubmit = () => {
    setFormData({ ...formData, ...insuranceData });
    onComplete();
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium mb-4">Insurance info</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">Do you have insurance?</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasInsurance"
                value="yes"
                checked={insuranceData.hasInsurance === 'yes'}
                onChange={(e) => handleChange('hasInsurance', e.target.value)}
                className="mr-2 text-teal-600"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasInsurance"
                value="no"
                checked={insuranceData.hasInsurance === 'no'}
                onChange={(e) => handleChange('hasInsurance', e.target.value)}
                className="mr-2 text-teal-600"
              />
              No
            </label>
          </div>
        </div>

        {insuranceData.hasInsurance === 'yes' && (
          <>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Insurance Provider</label>
              <input
                type="text"
                value={insuranceData.insuranceProvider}
                onChange={(e) => handleChange('insuranceProvider', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                placeholder="e.g., Blue Cross Blue Shield"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Member ID</label>
              <input
                type="text"
                value={insuranceData.memberId}
                onChange={(e) => handleChange('memberId', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Group Number (optional)</label>
              <input
                type="text"
                value={insuranceData.groupNumber}
                onChange={(e) => handleChange('groupNumber', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </>
        )}
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
          onClick={handleSubmit}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 text-sm"
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default StepInsuranceInfo;