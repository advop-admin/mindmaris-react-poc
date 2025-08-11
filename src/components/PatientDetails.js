import React, { useState } from 'react';
import { Calendar, Phone, Mail, MoreVertical, ArrowLeft, Plus } from 'lucide-react';

const PatientDetails = ({ onBack, onAddAppointment }) => {
  const [showOptions, setShowOptions] = useState(false);

  // Mock patient data
  const patient = {
    name: 'Libiraj',
    id: 'P6895',
    rating: 'A+',
    appointments: [
      {
        date: 'WED, 6 AUGUST 2025',
        status: 'YESTERDAY',
        sessions: [
          {
            doctor: 'Mr.SAM',
            time: '12:00 PM - 01:00 PM',
            estimatedAmount: 2000.00,
            procedures: [
              { name: 'CLINICAL ASSESMENT', amount: 2000.00 }
            ]
          }
        ]
      },
      {
        date: 'MON, 4 AUGUST 2025',
        sessions: [
          {
            doctor: 'Mr.SAM',
            time: '11:46 AM - 12:46 PM'
          },
          {
            doctor: 'Psy.SHABNA MANAF',
            time: '11:42 AM - 12:42 PM'
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-indigo-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className="p-1">
              <ArrowLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1">
              <Phone className="h-6 w-6" />
            </button>
            <button className="p-1">
              <Mail className="h-6 w-6" />
            </button>
            <button 
              className="p-1 relative"
              onClick={() => setShowOptions(!showOptions)}
            >
              <MoreVertical className="h-6 w-6" />
              {showOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Edit Patient
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Delete Patient
                  </button>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Patient Info */}
      <div className="flex items-center p-4 bg-white border-b">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
        <div className="ml-4 flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">{patient.name}</h1>
            <div className="text-right">
              <span className="text-gray-600">{patient.id}</span>
              <div className="text-green-600 font-semibold">{patient.rating}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="pb-20">
        {patient.appointments.map((appointmentGroup, groupIndex) => (
          <div key={groupIndex} className="mb-4">
            <div className="px-4 py-2 bg-gray-100">
              <div className="text-gray-600">
                {appointmentGroup.date}
                {appointmentGroup.status && (
                  <span className="text-gray-500 ml-2">{appointmentGroup.status}</span>
                )}
              </div>
            </div>
            {appointmentGroup.sessions.map((session, sessionIndex) => (
              <div key={sessionIndex} className="bg-white p-4 border-b">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="font-medium">{session.doctor}</span>
                  <span className="ml-auto text-gray-600">{session.time}</span>
                </div>
                {session.estimatedAmount && (
                  <div className="mt-4">
                    <div className="flex justify-between items-center text-gray-600 mb-2">
                      <span>Estimated Amount:</span>
                      <span>₹ {session.estimatedAmount.toFixed(2)}</span>
                    </div>
                    {session.procedures.map((procedure, index) => (
                      <div key={index} className="flex justify-between items-center border-t py-2">
                        <span>{procedure.name}</span>
                        <span>₹ {procedure.amount.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Add Appointment FAB */}
      <button
        onClick={onAddAppointment}
        className="fixed bottom-20 right-4 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
      >
        <Plus className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default PatientDetails;