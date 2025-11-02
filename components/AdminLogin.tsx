
import React, { useState } from 'react';
import { Modal } from './common/Modal';
import { Button } from './common/Button';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (password: string, username: string) => void;
  error?: string;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose, onLogin, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(password, username);
  };
  
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Admin Login">
      <div className="space-y-4">
        {error && <p className="text-red-600 bg-red-100 p-3 rounded-md text-sm">{error}</p>}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleEnter}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnter}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700"
          />
        </div>
        <div className="pt-2">
          <Button onClick={handleLogin} className="w-full">
            Log In
          </Button>
        </div>
      </div>
    </Modal>
  );
};
