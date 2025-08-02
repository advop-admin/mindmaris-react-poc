# Backend API Endpoints Documentation

## Base URL
```
https://api.mindmaris.com/v1
```

## Authentication
All endpoints require Bearer token authentication:
```
Authorization: Bearer <token>
```

## Response Format
All responses follow this structure:
```json
{
  "success": boolean,
  "data": object|array,
  "message": string,
  "error": string|null
}
```

## Endpoints

### Authentication

#### POST /auth/login
**Request:**
```json
{
  "email": "doctor@mindmaris.com",
  "password": "password123",
  "role": "doctor" | "management"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "name": "Dr. Sarah Smith",
      "email": "doctor@mindmaris.com",
      "role": "doctor",
      "title": "Clinical Psychologist"
    }
  },
  "message": "Login successful"
}
```

#### POST /auth/logout
**Request:** No body required

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### Appointments

#### GET /appointments
**Query Parameters:**
- `date` (optional): YYYY-MM-DD format
- `status` (optional): pending|completed
- `doctor_id` (optional): Filter by doctor

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "patient_name": "Sarah Johnson",
      "patient_id": 1,
      "doctor_id": 1,
      "time": "09:00 AM",
      "date": "2025-01-08",
      "status": "pending",
      "type": "Initial Consultation",
      "notes": "Patient experiencing anxiety symptoms",
      "created_at": "2025-01-07T10:00:00Z",
      "updated_at": "2025-01-07T10:00:00Z",
      "patient": {
        "id": 1,
        "name": "Sarah Johnson",
        "age": 28,
        "phone": "+1-555-0123",
        "email": "sarah@email.com",
        "condition": "Anxiety Disorder"
      },
      "doctor": {
        "id": 1,
        "name": "Dr. Sarah Smith",
        "specialization": "Clinical Psychology"
      }
    }
  ]
}
```

#### POST /appointments
**Request:**
```json
{
  "patient_id": 1,
  "doctor_id": 1,
  "time": "09:00 AM",
  "date": "2025-01-08",
  "type": "Initial Consultation",
  "notes": "Patient experiencing anxiety symptoms"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "patient_name": "Sarah Johnson",
    "patient_id": 1,
    "doctor_id": 1,
    "time": "09:00 AM",
    "date": "2025-01-08",
    "status": "pending",
    "type": "Initial Consultation",
    "notes": "Patient experiencing anxiety symptoms",
    "created_at": "2025-01-07T10:00:00Z"
  },
  "message": "Appointment created successfully"
}
```

#### PUT /appointments/{id}
**Request:**
```json
{
  "patient_id": 1,
  "doctor_id": 1,
  "time": "10:00 AM",
  "date": "2025-01-08",
  "type": "Follow-up",
  "notes": "Updated notes"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "patient_name": "Sarah Johnson",
    "patient_id": 1,
    "doctor_id": 1,
    "time": "10:00 AM",
    "date": "2025-01-08",
    "status": "pending",
    "type": "Follow-up",
    "notes": "Updated notes",
    "updated_at": "2025-01-07T11:00:00Z"
  },
  "message": "Appointment updated successfully"
}
```

#### PATCH /appointments/{id}/status
**Request:**
```json
{
  "status": "completed"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "completed",
    "updated_at": "2025-01-07T12:00:00Z"
  },
  "message": "Appointment status updated"
}
```

### Patients

#### GET /patients
**Query Parameters:**
- `search` (optional): Search by name or condition
- `page` (optional): Page number for pagination
- `limit` (optional): Items per page

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Sarah Johnson",
      "age": 28,
      "phone": "+1-555-0123",
      "email": "sarah@email.com",
      "condition": "Anxiety Disorder",
      "created_at": "2025-01-01T10:00:00Z",
      "updated_at": "2025-01-01T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "pages": 3
  }
}
```

#### POST /patients
**Request:**
```json
{
  "name": "John Doe",
  "age": 35,
  "phone": "+1-555-0128",
  "email": "john@email.com",
  "condition": "Depression"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 5,
    "name": "John Doe",
    "age": 35,
    "phone": "+1-555-0128",
    "email": "john@email.com",
    "condition": "Depression",
    "created_at": "2025-01-07T10:00:00Z"
  },
  "message": "Patient created successfully"
}
```

#### PUT /patients/{id}
**Request:**
```json
{
  "name": "John Doe Updated",
  "age": 36,
  "phone": "+1-555-0129",
  "email": "john.updated@email.com",
  "condition": "Depression"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 5,
    "name": "John Doe Updated",
    "age": 36,
    "phone": "+1-555-0129",
    "email": "john.updated@email.com",
    "condition": "Depression",
    "updated_at": "2025-01-07T11:00:00Z"
  },
  "message": "Patient updated successfully"
}
```

### Doctors

