
import React from 'react';
import { companyInfo } from '../data/services';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900">
            <div className="container-custom text-center">
                <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-6 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
