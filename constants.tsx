import React from 'react';

import { Advocate, Service } from './types';

export const ADVOCATES: Advocate[] = [
  {
    name: 'Ishtiyak Ali',
    title: 'Senior Advocate',
    specialization: 'Criminal Law Expert',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop',
  },
  {
    name: 'Mohd Shadab',
    title: 'Junior Advocate',
    specialization: 'Criminal Law & Litigation',
    imageUrl: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=250&auto=format&fit=crop',
  },
  {
    name: 'Irfan Ali',
    title: 'Advocate',
    specialization: 'Deed Writer (Benama Lekhak)',
    imageUrl: 'https://images.unsplash.com/photo-1590650213730-3c7b3c2162c3?q=80&w=250&auto=format&fit=crop',
  },
];

const serviceIconClass = "w-12 h-12 mb-4 text-amber-800";

export const SERVICES: Service[] = [
    {
        title: "Criminal Defense",
        description: "Expert representation in all criminal matters, from bail applications to trials and appeals.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={serviceIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
    },
    {
        title: "Property Deeds",
        description: "Professional drafting and registration of all types of property documents including sale deeds (Benama).",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={serviceIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.353-.026.692-.04 1.048-.04s.695.014 1.048.04c1.13.094 1.976 1.057 1.976 2.192V7.5M12 9.75v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" /></svg>
    },
    {
        title: "Agreement Drafting",
        description: "Crafting legally sound agreements for business, rent, partnerships, and other personal matters.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={serviceIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
    },
    {
        title: "Government Certificates",
        description: "Assistance in obtaining Caste, Domicile, and Income certificates from the concerned authorities.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={serviceIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-12v.75m0 3v.75m0 3v.75m0 3V18m-3-12h18M3 12h18m-3 6h-12c-1.104 0-2-.896-2-2V6c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v8c0 1.104-.896 2-2 2z" /></svg>
    },
     {
        title: "Stamp & Notary",
        description: "Comprehensive services for stamp papers, e-stamping, and notarization of legal documents.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={serviceIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
    },
    {
        title: "Family Law",
        description: "Handling sensitive family matters including marriage registration, divorce, and maintenance cases.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={serviceIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663l.001.109m-11.964-4.663c0-1.113.285-2.16.786-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" /></svg>
    }
];


export const CONTACT_INFO = {
    address: "Chamber No. 12, District Court, Rampur, Uttar Pradesh, 244901",
    phone: "+91 98765 43210",
    email: "contact@aliadvocates.com"
};
