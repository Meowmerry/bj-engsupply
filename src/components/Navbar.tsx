
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/services';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="bg-primary text-white py-2 hidden md:block">
                <div className="container-custom flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center gap-2"><Phone size={14} /> {companyInfo.phone[0]}</span>
                        <span className="flex items-center gap-2"><Mail size={14} /> {companyInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>Rayong, Thailand</span>
                    </div>
                </div>
            </div>

            <div className="container-custom">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <img src={logo} alt="B&J Engineering Logo" className="h-14 w-auto" />
                        <h1 className="text-2xl font-bold text-primary">B&J ENGINEERING</h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-secondary hover:text-accent font-medium transition-colors">Home</a>
                        <a href="#services" className="text-secondary hover:text-accent font-medium transition-colors">Services</a>
                        <a href="#products" className="text-secondary hover:text-accent font-medium transition-colors">Products</a>
                        <a href="#about" className="text-secondary hover:text-accent font-medium transition-colors">About Us</a>
                        <a href="#contact" className="btn-primary">Contact Us</a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-accent transition-colors">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <a href="#home" className="block px-3 py-2 text-secondary hover:text-accent hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#services" className="block px-3 py-2 text-secondary hover:text-accent hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Services</a>
                        <a href="#products" className="block px-3 py-2 text-secondary hover:text-accent hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Products</a>
                        <a href="#about" className="block px-3 py-2 text-secondary hover:text-accent hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>About Us</a>
                        <a href="#contact" className="block px-3 py-2 text-accent font-medium hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
