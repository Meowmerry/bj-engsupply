
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/services';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const mailtoSubject = encodeURIComponent(formData.subject || 'Website Inquiry');
        const mailtoBody = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );

        window.location.href = `mailto:${companyInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

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
                                    <a href={`tel:${companyInfo.phone[0].replace(/-/g, '')}`} className="text-gray-400 hover:text-accent transition-colors block">{companyInfo.phone[0]}</a>
                                    <a href={`tel:${companyInfo.phone[1].replace(/-/g, '')}`} className="text-gray-400 hover:text-accent transition-colors block">{companyInfo.phone[1]}</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <Mail className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Email Us</h4>
                                    <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-accent transition-colors">{companyInfo.email}</a>
                                </div>
                            </div>

                            <a href="https://www.google.com/maps/search/B%26J+Engineering+and+Supply+54%2F58+Ratbamrung+Road+Huai+Pong+Rayong+21150" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                                <div className="w-10 h-10 bg-white/10 group-hover:bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-colors">
                                    <MapPin className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Location</h4>
                                    <p className="text-gray-400 max-w-xs group-hover:text-accent transition-colors">{companyInfo.address}</p>
                                </div>
                            </a>

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

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                <h4 className="text-xl font-bold text-primary mb-2">Opening your email client...</h4>
                                <p className="text-secondary">Your message is ready to send to {companyInfo.email}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full btn-primary mt-2 flex items-center justify-center gap-2">
                                    <Send className="w-4 h-4" /> Send Message
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
