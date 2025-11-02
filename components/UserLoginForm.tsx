import React, { useState } from 'react';
import { Button } from './common/Button';

interface UserLoginFormProps {
    onLogin: (email: string, password: string) => boolean;
    onBack: () => void;
    onNavigateToRegister: () => void;
}

export const UserLoginForm: React.FC<UserLoginFormProps> = ({ onLogin, onBack, onNavigateToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Both email and password are required.');
            return;
        }
        const success = onLogin(email, password);
        if (!success) {
            setError('Invalid email or password. Please try again.');
        }
    };
    
    const handleForgotPassword = () => {
        alert("This is a demo. In a real app, this would trigger a password reset flow.");
    }

    return (
        <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 font-serif">Client Login</h2>
                    <Button onClick={onBack} variant="secondary" size="sm">
                        Back to Home
                    </Button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && <p className="text-red-600 bg-red-100 p-3 rounded-md text-sm">{error}</p>}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address (Your User ID)</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700"
                        />
                    </div>
                     <div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <button type="button" onClick={handleForgotPassword} className="text-sm text-amber-700 hover:text-amber-800">Forgot password?</button>
                        </div>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700"
                        />
                    </div>
                    <div className="pt-2">
                        <Button type="submit" className="w-full">
                            Log In
                        </Button>
                    </div>
                     <p className="text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <button type="button" onClick={onNavigateToRegister} className="font-medium text-amber-700 hover:text-amber-800">
                            Register here
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};
