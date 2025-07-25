import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";
import { useState } from "react";

const StepInsuranceInfo = ({ prevStep, formData, setFormData, onComplete }: any) => {
  const [insuranceData, setInsuranceData] = useState({
    hasInsurance: formData.hasInsurance || 'yes',
    insuranceProvider: formData.insuranceProvider || '',
    memberId: formData.memberId || '',
    groupNumber: formData.groupNumber || '',
    ...formData
  });
  const provider = formData.provider;

    const insurenceCompanies = [
    {
      id: 1,
      name: "Assurant",
      logo: "/Images/Insurance companies/1771832.webp",
      alt: "Assurant Insurance"
    },
    {
      id: 2,
      name: "UnitedHealthcare",
      logo: "/Images/Insurance companies/1771881.webp",
      alt: "UnitedHealthcare Insurance"
    },
    {
      id: 3,
      name: "Aetna",
      logo: "/Images/Insurance companies/1772502.webp",
      alt: "Aetna Insurance"
    },
    {
      id: 4,
      name: "AIG",
      logo: "/Images/Insurance companies/1772499.webp",
      alt: "AIG Insurance"
    },
    {
      id: 5,
      name: "Blue Cross Blue Shield",
      logo: "/Images/Insurance companies/1773057.webp",
      alt: "Blue Cross Blue Shield Insurance"
    },
    {
      id: 6,
      name: "Cigna",
      logo: "/Images/Insurance companies/1858337.webp",
      alt: "Cigna Healthcare"
    },
    {
      id: 7,
      name: "Humana",
      logo: "/Images/Insurance companies/2206449.webp",
      alt: "Humana Insurance"
    },
    {
      id: 8,
      name: "MetLife",
      logo: "/Images/Insurance companies/2761735.webp",
      alt: "MetLife Insurance"
    }
  ];

  const handleChange = (field: string, value: string) => {
    setInsuranceData({ ...insuranceData, [field]: value });
  };

  const handleSubmit = () => {
    setFormData({ ...formData, ...insuranceData });
    onComplete();
  };

  return (
    <div className="mt-4">
        <div className="flex items-start gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <img
                            src="/Images/doctor_9439268.png"
                            alt="Provider Avatar"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
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
        <div className="flex items-center gap-1 md:gap-4 mb-4 sm:mb-6 mt-3 w-full overflow-x-auto pb-2 sm:pb-0">
  {/* Step 1 */}
  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-secondary text-white text-xs sm:text-sm font-medium">
      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
    </div>
    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Appointment details</span>
  </div>

  <div className="flex-1 h-1 bg-primary min-w-[20px]"></div>

  {/* Step 2 */}
  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-secondary text-white text-xs sm:text-sm font-medium">
      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
    </div>
    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Contact info</span>
  </div>

  <div className="flex-1 h-1 bg-primary min-w-[20px]"></div>

  {/* Step 3 */}
  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-primary text-white text-xs sm:text-sm font-medium">
      3
    </div>
    <span className="text-xs sm:text-sm text-gray-900 whitespace-nowrap">Insurance info</span>
  </div>
</div>
      <h3 className="text-base sm:text-lg font-medium mb-4">Insurance info</h3>
      
      <div className="space-y-4 overflow-y-auto max-h-[35vh] sm:max-h-[40vh]">
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
              <span className="text-sm">Yes</span>
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
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>

        {insuranceData.hasInsurance === 'yes' && (
          <>
            <div>
            <label className="block text-sm text-gray-600 mb-1">Insurance</label>
            <select
              value={insuranceData.insuranceProvider}
              onChange={(e) => handleChange('insuranceProvider', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">Select Insurance</option>
              {insurenceCompanies.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
              
            </select>
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
      <div className="flex justify-between mt-6 sm:mt-8">
        <Button 
          variant="outline" 
          onClick={prevStep}
          className="px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium"
        >
          Back
        </Button>
        <Button 
          onClick={handleSubmit}
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium"
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default StepInsuranceInfo;