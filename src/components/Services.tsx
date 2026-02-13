
import React from 'react';
import { services } from '../data/services';

const Services: React.FC = () => {
    return (
        <section id="services" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-secondary max-w-2xl mx-auto text-lg">
                        We provide comprehensive engineering solutions with high precision and quality assurance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                                    <Icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                                <p className="text-secondary mb-4 leading-relaxed">{service.description}</p>

                                {service.details && (
                                    <ul className="space-y-2">
                                        {service.details.map((detail, index) => (
                                            <li key={index} className="flex items-center text-sm text-secondary">
                                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
