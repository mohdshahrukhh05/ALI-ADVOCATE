import React from 'react';
import { User } from '../types';
import { Button } from './common/Button';

interface UserDashboardProps {
  user: User;
  onLogout: () => void;
  onNavigateToAIChat: () => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({ user, onLogout, onNavigateToAIChat }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 font-serif">Client Dashboard</h1>
          <Button onClick={onLogout}>
            Logout
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-700 font-serif">Welcome back, {user.name.split(' ')[0]}!</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 font-serif mb-4">Your Consultation Request</h3>
                 <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                    <h4 className="font-semibold text-gray-700">Issue Summary:</h4>
                    <p className="text-gray-600 mt-2">{user.issue}</p>
                 </div>
                 <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md" role="alert">
                    <p className="font-bold">Next Steps</p>
                    <p>Thank you for submitting your case details. One of our advocates will review your information and contact you via email or phone within the next 2 business days to schedule a formal consultation.</p>
                </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col justify-center items-center text-center">
                 <h3 className="text-xl font-bold text-gray-800 font-serif mb-4">Have More Questions?</h3>
                 <p className="text-gray-600 mb-6">Our AI assistant is available 24/7 to provide general information on legal topics. It's a great resource for preliminary queries.</p>
                 <Button onClick={onNavigateToAIChat} size="lg">
                    Ask our AI Assistant
                 </Button>
            </div>
        </div>

      </main>
    </div>
  );
};