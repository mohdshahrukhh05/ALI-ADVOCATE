import React, { useState, useRef } from 'react';
import { HomePage } from './components/HomePage';
import { RegistrationForm } from './components/RegistrationForm';
import { AIChat } from './components/AIChat';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { UserLoginForm } from './components/UserLoginForm';
import { UserDashboard } from './components/UserDashboard';
import { User, AppView } from './types';
import { Button } from './components/common/Button';

function App() {
  const [view, setView] = useState<AppView>('home');
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [adminLoginError, setAdminLoginError] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [registrationSuccessData, setRegistrationSuccessData] = useState<{email: string} | null>(null);
  const successTimeoutRef = useRef<any>(null);

  const handleRegister = (newUser: Omit<User, 'id' | 'registeredAt'>) => {
    const userWithId: User = {
      ...newUser,
      id: new Date().toISOString(),
      registeredAt: new Date(),
    };
    setUsers(prevUsers => [...prevUsers, userWithId]);
    setRegistrationSuccessData({ email: newUser.email });

    if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
    }
    
    successTimeoutRef.current = setTimeout(() => {
        setView('userLogin');
        setRegistrationSuccessData(null); 
    }, 10000); // Increased to 10 seconds
  };
  
  const handleAdminLogin = (password: string, username: string) => {
    if (username === '283203' && password === '283203') {
      setCurrentUser(null); // Log out any logged in user
      setView('adminDashboard');
      setIsAdminLoginOpen(false);
      setAdminLoginError('');
    } else {
      setAdminLoginError('Invalid username or password.');
    }
  };
  
  const handleAdminLogout = () => {
    setView('home');
  };
  
  const handleUserLogin = (email: string, password: string): boolean => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        setCurrentUser(user);
        setView('userDashboard');
        return true;
    }
    return false;
  };
  
  const handleUserLogout = () => {
    setCurrentUser(null);
    setView('home');
  }

  const renderView = () => {
    if (registrationSuccessData) {
      const goToLogin = () => {
        if (successTimeoutRef.current) {
            clearTimeout(successTimeoutRef.current);
        }
        setView('userLogin');
        setRegistrationSuccessData(null);
      };

      return (
        <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-xl text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4 font-serif">Registration Successful!</h2>
            <p className="text-gray-700 mb-4">Thank you for creating an account. Your details have been received.</p>
            <div className="bg-gray-100 p-4 rounded-lg text-left mb-6">
                <p className="text-gray-800"><span className="font-semibold">Your User ID:</span> {registrationSuccessData.email}</p>
                <p className="text-gray-800"><span className="font-semibold">Your Password:</span> The password you just created.</p>
            </div>
            <Button onClick={goToLogin} size="lg" className="w-full">
                Proceed to Login
            </Button>
            <p className="text-gray-500 mt-4 text-sm">You will be automatically redirected to the login page shortly.</p>
          </div>
        </div>
      );
    }

    switch (view) {
      case 'register':
        return <RegistrationForm onRegister={handleRegister} onBack={() => setView('home')} onNavigateToLogin={() => setView('userLogin')} />;
      case 'userLogin':
        return <UserLoginForm onLogin={handleUserLogin} onBack={() => setView('home')} onNavigateToRegister={() => setView('register')} />;
      case 'userDashboard':
        if (currentUser) {
            return <UserDashboard user={currentUser} onLogout={handleUserLogout} onNavigateToAIChat={() => setView('chat')} />
        }
        setView('userLogin');
        return null;
      case 'chat':
        return <AIChat onBack={() => currentUser ? setView('userDashboard') : setView('home')} />;
      case 'adminDashboard':
        return <AdminDashboard users={users} onLogout={handleAdminLogout} onGoHome={() => setView('home')} />;
      case 'home':
      default:
        return (
          <HomePage
            onNavigateToRegister={() => setView('register')}
            onNavigateToLogin={() => setView('userLogin')}
            onNavigateToAIChat={() => setView('chat')}
            onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
            isLoggedIn={!!currentUser}
            onNavigateToDashboard={() => setView('userDashboard')}
          />
        );
    }
  };

  return (
    <>
      {renderView()}
      <AdminLogin
        isOpen={isAdminLoginOpen}
        onClose={() => {
          setIsAdminLoginOpen(false);
          setAdminLoginError('');
        }}
        onLogin={handleAdminLogin}
        error={adminLoginError}
      />
    </>
  );
}

export default App;