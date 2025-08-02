# Mindmaris Counsellors India - React POC

A modern React-based application for Mindmaris Counsellors India, featuring a multi-dashboard system for counsellors and management to manage appointments, patient records, and reports.

## Features

### 🏠 Landing Page
- **Dashboard Selection**: Choose between Counsellor and Management dashboards
- **Professional Branding**: Mindmaris Counsellors India branding throughout

### 👨‍⚕️ Counsellor Dashboard (`/psychologists`)
- **Dashboard**: Overview of daily appointments and quick stats
- **Schedule Management**: Calendar view with appointment tracking and date filtering
- **Appointment Details**: View patient information and manage appointment status
- **Report Submission**: Upload reports with file attachments and remarks
- **Profile Management**: Simplified profile with essential contact information
- **Status Management**: Mark appointments as Pending or Completed

### 🏢 Management Dashboard (`/management`)
- **Dashboard**: Weekly earnings overview and doctor appointment statistics
- **Patient Management**: Add and manage patient records
- **Appointment Management**: Schedule appointments and assign counsellors
- **Report Management**: View and download counsellor reports
- **Doctor Management**: Manage counsellor profiles and schedules
- **Analytics**: Quick stats and earnings dashboard

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/advop-admin/mindmaris-react-poc.git
cd mindmaris-react-poc
```

2. Install the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technology Stack

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Create React App** - Development setup
- **localStorage** - Client-side data persistence

## Key Features

### 📱 Mobile-First Design
- Responsive design optimized for mobile devices
- Touch-friendly interface
- Bottom navigation for easy thumb navigation
- Card-based layout for better readability

### 💾 Data Persistence
- **localStorage Integration**: All appointment statuses and reports are automatically saved
- **Session Persistence**: Data survives browser refreshes and restarts
- **Real-time Updates**: Changes are immediately reflected across all pages

### 🎯 Simplified Workflow
- **Two Status System**: Only "Pending" and "Completed" statuses for clarity
- **Direct Actions**: Counsellors can directly mark appointments as completed
- **Integrated Reports**: Report submission automatically updates appointment status

### 🏥 Professional Context
- **Counselling Centre Focus**: Designed specifically for mental health counselling
- **Role-Based Access**: Separate dashboards for counsellors and management
- **Professional Branding**: Consistent Mindmaris Counsellors India branding

## Demo Data

The app comes with sample data for demonstration purposes:
- **Appointments**: Sample appointments with different statuses and dates
- **Patients**: Mock patient data with various mental health conditions
- **Reports**: Sample counsellor reports and assessments
- **Profiles**: Demo counsellor and management profiles

## URL Structure

- `/` - Landing page with dashboard selection
- `/psychologists` - Counsellor dashboard
- `/management` - Management dashboard

## Contributing

This is a proof-of-concept (POC) for Mindmaris Counsellors India. Feel free to submit issues and enhancement requests!

## License

This project is proprietary to Mindmaris Counsellors India. 