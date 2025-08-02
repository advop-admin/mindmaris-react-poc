import React, { useState } from 'react';
import { Calendar, Users, FileText, User, Search, Plus, Download, BarChart3, Settings, X, LogOut } from 'lucide-react';

const ManagementApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);


  
  const [appointments, setAppointments] = useState([
      { id: 1, patientName: 'Sarah Johnson', doctor: 'Dr. Smith', time: '09:00 AM', status: 'pending', type: 'Initial Consultation' },
  { id: 2, patientName: 'Michael Chen', doctor: 'Dr. Wilson', time: '10:30 AM', status: 'completed', type: 'Follow-up' },
  { id: 3, patientName: 'Emily Davis', doctor: 'Dr. Brown', time: '02:00 PM', status: 'pending', type: 'Therapy Session' },
  { id: 4, patientName: 'James Wilson', doctor: 'Dr. Smith', time: '03:30 PM', status: 'pending', type: 'Assessment' }
  ]);

  const [patients, setPatients] = useState([
    { id: 1, name: 'Sarah Johnson', age: 28, phone: '+1-555-0123', email: 'sarah@email.com', condition: 'Anxiety Disorder' },
    { id: 2, name: 'Michael Chen', age: 35, phone: '+1-555-0124', email: 'michael@email.com', condition: 'Depression' },
    { id: 3, name: 'Emily Davis', age: 42, phone: '+1-555-0125', email: 'emily@email.com', condition: 'PTSD' },
    { id: 4, name: 'James Wilson', age: 31, phone: '+1-555-0126', email: 'james@email.com', condition: 'Bipolar Disorder' }
  ]);

  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. Sarah Smith', specialization: 'Clinical Psychology', availability: 'Mon-Fri 9AM-5PM', patients: 12 },
    { id: 2, name: 'Dr. John Wilson', specialization: 'Psychiatry', availability: 'Mon-Fri 10AM-6PM', patients: 8 },
    { id: 3, name: 'Dr. Maria Brown', specialization: 'Child Psychology', availability: 'Mon-Thu 9AM-4PM', patients: 15 },
    { id: 4, name: 'Dr. David Lee', specialization: 'Addiction Therapy', availability: 'Mon-Fri 2PM-8PM', patients: 6 }
  ]);

  const [reports] = useState([
    { id: 1, title: 'Assessment Report #1', patient: 'Sarah Johnson', doctor: 'Dr. Smith', date: 'Jan 7, 2025', status: 'completed' },
    { id: 2, title: 'Assessment Report #2', patient: 'Michael Chen', doctor: 'Dr. Wilson', date: 'Jan 6, 2025', status: 'completed' },
    { id: 3, title: 'Assessment Report #3', patient: 'Emily Davis', doctor: 'Dr. Brown', date: 'Jan 5, 2025', status: 'pending' }
  ]);

  const [earnings] = useState({
    weekly: {
      total: 12500,
      prime: 8000,
      instant: 4500,
      connections: 45,
      completed: 42
    },
    monthly: {
      total: 52000,
      prime: 35000,
      instant: 17000,
      connections: 180,
      completed: 165
    }
  });

  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    patientPhone: '',
    patientEmail: '',
    selectedDoctor: '',
    appointmentTime: '',
    appointmentType: '',
    reportTitle: '',
    reportNotes: '',
    selectedPatient: '',
    selectedDoctorForReport: ''
  });

  const [profile] = useState({
    name: 'Centre Admin',
    title: 'Centre Management',
    email: 'admin@mindmaris.com',
    phone: '+1 (555) 987-6543',
    department: 'Administration'
  });

  const openModal = (type) => {
    setModalType(type);
    setShowAddModal(true);
    setFormData({
      patientName: '',
      patientAge: '',
      patientPhone: '',
      patientEmail: '',
      selectedDoctor: '',
      appointmentTime: '',
      appointmentType: '',
      reportTitle: '',
      reportNotes: '',
      selectedPatient: '',
      selectedDoctorForReport: ''
    });
  };

  const closeModal = () => {
    setShowAddModal(false);
    setModalType('');
    setEditingItem(null);
    setFormData({
      patientName: '',
      patientAge: '',
      patientPhone: '',
      patientEmail: '',
      patientCondition: '',
      selectedDoctor: '',
      appointmentTime: '',
      appointmentType: '',
      doctorName: '',
      doctorSpecialization: '',
      doctorAvailability: ''
    });
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addPatient = () => {
    if (formData.patientName && formData.patientAge && formData.patientPhone) {
      if (editingItem) {
        // Update existing patient
        setPatients(prev => prev.map(patient => 
          patient.id === editingItem.id 
            ? { ...patient, name: formData.patientName, age: parseInt(formData.patientAge), phone: formData.patientPhone, email: formData.patientEmail || '', condition: formData.patientCondition || 'To be assessed' }
            : patient
        ));
        setEditingItem(null);
      } else {
        // Add new patient
        const newPatient = {
          id: patients.length + 1,
          name: formData.patientName,
          age: parseInt(formData.patientAge),
          phone: formData.patientPhone,
          email: formData.patientEmail || '',
          condition: formData.patientCondition || 'To be assessed'
        };
        setPatients(prev => [...prev, newPatient]);
      }
      closeModal();
    }
  };

  const addAppointment = () => {
    if (formData.patientName && formData.selectedDoctor && formData.appointmentTime) {
      if (editingItem) {
        // Update existing appointment
        setAppointments(prev => prev.map(appointment => 
          appointment.id === editingItem.id 
            ? { ...appointment, patientName: formData.patientName, doctor: formData.selectedDoctor, time: formData.appointmentTime, type: formData.appointmentType || 'Consultation' }
            : appointment
        ));
        setEditingItem(null);
      } else {
        // Add new appointment
        const newAppointment = {
          id: appointments.length + 1,
          patientName: formData.patientName,
          doctor: formData.selectedDoctor,
          time: formData.appointmentTime,
          status: 'pending',
          type: formData.appointmentType || 'Consultation'
        };
        setAppointments(prev => [...prev, newAppointment]);
      }
      closeModal();
    }
  };

  const addDoctor = () => {
    if (formData.doctorName && formData.doctorSpecialization && formData.doctorAvailability) {
      if (editingItem) {
        // Update existing doctor
        setDoctors(prev => prev.map(doctor => 
          doctor.id === editingItem.id 
            ? { ...doctor, name: formData.doctorName, specialization: formData.doctorSpecialization, availability: formData.doctorAvailability }
            : doctor
        ));
        setEditingItem(null);
      } else {
        // Add new doctor
        const newDoctor = {
          id: doctors.length + 1,
          name: formData.doctorName,
          specialization: formData.doctorSpecialization,
          availability: formData.doctorAvailability,
          patients: 0
        };
        setDoctors(prev => [...prev, newDoctor]);
      }
      closeModal();
    }
  };

  const editPatient = (patient) => {
    setEditingItem(patient);
    setFormData({
      patientName: patient.name,
      patientAge: patient.age.toString(),
      patientPhone: patient.phone,
      patientEmail: patient.email || '',
      patientCondition: patient.condition || '',
      selectedDoctor: '',
      appointmentTime: '',
      appointmentType: ''
    });
    setModalType('patient');
    setShowAddModal(true);
  };

  const editDoctor = (doctor) => {
    setEditingItem(doctor);
    setFormData({
      doctorName: doctor.name,
      doctorSpecialization: doctor.specialization,
      doctorAvailability: doctor.availability,
      patientName: '',
      patientAge: '',
      patientPhone: '',
      patientEmail: '',
      patientCondition: '',
      selectedDoctor: '',
      appointmentTime: '',
      appointmentType: ''
    });
    setModalType('doctor');
    setShowAddModal(true);
  };

  const editAppointment = (appointment) => {
    setEditingItem(appointment);
    setFormData({
      patientName: appointment.patientName,
      selectedDoctor: appointment.doctor,
      appointmentTime: appointment.time,
      appointmentType: appointment.type,
      doctorName: '',
      doctorSpecialization: '',
      doctorAvailability: ''
    });
    setModalType('appointment');
    setShowAddModal(true);
  };

  const downloadReport = (reportId) => {
    // Simulate PDF download
    alert(`Downloading report ${reportId} as PDF...`);
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const Modal = ({ title, children, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-sm mx-auto max-h-[85vh] overflow-y-auto">
        <div className="sticky top-0 bg-white flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose || closeModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-white to-gray-50 text-gray-900 p-4 rounded-lg shadow-sm">
        <h1 className="text-xl font-bold text-teal-600">Hospital Management Dashboard</h1>
        <p className="text-gray-600">Wednesday, January 8, 2025</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="bg-teal-100 p-2 rounded-full">
              <Calendar className="h-5 w-5 text-teal-600" />
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
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{patients.length}</p>
              <p className="text-sm text-gray-600">Total Patients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Earnings */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Weekly Earnings</h2>
        </div>
        <div className="p-4 text-center">
          <p className="text-3xl font-bold text-green-600">₹{earnings.weekly.total.toLocaleString()}</p>
          <p className="text-sm text-gray-600">Total Earnings</p>
        </div>
      </div>

      {/* Doctor Statistics */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Doctor Statistics</h2>
        </div>
        <div className="p-4 space-y-3">
          {doctors.slice(0, 3).map(doctor => (
            <div key={doctor.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{doctor.name}</p>
                <p className="text-sm text-gray-600">{doctor.specialization}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-teal-600">{doctor.patients}</p>
                <p className="text-xs text-gray-600">Patients</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <button 
            onClick={() => setCurrentPage('doctors')}
            className="w-full text-teal-600 font-medium text-sm hover:bg-teal-50 py-2 rounded"
          >
            View All Doctors
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setCurrentPage('patients')}
          className="bg-white p-4 rounded-lg shadow-sm border text-left hover:bg-gray-50 transition-colors"
        >
          <Users className="h-6 w-6 text-teal-600 mb-2" />
          <p className="font-medium text-gray-900">Patient Management</p>
          <p className="text-sm text-gray-600">Add & manage patients</p>
        </button>
        
        <button 
          onClick={() => setCurrentPage('appointments')}
          className="bg-white p-4 rounded-lg shadow-sm border text-left hover:bg-gray-50 transition-colors"
        >
          <Calendar className="h-6 w-6 text-teal-600 mb-2" />
          <p className="font-medium text-gray-900">Appointments</p>
          <p className="text-sm text-gray-600">Schedule & manage</p>
        </button>
        
        <button 
          onClick={() => setCurrentPage('doctors')}
          className="bg-white p-4 rounded-lg shadow-sm border text-left hover:bg-gray-50 transition-colors"
        >
          <User className="h-6 w-6 text-teal-600 mb-2" />
          <p className="font-medium text-gray-900">Doctor Management</p>
          <p className="text-sm text-gray-600">Manage doctors & schedules</p>
        </button>
        
        <button 
          onClick={() => setCurrentPage('reports')}
          className="bg-white p-4 rounded-lg shadow-sm border text-left hover:bg-gray-50 transition-colors"
        >
          <FileText className="h-6 w-6 text-teal-600 mb-2" />
          <p className="font-medium text-gray-900">Reports</p>
          <p className="text-sm text-gray-600">View & download reports</p>
        </button>
      </div>
    </div>
  );

  const Patients = () => (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Patient Management</h1>
        <button 
          onClick={() => openModal('patient')}
          className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>

      <div className="space-y-3">
        {filteredPatients.map(patient => (
          <div key={patient.id} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-teal-100 p-2 rounded-full">
                <User className="h-5 w-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{patient.name}</h3>
                <p className="text-sm text-gray-600">Age: {patient.age} • Phone: {patient.phone}</p>
                <p className="text-sm text-gray-600">Email: {patient.email}</p>
                <p className="text-sm text-teal-600 mt-1">Condition: {patient.condition}</p>
              </div>
              <button 
                onClick={() => editPatient(patient)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Appointments = () => (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Appointment Management</h1>
        <button 
          onClick={() => openModal('appointment')}
          className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-3">
        {appointments.map(appointment => (
          <div key={appointment.id} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{appointment.patientName}</h3>
                <p className="text-sm text-gray-600 mt-1">{appointment.time}</p>
                <p className="text-sm text-teal-600 mt-1">Doctor: {appointment.doctor}</p>
                <p className="text-sm text-gray-600 mt-1">Type: {appointment.type}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
                <button 
                  onClick={() => editAppointment(appointment)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Settings className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Doctors = () => (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Doctor Management</h1>
        <button 
          onClick={() => openModal('doctor')}
          className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-3">
        {doctors.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <User className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                <p className="text-sm text-gray-600">Specialization: {doctor.specialization}</p>
                <p className="text-sm text-gray-600">Availability: {doctor.availability}</p>
                <p className="text-sm text-teal-600 mt-1">Active Patients: {doctor.patients}</p>
              </div>
              <button 
                onClick={() => editDoctor(doctor)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Reports = () => (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Reports Management</h1>

      <div className="space-y-3">
        {reports.map(report => (
          <div key={report.id} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{report.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Patient: {report.patient}</p>
                <p className="text-sm text-teal-600 mt-1">Doctor: {report.doctor}</p>
                <p className="text-sm text-gray-600 mt-1">Date: {report.date}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
                <button
                  onClick={() => downloadReport(report.id)}
                  className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700 transition-colors flex items-center space-x-1"
                >
                  <Download className="h-3 w-3" />
                  <span>PDF</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Profile = () => (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Centre Admin Profile</h1>
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
          
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Phone</span>
            <span className="text-sm text-gray-900">{profile.phone}</span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Department</span>
            <span className="text-sm text-gray-900">{profile.department}</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Role</span>
            <span className="text-sm text-gray-900">Centre Administrator</span>
          </div>

          <div className="flex justify-between items-center py-3">
            <span className="text-sm font-medium text-gray-700">Access Level</span>
            <span className="text-sm text-gray-900">Full Access</span>
          </div>
        </div>
      </div>
    </div>
  );



  const handleLogout = () => {
    // Redirect to landing page
    window.location.href = '/';
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'patients': return <Patients />;
      case 'appointments': return <Appointments />;
      case 'doctors': return <Doctors />;
      case 'reports': return <Reports />;
      case 'profile': return <Profile />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Top Header */}
      <div className="bg-white text-gray-900 p-4 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center space-x-3">
            <div className="bg-teal-600 p-1 rounded">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-teal-600 text-xs font-bold">M</span>
              </div>
            </div>
            <span className="font-semibold text-gray-900">Mindmaris Counsellors India</span>
        </div>
        <div className="flex items-center space-x-3">
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
            { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
            { id: 'appointments', icon: Calendar, label: 'Appointments' },
            { id: 'profile', icon: Settings, label: 'Profile' }
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

      {/* Modals */}
      {showAddModal && modalType === 'patient' && (
        <Modal title={editingItem ? "Edit Patient" : "Add New Patient"} onClose={closeModal}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={(e) => handleFormChange('patientName', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Age"
              value={formData.patientAge}
              onChange={(e) => handleFormChange('patientAge', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.patientPhone}
              onChange={(e) => handleFormChange('patientPhone', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email (Optional)"
              value={formData.patientEmail}
              onChange={(e) => handleFormChange('patientEmail', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Condition (Optional)"
              value={formData.patientCondition}
              onChange={(e) => handleFormChange('patientCondition', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <div className="flex space-x-3 pt-4">
              <button
                onClick={closeModal}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addPatient}
                className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                {editingItem ? "Update Patient" : "Add Patient"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showAddModal && modalType === 'appointment' && (
        <Modal title="Schedule Appointment" onClose={closeModal}>
          <div className="space-y-4">
            <select
              value={formData.patientName}
              onChange={(e) => handleFormChange('patientName', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select Patient</option>
              {patients.map(patient => (
                <option key={patient.id} value={patient.name}>{patient.name}</option>
              ))}
            </select>
            <select
              value={formData.selectedDoctor}
              onChange={(e) => handleFormChange('selectedDoctor', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select Doctor</option>
              {doctors.map(doctor => (
                <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
              ))}
            </select>
            <input
              type="time"
              value={formData.appointmentTime}
              onChange={(e) => handleFormChange('appointmentTime', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <select
              value={formData.appointmentType}
              onChange={(e) => handleFormChange('appointmentType', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select Type</option>
              <option value="Initial Consultation">Initial Consultation</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Therapy Session">Therapy Session</option>
              <option value="Assessment">Assessment</option>
            </select>
            <div className="flex space-x-3 pt-4">
              <button
                onClick={closeModal}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addAppointment}
                className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                {editingItem ? "Update Appointment" : "Schedule"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showAddModal && modalType === 'doctor' && (
        <Modal title={editingItem ? "Edit Doctor" : "Add New Doctor"} onClose={closeModal}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Doctor Name"
              value={formData.doctorName}
              onChange={(e) => handleFormChange('doctorName', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Specialization"
              value={formData.doctorSpecialization}
              onChange={(e) => handleFormChange('doctorSpecialization', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Availability (e.g., Mon-Fri 9AM-5PM)"
              value={formData.doctorAvailability}
              onChange={(e) => handleFormChange('doctorAvailability', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <div className="flex space-x-3 pt-4">
              <button
                onClick={closeModal}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addDoctor}
                className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                {editingItem ? "Update Doctor" : "Add Doctor"}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ManagementApp; 