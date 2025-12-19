import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const MainLayout = ({ children, fullWidth = false }) => {
    return (
        <div className="flex flex-col min-h-screen bg-dark-900 text-light-text selection:bg-primary selection:text-dark-900 overflow-x-hidden">
            <Header />
            <div className="fixed inset-0 w-full h-full bg-noise opacity-[0.03] pointer-events-none z-[60] mix-blend-overlay"></div>
            <main className={`flex-grow ${fullWidth ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-24 pb-24'} relative z-10`}>
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>
                <div className="relative z-10">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
