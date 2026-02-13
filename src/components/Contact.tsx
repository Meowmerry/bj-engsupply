
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../data/services';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section-padding bg-slate-900 text-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                        <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                        <p className="text-gray-400 mb-10 text-lg">
                            Ready to start your project? Contact us today for a quote or consultation.
                            Our team is ready to assist you with your engineering needs.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <Phone className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Call Us</h4>
                                    <p className="text-gray-400">{companyInfo.phone[0]}</p>
                                    <p className="text-gray-400">{companyInfo.phone[1]}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <Mail className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Email Us</h4>
                                    <p className="text-gray-400">{companyInfo.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Location</h4>
                                    <p className="text-gray-400 max-w-xs">{companyInfo.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <Clock className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Working Hours</h4>
                                    <p className="text-gray-400">Mon - Sat: 8:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-8 text-gray-800">
                        <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Project Inquiry" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="button" className="w-full btn-primary mt-2">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
