import React, { useState, useEffect } from 'react';
import { Calendar, FileText, User, Bell, Clock, CheckCircle, Upload, Home, X, LogOut, ArrowLeft, Stethoscope, LayoutGrid } from 'lucide-react';

const PsychologistApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const [selectedDate, setSelectedDate] = useState(8);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);


  
  // Load appointments from localStorage or use default data
  const getInitialAppointments = () => {
    const savedAppointments = localStorage.getItem('mindmaris_appointments');
    if (savedAppointments) {
      return JSON.parse(savedAppointments);
    }
    return [
    { 
      id: 1, 
      patientName: 'Sarah Johnson', 
      time: '09:00 AM', 
      status: 'pending', 
      type: 'Initial Consultation', 
      notes: 'Patient experiencing anxiety symptoms',
      date: '2025-01-08',
      patientDetails: {
        age: 28,
        phone: '+1-555-0123',
        email: 'sarah@email.com',
        condition: 'Anxiety Disorder',
        lastVisit: '2025-01-08'
      }
    },
    { 
      id: 2, 
      patientName: 'Michael Chen', 
      time: '10:30 AM', 
      status: 'completed', 
      type: 'Follow-up', 
      notes: 'Depression treatment progress',
      date: '2025-01-08',
      patientDetails: {
        age: 35,
        phone: '+1-555-0124',
        email: 'michael@email.com',
        condition: 'Depression',
        lastVisit: '2025-01-08'
      }
    },
    { 
      id: 3, 
      patientName: 'Emily Davis', 
      time: '02:00 PM', 
      status: 'pending', 
      type: 'Therapy Session', 
      notes: 'PTSD therapy session',
      date: '2025-01-08',
      patientDetails: {
        age: 42,
        phone: '+1-555-0125',
        email: 'emily@email.com',
        condition: 'PTSD',
        lastVisit: '2025-01-07'
      }
    },
    { 
      id: 4, 
      patientName: 'James Wilson', 
      time: '03:30 PM', 
      status: 'pending', 
      type: 'Assessment', 
      notes: 'Bipolar disorder assessment',
      date: '2025-01-08',
      patientDetails: {
        age: 31,
        phone: '+1-555-0126',
        email: 'james@email.com',
        condition: 'Bipolar Disorder',
        lastVisit: '2025-01-06'
      }
    },
    { 
      id: 5, 
      patientName: 'Lisa Anderson', 
      time: '11:00 AM', 
      status: 'pending', 
      type: 'Initial Consultation', 
      notes: 'New patient consultation',
      date: '2025-01-09',
      patientDetails: {
        age: 29,
        phone: '+1-555-0127',
        email: 'lisa@email.com',
        condition: 'Stress Management',
        lastVisit: '2025-01-09'
      }
    },
    { 
      id: 6, 
      patientName: 'David Brown', 
      time: '01:30 PM', 
      status: 'pending', 
      type: 'Therapy Session', 
      notes: 'Anxiety therapy session',
      date: '2025-01-09',
      patientDetails: {
        age: 38,
        phone: '+1-555-0128',
        email: 'david@email.com',
        condition: 'Anxiety Disorder',
        lastVisit: '2025-01-09'
      }
    },
    { 
      id: 7, 
      patientName: 'Maria Garcia', 
      time: '10:00 AM', 
      status: 'completed', 
      type: 'Follow-up', 
      notes: 'Depression follow-up',
      date: '2025-01-10',
      patientDetails: {
        age: 45,
        phone: '+1-555-0129',
        email: 'maria@email.com',
        condition: 'Depression',
        lastVisit: '2025-01-10'
      }
    }
  ];
  };

  const [appointments, setAppointments] = useState(getInitialAppointments());

  // Save appointments to localStorage whenever they change
  const saveAppointmentsToStorage = (newAppointments) => {
    localStorage.setItem('mindmaris_appointments', JSON.stringify(newAppointments));
  };

  // Load reports from localStorage or use default data
  const getInitialReports = () => {
    const savedReports = localStorage.getItem('mindmaris_reports');
    if (savedReports) {
      return JSON.parse(savedReports);
    }
    return [
    { id: 1, title: 'Assessment Report #1', patient: 'Sarah Johnson', date: 'Jan 7, 2025', status: 'completed', content: 'Initial assessment completed. Patient shows signs of anxiety disorder.' },
    { id: 2, title: 'Assessment Report #2', patient: 'Sarah Johnson', date: 'Jan 6, 2025', status: 'completed', content: 'Follow-up session. Patient responding well to treatment.' },
    { id: 3, title: 'Assessment Report #3', patient: 'Sarah Johnson', date: 'Jan 5, 2025', status: 'completed', content: 'Therapy session notes and progress assessment.' }
  ];
  };

  const [reports, setReports] = useState(getInitialReports());

  // Save reports to localStorage whenever they change
  const saveReportsToStorage = (newReports) => {
    localStorage.setItem('mindmaris_reports', JSON.stringify(newReports));
  };

  const [formData, setFormData] = useState({
    reportTitle: '',
    reportNotes: '',
    selectedPatient: '',
    appointmentNotes: ''
  });

  const [profile] = useState({
    name: 'Dr. Sarah Smith',
    title: 'Clinical Counsellor',
    email: 'dr.smith@mindmaris.com',
    phone: '+1 (555) 123-4567',
    department: 'Mental Health Counselling',
    specialization: 'Anxiety & Depression',
    experience: '8 years',
    education: 'Ph.D. Clinical Psychology'
  });

  const showAlert = (message) => {
    setAlertMessage(message);
    setShowAlertModal(true);
  };

  const markAppointmentComplete = (id) => {
    const updatedAppointments = appointments.map(apt => 
      apt.id === id ? { ...apt, status: 'completed' } : apt
    );
    setAppointments(updatedAppointments);
    saveAppointmentsToStorage(updatedAppointments);
    // Update selectedAppointment to reflect the new status
    setSelectedAppointment(prev => 
      prev && prev.id === id ? { ...prev, status: 'completed' } : prev
    );
    showAlert('Appointment completed successfully!');
  };



  const openAppointmentDetail = (appointment) => {
    setSelectedAppointment(appointment);
    setCurrentPage('appointment-detail');
  };

  const openReportModal = (appointment) => {
    setSelectedAppointment(appointment);
    setShowReportModal(true);
    setFormData({
      reportTitle: `Report for ${appointment.patientName}`,
      reportNotes: '',
      selectedPatient: appointment.patientName,
      appointmentNotes: appointment.notes || ''
    });
  };

  const closeReportModal = () => {
    setShowReportModal(false);
    setSelectedAppointment(null);
    setFormData({
      reportTitle: '',
      reportNotes: '',
      selectedPatient: '',
      appointmentNotes: ''
    });
  };

  const submitReport = () => {
    if (formData.reportTitle && formData.reportNotes) {
      const newReport = {
        id: reports.length + 1,
        title: formData.reportTitle,
        patient: formData.selectedPatient,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: 'completed',
        content: formData.reportNotes
      };
      const updatedReports = [...reports, newReport];
      setReports(updatedReports);
      saveReportsToStorage(updatedReports);
      
      // Mark appointment as completed when report is submitted
      if (selectedAppointment && selectedAppointment.status === 'pending') {
        markAppointmentComplete(selectedAppointment.id);
      }
      
      closeReportModal();
      showAlert('Report submitted successfully!');
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    // Redirect to landing page
    window.location.href = '/';
  };



  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };



  const Dashboard = () => (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-white to-gray-50 text-gray-900 p-4 rounded-lg shadow-sm">
        <h1 className="text-xl font-bold text-teal-600">Good Morning, Dr. Smith</h1>
        <p className="text-gray-600">Wednesday, January 8, 2025</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
                          <div className="bg-teal-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{appointments.length}</p>
              <p className="text-sm text-gray-600">Today's Appointments</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {appointments.filter(apt => apt.status === 'completed').length}
              </p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
        </div>
        <div className="space-y-3 p-4">
          {appointments.slice(0, 3).map(appointment => (
            <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{appointment.patientName}</p>
                <p className="text-sm text-gray-600">{appointment.time} • {appointment.type}</p>
              </div>
              <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                {appointment.status}
              </span>
                <button
                  onClick={() => openAppointmentDetail(appointment)}
                  className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700 transition-colors"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <button 
            onClick={() => setCurrentPage('schedule')}
            className="w-full text-teal-600 font-medium text-sm hover:bg-teal-50 py-2 rounded"
          >
            View All Appointments
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4">
        <button 
          onClick={() => setCurrentPage('schedule')}
          className="bg-white p-4 rounded-lg shadow-sm border text-left hover:bg-gray-50 transition-colors"
        >
          <Calendar className="h-6 w-6 text-teal-600 mb-2" />
          <p className="font-medium text-gray-900">Manage Appointments</p>
          <p className="text-sm text-gray-600">View, start, complete & report</p>
        </button>
      </div>
    </div>
  );

  const Schedule = () => {
    // Convert selected date to proper format for filtering
    const getSelectedDateString = () => {
      const currentYear = 2025;
      const currentMonth = 1; // January
      return `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${selectedDate.toString().padStart(2, '0')}`;
    };

    // Filter appointments for selected date
    const filteredAppointments = appointments.filter(appointment => 
      appointment.date === getSelectedDateString()
    );

    return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Schedule</h1>
      </div>

      {/* Calendar Header */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="grid grid-cols-7 gap-1 text-center mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-sm font-medium text-gray-600 py-2">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
            {[6, 7, 8, 9, 10, 11, 12].map(date => {
              const dateString = `2025-01-${date.toString().padStart(2, '0')}`;
              const appointmentsForDate = appointments.filter(apt => apt.date === dateString);
              const hasAppointments = appointmentsForDate.length > 0;
              
              return (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`py-2 text-sm rounded-lg transition-colors ${
                    date === selectedDate 
                      ? 'bg-teal-600 text-white font-bold' 
                      : hasAppointments 
                        ? 'text-teal-800 hover:bg-gray-100 font-bold' 
                        : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {date}
            </button>
              );
            })}
          </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-3">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map(appointment => (
          <div key={appointment.id} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{appointment.patientName}</h3>
                <p className="text-sm text-gray-600 mt-1">{appointment.time}</p>
                    <p className="text-sm text-teal-600 mt-1">{appointment.type}</p>
                    {appointment.notes && (
                      <p className="text-sm text-gray-500 mt-1">Notes: {appointment.notes}</p>
                    )}
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
                  <button
                      onClick={() => openAppointmentDetail(appointment)}
                      className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700 transition-colors"
                  >
                      Details
                  </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Appointments</h3>
              <p className="text-gray-600">No appointments scheduled for January {selectedDate}, 2025</p>
            </div>
          )}
      </div>
    </div>
  );
  };



  const AppointmentDetail = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center">
          <button 
            onClick={() => setCurrentPage('schedule')}
            className="text-gray-600 hover:text-gray-800 mr-3"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-medium text-gray-900">Appointment Details</h1>
        </div>
      </div>

      {selectedAppointment && (
        <div className="bg-white mx-4 mt-4 rounded-t-xl">
          {/* Patient Info */}
          <div className="p-4 flex items-center justify-between border-b">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                <Stethoscope className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h2 className="text-gray-900 font-medium">{selectedAppointment.patientName}</h2>
                <p className="text-sm text-gray-600">
                  {selectedAppointment.patientDetails.gender}, {selectedAppointment.patientDetails.age} Years
                </p>
              </div>
            </div>
            <span className="text-teal-600">P{selectedAppointment.id}</span>
          </div>

          {/* Appointment Details */}
          <div className="p-4 space-y-6">
            {/* Doctor */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                <Stethoscope className="h-5 w-5 text-teal-600" />
              </div>
              <span className="text-gray-900">{selectedAppointment.doctor || "Dr. Sarah Smith"}</span>
            </div>

            {/* Time */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <span className="text-gray-900">{selectedAppointment.time}</span>
                <span className="text-teal-600 ml-4">{selectedAppointment.date}</span>
              </div>
            </div>

            {/* Category */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                <LayoutGrid className="h-5 w-5 text-teal-600" />
              </div>
              <span className="text-gray-900">{selectedAppointment.category || selectedAppointment.type}</span>
            </div>

            {/* Procedures */}
            {selectedAppointment.procedures && (
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                  <FileText className="h-5 w-5 text-teal-600" />
                </div>
                <span className="text-gray-900">{selectedAppointment.procedures}</span>
              </div>
            )}

            {/* Notes */}
            {selectedAppointment.notes && (
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                  <FileText className="h-5 w-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-600 block mb-1">Notes</span>
                  <p className="text-gray-900">{selectedAppointment.notes}</p>
                </div>
              </div>
            )}

            {/* Notification Preferences */}
            {(selectedAppointment.notifySMS || selectedAppointment.notifyEmail) && (
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                  <Bell className="h-5 w-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-600 block mb-1">Notifications</span>
                  <div className="space-x-3">
                    {selectedAppointment.notifySMS && (
                      <span className="text-gray-900">SMS</span>
                    )}
                    {selectedAppointment.notifyEmail && (
                      <span className="text-gray-900">Email</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#E6F6F4] rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <span className="text-sm text-gray-600 block mb-1">Contact</span>
                <p className="text-gray-900">{selectedAppointment.patientDetails?.phone}</p>
                <p className="text-gray-900">{selectedAppointment.patientDetails?.email}</p>
              </div>
            </div>
          </div>

          {/* Check Out Button */}
          <div className="fixed bottom-[72px] left-0 right-0">
            <button 
              onClick={() => markAppointmentComplete(selectedAppointment.id)}
              className="w-full bg-[#00A099] text-white h-[56px] text-lg font-medium"
              disabled={selectedAppointment.status === 'completed'}
            >
              {selectedAppointment.status === 'completed' ? 'Completed' : 'Check Out'}
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const Profile = () => (
    <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Profile</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-teal-100 p-3 rounded-full">
            <User className="h-8 w-8 text-teal-600" />
          </div>
          <div>
            <h2 className="font-medium text-gray-900">{profile.name}</h2>
            <p className="text-sm text-gray-600">{profile.title}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <span className="text-sm text-gray-900">{profile.email}</span>
          </div>
          
          <div className="flex justify-between items-center py-3">
            <span className="text-sm font-medium text-gray-700">Phone</span>
            <span className="text-sm text-gray-900">{profile.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const handleNotificationClick = () => {
    setShowNotificationDropdown((prev) => !prev);
  };

  useEffect(() => {
    if (!showNotificationDropdown) return;
    function handleClick(e) {
      if (!document.getElementById('notification-dropdown')?.contains(e.target) &&
          !document.getElementById('notification-bell')?.contains(e.target)) {
        setShowNotificationDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showNotificationDropdown]);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'schedule': return <Schedule />;
      case 'appointment-detail': return <AppointmentDetail />;
      case 'profile': return <Profile />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Top Header */}
      <div className="bg-white text-gray-900 p-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-3">
            <div className="w-8 h-8">
              <img src="/logo.svg" alt="Mindmaris Logo" className="w-full h-full" />
            </div>
            <span className="font-semibold text-gray-900">Mindmaris Counsellors India</span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            id="notification-bell"
            className="hover:bg-teal-50 p-1 rounded transition-colors relative"
            onClick={handleNotificationClick}
          >
            <Bell className="h-5 w-5" />
          </button>
          {showNotificationDropdown && (
            <div
              id="notification-dropdown"
              className="fixed top-20 right-4 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-sm border border-gray-100 z-50 transform transition-all duration-200 ease-out"
            >
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900 text-sm">Notifications</h3>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">3</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-start space-x-2 p-2 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                      <Clock className="h-3 w-3 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900">Appointment Reminder</p>
                      <p className="text-xs text-gray-500">Your 9:00 AM appointment is coming up soon.</p>
                      <p className="text-xs text-gray-400">2 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 p-2 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900">Session Completed</p>
                      <p className="text-xs text-gray-500">James Wilson's session marked as complete.</p>
                      <p className="text-xs text-gray-400">5 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 p-2 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-50 rounded flex items-center justify-center">
                      <FileText className="h-3 w-3 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900">Report Uploaded</p>
                      <p className="text-xs text-gray-500">New report uploaded for Sarah Johnson.</p>
                      <p className="text-xs text-gray-400">10 minutes ago</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-50">
                  <button className="w-full text-center text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors">
                    View All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-20">
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          {[
            { id: 'dashboard', icon: Home, label: 'Home' },
            { id: 'schedule', icon: Calendar, label: 'Schedule' },
            { id: 'profile', icon: User, label: 'Profile' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex flex-col items-center py-2 px-3 transition-colors ${
                currentPage === id ? 'text-teal-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
          <div className="bg-white rounded-lg w-full max-w-sm mx-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white">
              <h2 className="text-lg font-semibold">Submit Report</h2>
              <button
                onClick={() => {
                  setShowReportModal(false);
                  setSelectedAppointment(null);
                }} 
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name</label>
            <input
              type="text"
                  value={formData.selectedPatient}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload File</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
            <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        showAlert(`File "${file.name}" selected for upload`);
                      }
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Remarks</label>
                <textarea
                  placeholder="Enter your remarks and observations..."
                  rows={3}
                  value={formData.reportNotes}
                  onChange={(e) => setFormData(prev => ({ ...prev, reportNotes: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />
              </div>
              
              <div className="flex space-x-3 pt-2">
              <button
                  onClick={() => {
                    setShowReportModal(false);
                    setSelectedAppointment(null);
                  }}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                  onClick={() => {
                    submitReport();
                    setShowReportModal(false);
                    setSelectedAppointment(null);
                  }}
                  className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Submit Report
              </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alert Modal */}
      {showAlertModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-sm mx-4 p-6 text-center">
            <div className="mb-4">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">{alertMessage}</p>
            <button
              onClick={() => setShowAlertModal(false)}
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-sm mx-auto p-6">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Confirm Logout</h3>
              <p className="text-gray-600">Are you sure you want to logout?</p>
              <div className="flex space-x-3 pt-2">
              <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                  onClick={confirmLogout}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                  Logout
              </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PsychologistApp; 