import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PsychologistApp from './components/PsychologistApp';
import ManagementApp from './components/ManagementApp';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/psychologists" element={<PsychologistApp />} />
          <Route path="/management" element={<ManagementApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 