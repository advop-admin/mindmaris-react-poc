# Mindmaris Counsellors India - React Application

A React-based application for Mindmaris Counsellors India with two distinct dashboards for doctors and management.

## Application Structure

### Landing Page (`/`)
- Dashboard selection between Doctors and Management
- Professional branding with Mindmaris logo
- Direct navigation to respective dashboards

### Doctors Dashboard (`/psychologists`)

#### Pages & Features:

**Dashboard Page**
- Daily appointment overview
- Quick stats: Total appointments, Completed, Pending
- Notification system with dropdown
- Profile access and logout functionality

**Schedule Page**
- Calendar view with date selection (Jan 8-14, 2025)
- Date filtering - appointments change based on selected date
- Appointment list showing: Patient name, time, status, type
- Bold blue text indicator for dates with appointments
- Click appointment to view details

**Appointment Detail Page**
- Patient information: Name, age, phone, email, condition, last visit
- Appointment details: Time, type, notes, status
- Status management: Mark as "Pending" or "Completed"
- Report submission: Upload file (image/PDF), add remarks
- Back navigation to schedule

**Profile Page**
- Read-only display: Name, title, email, phone
- Logout functionality

#### Data Management:
- localStorage persistence for appointments and reports
- Status changes persist across sessions
- File upload simulation for reports

### Management Dashboard (`/management`)

#### Pages & Features:

**Dashboard Page**
- Weekly earnings overview (total amount only)
- Doctor appointment statistics
- Quick access to all management functions

**Patients Page**
- Patient list with search functionality
- Add new patients: Name, age, phone, email, condition
- Edit existing patients
- Patient details: ID, name, age, phone, email, condition

**Appointments Page**
- Appointment list with search
- Schedule new appointments: Patient, doctor, time, type
- Edit existing appointments
- Status tracking: Pending/Completed

**Doctors Page**
- Doctor list with add/edit functionality
- Doctor details: Name, specialization, availability, active patients
- Add new doctors with full details

**Reports Page**
- Report list: Title, patient, doctor, date, status
- Download functionality (PDF simulation)
- Report status tracking

**Profile Page**
- Management profile: Centre Admin details
- Logout functionality

#### Data Management:
- Full CRUD operations for patients, appointments, doctors
- Search and filter capabilities
- Modal-based forms for add/edit operations

## Technical Stack

- **React 18** - Frontend framework
- **React Router DOM v6.8.1** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **localStorage** - Client-side data persistence
- **Create React App** - Development setup

## URL Structure

- `/` - Landing page
- `/psychologists` - Doctors dashboard
- `/management` - Management dashboard

## Data Models

### Appointment
```javascript
{
  id: number,
  patientName: string,
  time: string,
  status: 'pending' | 'completed',
  type: string,
  notes: string,
  date: string,
  patientDetails: {
    age: number,
    phone: string,
    email: string,
    condition: string,
    lastVisit: string
  }
}
```

### Patient
```javascript
{
  id: number,
  name: string,
  age: number,
  phone: string,
  email: string,
  condition: string
}
```

### Doctor
```javascript
{
  id: number,
  name: string,
  specialization: string,
  availability: string,
  patients: number
}
```

### Report
```javascript
{
  id: number,
  title: string,
  patient: string,
  doctor: string,
  date: string,
  status: 'pending' | 'completed'
}
```

## Installation & Deployment

### Local Development
```bash
npm install
npm start
```

### Production Build
```bash
npm run build
```

### Netlify Deployment
- Build command: `npm run build`
- Publish directory: `build`
- Redirects: `/* /index.html 200`

## Current Limitations

- Client-side only (no backend integration)
- File uploads are simulated
- Data persistence limited to localStorage
- No authentication system
- No real-time updates

## Demo Data

The application includes sample data for:
- 5 appointments with different statuses and dates
- 4 patients with various conditions
- 4 doctors with specializations
- 3 sample reports
- Weekly earnings data 