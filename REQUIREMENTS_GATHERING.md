# Mindmaris Counsellors India - Requirements Gathering Document

## Project Overview
This document outlines the requirements for the Mindmaris Counsellors India application, a multi-dashboard system for managing counselling appointments, patients, and reports.

## Current Status
- ✅ **Frontend POC Complete** - React application with two dashboards
- ✅ **UI/UX Design** - Modern, responsive interface with teal branding
- ✅ **Basic Functionality** - Demo data and user flows implemented
- ❌ **Backend Integration** - Pending (needs API development)
- ❌ **Real Data** - Currently using mock data

## Dashboard Structure

### 1. Landing Page (`/`)
**Current Implementation:** Dashboard selection between Doctors and Management
**Questions for Client:**
- Should there be authentication/login before accessing dashboards?
- Do you need different user roles (Admin, Manager, Doctor, Receptionist)?
- Should there be a "Remember Me" or "Stay Logged In" option?

### 2. Doctors Dashboard (`/psychologists`)
**Current Features:**
- Dashboard overview with appointment stats
- Schedule management with calendar
- Appointment details and status updates
- Report submission with file upload
- Profile management

**Questions for Client:**

#### **Authentication & User Management:**
- How should doctors log in? (Email/Password, Employee ID, etc.)
- Should there be password reset functionality?
- Do doctors need to change their password periodically?
- Should there be session timeout?

#### **Appointment Management:**
- What appointment statuses do you need? (Currently: Pending, Completed)
- Do you need additional statuses like "Cancelled", "Rescheduled", "No Show"?
- Should doctors be able to reschedule appointments?
- Do you need appointment reminders/notifications?
- Should there be appointment duration tracking?
- Do you need recurring appointment functionality?

#### **Patient Information:**
- What patient details are required? (Currently: Name, Age, Phone, Email, Condition)
- Do you need additional fields like:
  - Emergency contact
  - Medical history
  - Insurance information
  - Address
  - Date of birth
  - Gender
  - Occupation
  - Referral source
- Should there be patient consent forms?
- Do you need patient photo upload?

#### **Report Management:**
- What types of reports do doctors need to submit?
- What file formats should be supported? (PDF, Images, Documents)
- Do you need report templates?
- Should reports be automatically sent to management?
- Do you need report approval workflow?
- Should there be report categories (Initial Assessment, Progress Report, etc.)?

#### **Schedule & Calendar:**
- Do doctors need to set their availability?
- Should there be working hours configuration?
- Do you need break time management?
- Should there be holiday/leave management?
- Do you need appointment slot duration settings?

### 3. Management Dashboard (`/management`)
**Current Features:**
- Dashboard with earnings and statistics
- Patient management (CRUD operations)
- Appointment scheduling
- Doctor management
- Report viewing and download
- Analytics

**Questions for Client:**

#### **Patient Management:**
- Who can add new patients? (Receptionist, Management, Doctors?)
- What patient registration workflow do you need?
- Do you need patient search and filtering?
- Should there be patient categories (New, Regular, VIP, etc.)?
- Do you need patient history tracking?
- Should there be patient notes/comments?

#### **Appointment Scheduling:**
- Who can schedule appointments? (Receptionist, Management, Patients?)
- Do you need online booking for patients?
- Should there be appointment confirmation emails/SMS?
- Do you need appointment cancellation policies?
- Should there be waiting list functionality?
- Do you need appointment reminders?

#### **Doctor Management:**
- What doctor information do you need to track?
- Do you need doctor availability management?
- Should there be doctor performance metrics?
- Do you need doctor scheduling/roster management?
- Should there be doctor specializations and expertise areas?

#### **Financial Management:**
- What payment methods do you support?
- Do you need invoice generation?
- Should there be payment tracking?
- Do you need refund management?
- Should there be insurance claim processing?
- Do you need financial reporting?

