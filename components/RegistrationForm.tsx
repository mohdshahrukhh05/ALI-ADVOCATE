import React, { useState } from 'react';
import { Button } from './common/Button';
import { User } from '../types';

interface RegistrationFormProps {
    onRegister: (user: Omit<User, 'id' | 'registeredAt'>) => void;
    onBack: () => void;
    onNavigateToLogin: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegister, onBack, onNavigateToLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [issue, setIssue] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !phone || !issue || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        setError('');
        onRegister({ name, email, phone, issue, password });
    };

    return (
        <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 font-serif">Create Your Account</h2>
                    <Button onClick={onBack} variant="secondary" size="sm">
                        Back to Home
                    </Button>
                </div>
                <p className="text-gray-600 mb-8">Register to book a consultation and manage your case.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && <p className="text-red-600 bg-red-100 p-3 rounded-md text-sm">{error}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700" />
                        </div>
                         <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address (Your User ID)</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700" />
                        </div>
                         <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Briefly Describe Your Legal Issue</label>
                        <textarea id="issue" rows={4} value={issue} onChange={(e) => setIssue(e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700" />
                    </div>
                    <div className="pt-2">
                        <Button type="submit" className="w-full">
                           Create Account & Submit Request
                        </Button>
                    </div>
                     <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <button type="button" onClick={onNavigateToLogin} className="font-medium text-amber-700 hover:text-amber-800">
                            Log in here
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};