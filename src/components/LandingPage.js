import React from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Mindmaris Counsellors India</h1>
            <p className="text-gray-600">Choose your dashboard to continue</p>
          </div>

          {/* Dashboard Options */}
          <div className="space-y-4">
            <Link
              to="/psychologists"
              className="block bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Doctors Dashboard</h2>
                    <p className="text-teal-100 text-sm">Manage patients, appointments & reports</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>

            <Link
              to="/management"
              className="block bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Management Dashboard</h2>
                    <p className="text-green-100 text-sm">Centre administration & analytics</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 Mindmaris Counsellors India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 