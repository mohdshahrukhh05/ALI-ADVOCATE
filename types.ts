import React from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  issue: string;
  password?: string; // Added for registration and login
  registeredAt: Date;
}

export interface Advocate {
  name: string;
  title: string;
  specialization: string;
  imageUrl: string;
}

export interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export type AppView = 'home' | 'register' | 'chat' | 'adminDashboard' | 'userLogin' | 'userDashboard';
