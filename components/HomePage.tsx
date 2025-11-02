import React from 'react';
import { Button } from './common/Button';
import { ADVOCATES, CONTACT_INFO, SERVICES } from '../constants';
import { Advocate, Service } from '../types';

interface HomePageProps {
    onNavigateToRegister: () => void;
    onNavigateToLogin: () => void;
    onNavigateToAIChat: () => void;
    onOpenAdminLogin: () => void;
    isLoggedIn: boolean;
    onNavigateToDashboard: () => void;
}

const AdvocateCard: React.FC<{ advocate: Advocate }> = ({ advocate }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-transform duration-300">
        <img src={advocate.imageUrl} alt={advocate.name} className="w-full h-56 object-cover object-center" />
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 font-serif">{advocate.name}</h3>
            <p className="text-amber-800">{advocate.title}</p>
            <p className="text-gray-600 mt-2 text-sm">{advocate.specialization}</p>
        </div>
    </div>
);

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200 hover:shadow-xl hover:border-amber-700 transition-all duration-300">
        {service.icon}
        <h3 className="text-lg font-semibold text-gray-800 font-serif mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm">{service.description}</p>
    </div>
);


export const HomePage: React.FC<HomePageProps> = ({ 
    onNavigateToRegister, 
    onNavigateToLogin,
    onNavigateToAIChat, 
    onOpenAdminLogin,
    isLoggedIn,
    onNavigateToDashboard
}) => {
    return (
        <div className="bg-stone-50 text-gray-800">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-amber-900 font-serif tracking-wider">Advocate Ali & Associates</h1>
                    <nav className="hidden md:flex items-center space-x-4">
                        {isLoggedIn ? (
                            <>
                               <Button onClick={onNavigateToDashboard} size="md">Dashboard</Button>
                            </>
                        ) : (
                            <>
                                <Button onClick={onNavigateToLogin} variant='secondary' size="sm">Client Login</Button>
                                <Button onClick={onNavigateToRegister} size="sm">Get a Consultation</Button>
                            </>
                        )}
                        <Button onClick={onNavigateToAIChat} variant="secondary" size="sm">Ask AI</Button>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <main>
                <section className="text-center py-20 px-6 bg-white">
                    <div className="container mx-auto">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 font-serif leading-tight">Expert Legal Solutions, Personalized for You</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Navigating the complexities of the legal system requires a trusted partner. At Advocate Ali & Associates, we provide comprehensive legal services with integrity and dedication.</p>
                        <div className="mt-8">
                            <Button onClick={onNavigateToRegister} size="lg">Request a Consultation Today</Button>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section id="team" className="py-20 px-6 bg-stone-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold font-serif mb-2 text-gray-800">Meet Our Advocates</h2>
                        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">A team of experienced and dedicated legal professionals ready to defend your rights.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {ADVOCATES.map(adv => <AdvocateCard key={adv.name} advocate={adv} />)}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20 px-6 bg-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold font-serif mb-2 text-gray-800">Our Legal Services</h2>
                         <p className="text-gray-600 mb-12 max-w-2xl mx-auto">We offer a wide range of legal services to meet the diverse needs of our clients.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                           {SERVICES.map(service => <ServiceCard key={service.title} service={service} />)}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-xl font-bold font-serif mb-4">Advocate Ali & Associates</h3>
                            <p className="text-gray-400">{CONTACT_INFO.address}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-serif mb-4">Contact Us</h3>
                            <p className="text-gray-400">Email: {CONTACT_INFO.email}</p>
                            <p className="text-gray-400">Phone: {CONTACT_INFO.phone}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-serif mb-4">Quick Links</h3>
                             <button onClick={onOpenAdminLogin} className="text-gray-400 hover:text-white">Admin Login</button>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Advocate Ali & Associates. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
