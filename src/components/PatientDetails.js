import React from 'react';
import { Calendar, ArrowLeft, Plus } from 'lucide-react';
import mockData from '../data/mockData.json';

const PatientDetails = ({ onBack, onAddAppointment, isManagement = false, patientId }) => {
  
  // Get patient data based on patientId
  const patient = mockData.patients.find(p => p.id === patientId) || mockData.patients[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <div className="flex items-center">
          <button onClick={onBack} className="text-gray-600 hover:text-gray-800">
            <ArrowLeft className="h-5 w-5" />
          </button>
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
        {patient.appointmentHistory.map((appointmentGroup, groupIndex) => (
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
                {isManagement && session.estimatedAmount && (
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

      {/* Add Appointment FAB - Only visible for management */}
      {isManagement && (
        <button
          onClick={onAddAppointment}
          className="fixed bottom-20 right-4 w-14 h-14 bg-[#00A099] rounded-full flex items-center justify-center shadow-lg hover:bg-[#008C86] transition-colors z-50"
        >
          <Plus className="h-6 w-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default PatientDetails;