import React from 'react';
import { ArrowLeft, Stethoscope, Clock, LayoutGrid } from 'lucide-react';

const AppointmentDetails = ({ onBack, appointment }) => {
  // Mock appointment data (would normally come from props)
  const appointmentData = {
    patient: {
      name: 'JOSEPH PHILIP P6861',
      id: 'P6861',
      gender: 'Male',
      age: '24 Years'
    },
    doctor: 'Psy.AYSHA SULTHANA',
    time: '10:00 am - 11:00 am',
    date: '07 AUGUST 2025',
    category: 'Sanigha'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Card Container */}
      <div className="bg-white mx-4 mt-4 rounded-t-xl">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center">
            <button onClick={onBack} className="text-gray-600 hover:text-gray-800 mr-3">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-medium text-gray-900">Appointment Details</h1>
          </div>
        </div>

        {/* Content Area */}
        <div>
          {/* Patient Info */}
          <div className="p-4 flex items-center justify-between border-b">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                <Stethoscope className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h2 className="text-gray-900 font-medium">{appointmentData.patient.name}</h2>
                <p className="text-sm text-gray-600">{appointmentData.patient.gender}, {appointmentData.patient.age}</p>
              </div>
            </div>
            <span className="text-teal-600">{appointmentData.patient.id}</span>
          </div>

          {/* Appointment Details */}
          <div className="p-4 space-y-6">
            {/* Doctor */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                <Stethoscope className="h-5 w-5 text-teal-600" />
              </div>
              <span className="text-gray-900">{appointmentData.doctor}</span>
            </div>

            {/* Time */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <span className="text-gray-900">{appointmentData.time}</span>
                <span className="text-teal-600 ml-4">{appointmentData.date}</span>
              </div>
            </div>

            {/* Category */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                <LayoutGrid className="h-5 w-5 text-teal-600" />
              </div>
              <span className="text-gray-900">{appointmentData.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Check Out Button */}
      <div className="fixed bottom-[72px] left-0 right-0">
        <button 
          className="w-full bg-[#00A099] text-white h-[56px] text-lg"
          onClick={() => {
            // Handle check out logic
            console.log('Checking out appointment');
          }}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetails;