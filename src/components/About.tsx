
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About B&J Engineering</h2>
                        <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>

                        <p className="text-secondary text-lg mb-6 leading-relaxed">
                            B&J ENGINEERING AND SUPPLY CO.,LTD. is a leading provider of industrial engineering services in Rayong, Thailand.
                            We specialize in precision CNC machining, metal fabrication, and comprehensive maintenance solutions for industrial facilities.
                        </p>

                        <p className="text-secondary text-lg mb-8 leading-relaxed">
                            Our team of skilled technicians and engineers is dedicated to delivering high-quality workmanship and reliable service
                            to ensure your operations run smoothly and efficiently.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-accent mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary">High Precision</h4>
                                    <p className="text-gray-500 text-sm">State-of-the-art CNC technology for exact specifications.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-accent mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary">Experienced Team</h4>
                                    <p className="text-gray-500 text-sm">Skilled professionals with years of industry experience.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-accent mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary">Comprehensive Solutions</h4>
                                    <p className="text-gray-500 text-sm">From design to fabrication and maintenance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform rotate-3"></div>
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="Industrial Engineering"
                            className="relative rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
