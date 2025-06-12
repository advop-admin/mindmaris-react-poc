import React, { useState } from 'react';
import { Calendar, Users, FileText, User, Bell, Search, Plus, Clock, CheckCircle, Upload, Camera, Menu, Home, Settings, X } from 'lucide-react';

const PsychologistApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(8);
  
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'Sarah Johnson', time: '09:00 AM', status: 'pending', type: 'Initial Consultation' },
    { id: 2, patientName: 'Michael Chen', time: '10:30 AM', status: 'completed', type: 'Follow-up' },
    { id: 3, patientName: 'Emily Davis', time: '02:00 PM', status: 'in-progress', type: 'Therapy Session' },
    { id: 4, patientName: 'James Wilson', time: '03:30 PM', status: 'pending', type: 'Assessment' }
  ]);

  const [patients, setPatients] = useState([
    { id: 1, name: 'Sarah Johnson', age: 28, lastVisit: '2025-01-08', condition: 'Anxiety Disorder' },
    { id: 2, name: 'Michael Chen', age: 35, lastVisit: '2025-01-08', condition: 'Depression' },
    { id: 3, name: 'Emily Davis', age: 42, lastVisit: '2025-01-07', condition: 'PTSD' },
    { id: 4, name: 'James Wilson', age: 31, lastVisit: '2025-01-06', condition: 'Bipolar Disorder' }
  ]);

  const [reports, setReports] = useState([
    { id: 1, title: 'Assessment Report #1', patient: 'Sarah Johnson', date: 'Jan 7, 2025' },
    { id: 2, title: 'Assessment Report #2', patient: 'Sarah Johnson', date: 'Jan 6, 2025' },
    { id: 3, title: 'Assessment Report #3', patient: 'Sarah Johnson', date: 'Jan 5, 2025' }
  ]);

  const [formData, setFormData] = useState({
    patientName: '',
    time: '',
    type: '',
    name: '',
    age: '',
    condition: '',
    reportTitle: '',
    reportNotes: '',
    selectedPatient: ''
  });

  const [profile, setProfile] = useState({
    name: 'Dr. Sarah Smith',
    title: 'Clinical Psychologist',
    email: 'dr.smith@hospital.com',
    phone: '+1 (555) 123-4567',
    department: 'Mental Health Services'
  });

  const markAppointmentComplete = (id) => {
    setAppointments(prev => prev.map(apt => 
      apt.id === id ? { ...apt, status: 'completed' } : apt
    ));
  };

  const openModal = (type) => {
    setModalType(type);
    setShowAddModal(true);
    setFormData({
      patientName: '',
      time: '',
      type: '',
      name: '',
      age: '',
      condition: '',
      reportTitle: '',
      reportNotes: '',
      selectedPatient: ''
    });
  };

  const closeModal = () => {
    setShowAddModal(false);
    setModalType('');
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const addAppointment = () => {
    if (formData.patientName && formData.time && formData.type) {
      const newAppointment = {
        id: appointments.length + 1,
        patientName: formData.patientName,
        time: formData.time,
        status: 'pending',
        type: formData.type
      };
      setAppointments(prev => [...prev, newAppointment]);
      closeModal();
    }
  };

  const addPatient = () => {
    if (formData.name && formData.age && formData.condition) {
      const newPatient = {
        id: patients.length + 1,
        name: formData.name,
        age: parseInt(formData.age),
        lastVisit: new Date().toISOString().split('T')[0],
        condition: formData.condition
      };
      setPatients(prev => [...prev, newPatient]);
      closeModal();
    }
  };

  const addReport = () => {
    if (formData.reportTitle && formData.selectedPatient) {
      const newReport = {
        id: reports.length + 1,
        title: formData.reportTitle,
        patient: formData.selectedPatient,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      setReports(prev => [...prev, newReport]);
      closeModal();
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const Modal = ({ title, children }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
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
      <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Good Morning, Dr. Smith</h1>
        <p className="text-blue-100">Wednesday, January 8, 2025</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Clock className="h-5 w-5 text-blue-600" />
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
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                {appointment.status}
              </span>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <button 
            onClick={() => setCurrentPage('schedule')}
            className="w-full text-blue-600 font-medium text-sm hover:bg-blue-50 py-2 rounded"
          >
            View All Appointments
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setCurrentPage('patients')}
          className="bg-white p-4 rounded-lg shadow-sm border text-left hover:bg-gray-50 transition-colors"
        >
          <Users className="h-6 w-6 text-blue-600 mb-2" />
          <p className="font-medium text-gray-900">Patient Records</p>
          <p className="text-sm text-gray-600">Manage patient files</p>
        </button>
        
        <button 
          onClick={() => setCurrentPage('reports')}
          className="bg-white p-4 rounded-lg shadow-sm border text-left hover:bg-gray-50 transition-colors"
        >
          <FileText className="h-6 w-6 text-blue-600 mb-2" />
          <p className="font-medium text-gray-900">Reports</p>
          <p className="text-sm text-gray-600">Upload & manage</p>
        </button>
      </div>
    </div>
  );

  const Schedule = () => (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Schedule</h1>
        <button 
          onClick={() => openModal('appointment')}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      {/* Calendar Header */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="grid grid-cols-7 gap-1 text-center mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-sm font-medium text-gray-600 py-2">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {[6, 7, 8, 9, 10, 11, 12].map(date => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`py-2 text-sm rounded-lg transition-colors ${
                date === selectedDate ? 'bg-blue-600 text-white' : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-3">
        {appointments.map(appointment => (
          <div key={appointment.id} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{appointment.patientName}</h3>
                <p className="text-sm text-gray-600 mt-1">{appointment.time}</p>
                <p className="text-sm text-blue-600 mt-1">{appointment.type}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                  {appointment.status}
                </span>
                {appointment.status === 'pending' && (
                  <button
                    onClick={() => markAppointmentComplete(appointment.id)}
                    className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors"
                  >
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Patients = () => (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Patients</h1>
        <button 
          onClick={() => openModal('patient')}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
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
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="space-y-3">
        {filteredPatients.map(patient => (
          <div key={patient.id} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{patient.name}</h3>
                <p className="text-sm text-gray-600">Age: {patient.age}</p>
                <p className="text-sm text-gray-600">Condition: {patient.condition}</p>
                <p className="text-sm text-blue-600 mt-1">Last visit: {patient.lastVisit}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Reports = () => (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Reports</h1>
        <button 
          onClick={() => openModal('report')}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Upload className="h-5 w-5" />
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h2 className="font-medium text-gray-900 mb-3">Upload New Report</h2>
        <div className="space-y-3">
          <select 
            value={formData.selectedPatient}
            onChange={(e) => handleFormChange('selectedPatient', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Patient</option>
            {patients.map(patient => (
              <option key={patient.id} value={patient.name}>{patient.name}</option>
            ))}
          </select>
          
          <input
            type="text"
            placeholder="Report title"
            value={formData.reportTitle}
            onChange={(e) => handleFormChange('reportTitle', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <textarea
            placeholder="Report notes..."
            rows={4}
            value={formData.reportNotes}
            onChange={(e) => handleFormChange('reportNotes', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <div className="flex space-x-3">
            <button 
              onClick={() => alert('Camera feature would be implemented here')}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors"
            >
              <Camera className="h-4 w-4" />
              <span>Photo</span>
            </button>
            <button 
              onClick={() => alert('File upload would be implemented here')}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors"
            >
              <Upload className="h-4 w-4" />
              <span>File</span>
            </button>
          </div>
          
          <button 
            onClick={addReport}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Report
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h2 className="font-medium text-gray-900">Recent Reports</h2>
        </div>
        <div className="space-y-3 p-4">
          {reports.map(report => (
            <div key={report.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">{report.title}</p>
                <p className="text-sm text-gray-600">{report.patient} • {report.date}</p>
              </div>
              <FileText className="h-5 w-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Profile = () => (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Profile</h1>
      
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <User className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h2 className="font-medium text-gray-900">{profile.name}</h2>
            <p className="text-sm text-gray-600">{profile.title}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={profile.email}
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50"
              readOnly
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => handleProfileChange('phone', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <input
              type="text"
              value={profile.department}
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50"
              readOnly
            />
          </div>
        </div>
        
        <button 
          onClick={() => alert('Profile updated successfully!')}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 transition-colors"
        >
          Update Profile
        </button>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'schedule': return <Schedule />;
      case 'patients': return <Patients />;
      case 'reports': return <Reports />;
      case 'profile': return <Profile />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Top Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-1 rounded">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">H</span>
            </div>
          </div>
          <span className="font-semibold">Hospital Portal</span>
        </div>
        <div className="flex items-center space-x-3">
          <button className="hover:bg-blue-700 p-1 rounded transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="hover:bg-blue-700 p-1 rounded transition-colors">
            <Settings className="h-5 w-5" />
          </button>
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
            { id: 'patients', icon: Users, label: 'Patients' },
            { id: 'reports', icon: FileText, label: 'Reports' },
            { id: 'profile', icon: User, label: 'Profile' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex flex-col items-center py-2 px-3 transition-colors ${
                currentPage === id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Modals */}
      {showAddModal && modalType === 'appointment' && (
        <Modal title="Add New Appointment">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={(e) => handleFormChange('patientName', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="time"
              value={formData.time}
              onChange={(e) => handleFormChange('time', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              value={formData.type}
              onChange={(e) => handleFormChange('type', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Appointment
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showAddModal && modalType === 'patient' && (
        <Modal title="Add New Patient">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Patient Name"
              value={formData.name}
              onChange={(e) => handleFormChange('name', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => handleFormChange('age', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Condition"
              value={formData.condition}
              onChange={(e) => handleFormChange('condition', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Patient
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showAddModal && modalType === 'report' && (
        <Modal title="Add New Report">
          <div className="space-y-4">
            <select
              value={formData.selectedPatient}
              onChange={(e) => handleFormChange('selectedPatient', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Patient</option>
              {patients.map(patient => (
                <option key={patient.id} value={patient.name}>{patient.name}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Report Title"
              value={formData.reportTitle}
              onChange={(e) => handleFormChange('reportTitle', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea
              placeholder="Report Notes"
              rows={4}
              value={formData.reportNotes}
              onChange={(e) => handleFormChange('reportNotes', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex space-x-3 pt-4">
              <button
                onClick={closeModal}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addReport}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Report
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PsychologistApp; 