#### **Analytics & Reporting:**
- What key metrics do you need to track?
- Do you need custom date range reports?
- Should there be export functionality (PDF, Excel)?
- Do you need real-time analytics?
- Should there be automated reports (daily, weekly, monthly)?

## Technical Requirements

### **Data Storage:**
- What database do you prefer? (MySQL, PostgreSQL, MongoDB)
- Do you need data backup and recovery?
- Should there be data archiving for old records?
- Do you need data export/import functionality?

### **File Management:**
- Where should files be stored? (Local server, Cloud storage)
- What file size limits do you need?
- Should there be file compression?
- Do you need file versioning?

### **Security & Privacy:**
- Do you need HIPAA compliance?
- Should there be data encryption?
- Do you need audit trails?
- Should there be role-based access control?
- Do you need two-factor authentication?

### **Integration Requirements:**
- Do you need integration with existing systems?
- Should there be email/SMS notifications?
- Do you need calendar integration (Google Calendar, Outlook)?
- Should there be payment gateway integration?

### **Mobile Requirements:**
- Do you need a mobile app or just responsive web?
- Should there be offline functionality?
- Do you need push notifications?

## Business Rules & Workflows

### **Appointment Workflow:**
1. How should appointments be created?
2. What happens when a patient cancels?
3. How should no-shows be handled?
4. What's the rescheduling policy?

### **Patient Workflow:**
1. How do new patients register?
2. What's the initial consultation process?
3. How are follow-up appointments managed?
4. What's the discharge process?

### **Report Workflow:**
1. When should reports be submitted?
2. Who reviews the reports?
3. How are reports shared with patients?
4. What's the report approval process?

### **Payment Workflow:**
1. When should payments be collected?
2. What's the cancellation refund policy?
3. How are insurance claims processed?
4. What payment methods are accepted?

## User Roles & Permissions

### **Super Admin:**
- What can super admins do?
- Can they manage all centres/locations?

### **Centre Manager:**
- What are their responsibilities?
- Can they manage doctors and staff?

### **Doctor/Counsellor:**
- What can they access?
- Can they see other doctors' patients?

### **Receptionist:**
- What are their permissions?
- Can they schedule appointments?

### **Patient:**
- Should patients have access to the system?
- What can they see/do?

## Additional Features

### **Communication:**
- Do you need in-app messaging?
- Should there be email templates?
- Do you need SMS notifications?

### **Documentation:**
- Do you need consent form management?
- Should there be treatment plan templates?
- Do you need progress note templates?

### **Quality Assurance:**
- Do you need quality metrics tracking?
- Should there be patient satisfaction surveys?
- Do you need performance reviews?

## Timeline & Priorities

### **Phase 1 (MVP):**
- Basic authentication
- Patient management
- Appointment scheduling
- Basic reporting

### **Phase 2:**
- Advanced analytics
- Payment integration
- Mobile app
- Advanced workflows

### **Phase 3:**
- AI/ML features
- Advanced integrations
- Custom reporting
- Advanced security

## Questions for Client

1. **What's your current process?** How do you currently manage appointments, patients, and reports?

2. **What are your pain points?** What issues are you trying to solve with this system?

3. **What's your budget and timeline?** When do you need this system operational?

4. **How many users?** How many doctors, staff, and patients will use the system?

5. **What integrations do you need?** Do you have existing systems that need to integrate?

6. **What's your technical expertise?** Do you have IT staff to manage the system?

7. **What's your data migration plan?** Do you have existing patient data to migrate?

8. **What's your support plan?** How will you handle technical support and training?

## Next Steps

1. **Review this document** with your team
2. **Fill in the requirements** based on your business needs
3. **Prioritize features** for MVP and future phases
4. **Provide feedback** on any missing requirements
5. **Schedule a requirements review meeting**

---

**Contact:** [Your Contact Information]
**Document Version:** 1.0
**Last Updated:** January 2025 