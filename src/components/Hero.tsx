
import React from 'react';
import { ArrowRight } from 'lucide-react';
import videoBg from '../assets/video_bg.mp4';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-primary/70 z-10" />

            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={videoBg} type="video/mp4" />
            </video>

            <div className="container-custom relative z-20 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in">
                    Precision Engineering <br className="hidden md:block" />
                    <span className="text-accent">Solutions & Supply</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-slide-up">
                    Expert CNC Machining, Metal Fabrication, and Industrial Maintenance Services in Rayong, Thailand.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <a href="#contact" className="btn-primary flex items-center gap-2 group">
                        Get a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#services" className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200">
                        Our Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
