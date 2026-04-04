"use client";

import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full flex justify-center mt-[64px] bg-wenza-page">
      <main className="w-full flex flex-col items-center overflow-hidden">
        
        {/* HEADER */}
        <section className="w-full bg-wenza-brown py-[48px] px-4 flex items-center justify-center text-center">
          <div className="max-w-3xl flex flex-col items-center">
            <h1 className="text-[40px] font-bold text-white font-lora mb-3">Get in Touch</h1>
            <p className="text-wenza-border text-[16px] leading-relaxed max-w-[600px] font-sans">
              Questions about courses, mentorship, or your account? We typically respond within 24 hours.
            </p>
          </div>
        </section>

        {/* TWO-COLUMN LAYOUT */}
        <section className="w-full bg-wenza-page py-[72px] px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-12">
             
             {/* Left (55%) - Contact Form */}
             <div className="w-full md:w-[55%] bg-white border border-wenza-border rounded-[16px] p-[36px] shadow-sm">
                <h2 className="text-[20px] font-semibold text-wenza-brown mb-6 font-sans">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                   
                   <div className="flex flex-col gap-1.5">
                     <label htmlFor="name" className="text-[14px] font-medium text-wenza-brown">Full Name</label>
                     <input 
                       id="name"
                       name="name"
                       type="text" 
                       value={formData.name}
                       onChange={handleChange}
                       className="w-full h-12 border border-wenza-border rounded-[8px] px-4 bg-wenza-card focus:outline-none focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary transition-colors text-[15px]" 
                       placeholder="Enter your full name"
                       required
                     />
                   </div>

                   <div className="flex flex-col gap-1.5">
                     <label htmlFor="email" className="text-[14px] font-medium text-wenza-brown">Email Address</label>
                     <input 
                       id="email"
                       name="email"
                       type="email"
                       value={formData.email}
                       onChange={handleChange}
                       className="w-full h-12 border border-wenza-border rounded-[8px] px-4 bg-wenza-card focus:outline-none focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary transition-colors text-[15px]" 
                       placeholder="hello@example.com"
                       required
                     />
                   </div>

                   <div className="flex flex-col gap-1.5">
                     <label htmlFor="subject" className="text-[14px] font-medium text-wenza-brown">Subject</label>
                     <div className="relative">
                       <select 
                         id="subject"
                         name="subject"
                         value={formData.subject}
                         onChange={handleChange}
                         className="w-full h-12 border border-wenza-border rounded-[8px] px-4 bg-wenza-card focus:outline-none focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary transition-colors text-[15px] appearance-none"
                       >
                         <option value="General Inquiry">General Inquiry</option>
                         <option value="Course Help">Course Help</option>
                         <option value="Mentorship Question">Mentorship Question</option>
                         <option value="Payment Issue">Payment Issue</option>
                         <option value="Technical Problem">Technical Problem</option>
                         <option value="Partnership">Partnership</option>
                       </select>
                       <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-wenza-muted pointer-events-none text-[12px]" />
                     </div>
                   </div>

                   <div className="flex flex-col gap-1.5">
                     <label htmlFor="message" className="text-[14px] font-medium text-wenza-brown">Your Message</label>
                     <textarea 
                       id="message"
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       rows={5}
                       className="w-full border border-wenza-border rounded-[8px] p-4 bg-wenza-card focus:outline-none focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary transition-colors resize-none text-[15px]" 
                       placeholder="How can we help you?"
                       required
                     />
                   </div>

                   <button 
                     type="submit" 
                     className="w-full h-12 bg-wenza-primary hover:bg-wenza-primary-hover text-white font-bold rounded-[8px] transition-colors mt-2"
                   >
                     Send Message
                   </button>

                   <p className="text-[13px] text-wenza-muted text-center mt-2">
                     We respond within 24 hours — usually much faster.
                   </p>

                </form>
             </div>

             {/* Right (45%) - Contact Info */}
             <div className="w-full md:w-[45%] flex flex-col gap-5">
                
                <div className="bg-wenza-card border border-wenza-border rounded-[12px] p-6 flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-wenza-page flex items-center justify-center text-wenza-primary text-xl shrink-0">
                     <FaEnvelope />
                   </div>
                   <div className="flex flex-col">
                     <h3 className="text-[18px] font-bold text-wenza-brown mb-1">Email Us</h3>
                     <a href="mailto:hello@wenza.ng" className="text-[15px] text-wenza-primary font-medium hover:underline mb-1">
                       hello@wenza.ng
                     </a>
                     <p className="text-[14px] text-wenza-muted">For general inquiries</p>
                   </div>
                </div>

                <div className="bg-wenza-card border border-wenza-border rounded-[12px] p-6 flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-wenza-page flex items-center justify-center text-[#25D366] text-xl shrink-0">
                     <FaWhatsapp />
                   </div>
                   <div className="flex flex-col">
                     <h3 className="text-[18px] font-bold text-wenza-brown mb-1">WhatsApp</h3>
                     <a href="https://wa.me/2348000000000" className="text-[15px] text-[#25D366] font-medium hover:underline mb-1">
                       +234 800 WENZA
                     </a>
                     <p className="text-[14px] text-wenza-muted">Mon-Fri 9am-6pm WAT</p>
                   </div>
                </div>

                <div className="bg-wenza-card border border-wenza-border rounded-[12px] p-6 flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-wenza-page flex items-center justify-center text-wenza-primary text-xl shrink-0">
                     <FaMapMarkerAlt />
                   </div>
                   <div className="flex flex-col">
                     <h3 className="text-[18px] font-bold text-wenza-brown mb-1">Location</h3>
                     <p className="text-[15px] text-wenza-brown font-medium mb-1">Lagos, Nigeria</p>
                     <p className="text-[14px] text-wenza-muted">Remote-first team</p>
                   </div>
                </div>

             </div>

          </div>
        </section>

      </main>
    </div>
  );
}