#### GET /doctors
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Dr. Sarah Smith",
      "specialization": "Clinical Psychology",
      "availability": "Mon-Fri 9AM-5PM",
      "patients": 12,
      "email": "sarah.smith@mindmaris.com",
      "phone": "+1-555-0101",
      "created_at": "2025-01-01T10:00:00Z"
    }
  ]
}
```

#### POST /doctors
**Request:**
```json
{
  "name": "Dr. Jane Wilson",
  "specialization": "Child Psychology",
  "availability": "Mon-Thu 9AM-4PM",
  "email": "jane.wilson@mindmaris.com",
  "phone": "+1-555-0102"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 5,
    "name": "Dr. Jane Wilson",
    "specialization": "Child Psychology",
    "availability": "Mon-Thu 9AM-4PM",
    "patients": 0,
    "email": "jane.wilson@mindmaris.com",
    "phone": "+1-555-0102",
    "created_at": "2025-01-07T10:00:00Z"
  },
  "message": "Doctor created successfully"
}
```

#### PUT /doctors/{id}
**Request:**
```json
{
  "name": "Dr. Jane Wilson Updated",
  "specialization": "Child Psychology",
  "availability": "Mon-Fri 9AM-5PM",
  "email": "jane.wilson@mindmaris.com",
  "phone": "+1-555-0103"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 5,
    "name": "Dr. Jane Wilson Updated",
    "specialization": "Child Psychology",
    "availability": "Mon-Fri 9AM-5PM",
    "patients": 0,
    "email": "jane.wilson@mindmaris.com",
    "phone": "+1-555-0103",
    "updated_at": "2025-01-07T11:00:00Z"
  },
  "message": "Doctor updated successfully"
}
```

### Reports

#### GET /reports
**Query Parameters:**
- `appointment_id` (optional): Filter by appointment
- `doctor_id` (optional): Filter by doctor
- `status` (optional): pending|completed

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Assessment Report #1",
      "appointment_id": 1,
      "patient_id": 1,
      "doctor_id": 1,
      "remarks": "Patient shows improvement in anxiety symptoms",
      "file_url": "https://api.mindmaris.com/files/reports/report_1.pdf",
      "status": "completed",
      "created_at": "2025-01-07T10:00:00Z",
      "patient": {
        "id": 1,
        "name": "Sarah Johnson"
      },
      "doctor": {
        "id": 1,
        "name": "Dr. Sarah Smith"
      }
    }
  ]
}
```

#### POST /reports
**Request (multipart/form-data):**
```
appointment_id: 1
remarks: "Patient shows improvement in anxiety symptoms"
file: [PDF/Image file]
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Assessment Report #1",
    "appointment_id": 1,
    "patient_id": 1,
    "doctor_id": 1,
    "remarks": "Patient shows improvement in anxiety symptoms",
    "file_url": "https://api.mindmaris.com/files/reports/report_1.pdf",
    "status": "completed",
    "created_at": "2025-01-07T10:00:00Z"
  },
  "message": "Report submitted successfully"
}
```

#### GET /reports/{id}/download
**Response:** File download (PDF)

### Analytics

#### GET /analytics/earnings
**Query Parameters:**
- `period`: weekly|monthly|yearly
- `start_date`: YYYY-MM-DD
- `end_date`: YYYY-MM-DD

**Response:**
```json
{
  "success": true,
  "data": {
    "period": "weekly",
    "start_date": "2025-01-05",
    "end_date": "2025-01-11",
    "total_earnings": 12500,
    "total_appointments": 45,
    "completed_appointments": 42,
    "pending_appointments": 3
  }
}
```

#### GET /analytics/doctors
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "doctor_id": 1,
      "doctor_name": "Dr. Sarah Smith",
      "total_appointments": 25,
      "completed_appointments": 22,
      "pending_appointments": 3,
      "total_earnings": 8500
    }
  ]
}
```

### User Profile

#### GET /profile
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Dr. Sarah Smith",
    "title": "Clinical Psychologist",
    "email": "sarah.smith@mindmaris.com",
    "phone": "+1-555-0101",
    "role": "doctor",
    "department": "Psychology"
  }
}
```

#### PUT /profile
**Request:**
```json
{
  "name": "Dr. Sarah Smith",
  "email": "sarah.smith@mindmaris.com",
  "phone": "+1-555-0101"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Dr. Sarah Smith",
    "title": "Clinical Psychologist",
    "email": "sarah.smith@mindmaris.com",
    "phone": "+1-555-0101",
    "role": "doctor",
    "department": "Psychology",
    "updated_at": "2025-01-07T11:00:00Z"
  },
  "message": "Profile updated successfully"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Validation failed",
  "message": "Required fields missing",
  "data": {
    "field": "email",
    "message": "Email is required"
  }
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": "Unauthorized",
  "message": "Invalid or expired token"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "error": "Forbidden",
  "message": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Not Found",
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal Server Error",
  "message": "Something went wrong"
}
```

## File Upload

### Supported Formats
- **Images**: JPG, PNG, GIF (max 5MB)
- **Documents**: PDF (max 10MB)

### Upload Endpoint
```
POST /upload
Content-Type: multipart/form-data
```

**Response:**
```json
{
  "success": true,
  "data": {
    "file_url": "https://api.mindmaris.com/files/reports/file_123.pdf",
    "file_name": "report.pdf",
    "file_size": 2048576
  }
}
``` 