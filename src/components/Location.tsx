
import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { companyInfo } from '../data/services';
import locationImg from '../assets/location.png';

const Location: React.FC = () => {
    return (
        <section id="location" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Location Map</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-secondary max-w-2xl mx-auto text-lg">
                        Visit us at our facility in Rayong, Thailand.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6">
                        <h3 className="text-xl font-bold text-primary mb-4">{companyInfo.name}</h3>

                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <p className="text-secondary text-sm leading-relaxed">{companyInfo.address}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                            <div className="text-secondary text-sm">
                                <p>{companyInfo.phone[0]}</p>
                                <p>{companyInfo.phone[1]}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                            <p className="text-secondary text-sm">{companyInfo.email}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                            <p className="text-secondary text-sm">{companyInfo.website}</p>
                        </div>
                    </div>

                    {/* Location Map Image */}
                    <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <img
                            src={locationImg}
                            alt="B&J Engineering Location Map"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
