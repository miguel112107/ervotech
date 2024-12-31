import { useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';

export default function Public({ children }) {
    useEffect(() => {
        // Ensure theme is applied on initial load
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.dataset.theme = savedTheme;
    }, []);

    return (
        <>
            <Nav />
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {/* Page Content */}
                {children}
            </div>
            <Footer />
        </>
    );
}
