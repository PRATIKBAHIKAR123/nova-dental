import { Clock } from 'lucide-react';
import React from 'react';

const RequestSubmitted = ({  formData }: any) => {
     
        const provider = formData.provider;
        return(
    <div className="mt-4">
        <h3 className="text-base sm:text-lg font-medium mb-4">Appointment Request Submitted</h3>
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
        <p className='my-3 text-sm sm:text-base'>Thank you for your request. We will reach out promptly to confirm and finalize your appointment</p>
        <div className="flex-1 w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow">
        <iframe
          src={provider!.mapUrl}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </div>
    </div>
    )
}


export default RequestSubmitted;