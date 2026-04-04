"use client";

import React from 'react';
import Link from 'next/link';
import { FaStar, FaSearch, FaCalendarCheck, FaVideo, FaRocket, FaCheck } from 'react-icons/fa';

export default function MentorshipPage() {
  const mentors = [
    { name: "Chidi Okonkwo", role: "Senior Software Engineer", spec: "Python, Django, Data Science", rating: 4.9, sessions: 187, initials: "CO" },
    { name: "Fatima Ibrahim", role: "Lead Frontend Developer", spec: "React, Next.js, TypeScript", rating: 4.8, sessions: 142, initials: "FI" },
    { name: "Emeka Nwankwo", role: "ML Engineer", spec: "Machine Learning, Python, TensorFlow", rating: 4.9, sessions: 98, initials: "EN" },
    { name: "Aisha Bello", role: "Full-Stack Developer", spec: "Node.js, React, MongoDB", rating: 4.7, sessions: 164, initials: "AB" }
  ];

  return (
    <div className="w-full flex justify-center mt-[64px] bg-wenza-page min-h-screen">
      <main className="w-full flex flex-col items-center overflow-hidden">
        
        {/* PAGE HEADER */}
        <section className="w-full bg-linear-to-r from-[#1A1008] to-[#3D2010] py-20 px-6 md:px-16 flex items-center justify-center text-center">
          <div className="max-w-3xl flex flex-col items-center">
            <h1 className="text-[36px] md:text-[48px] font-bold text-white font-lora mb-6 leading-tight">1-on-1 Live Mentorship</h1>
            <p className="text-wenza-border text-[16px] md:text-[18px] leading-relaxed max-w-[620px] font-medium opacity-90">
              Get personal guidance from Wenza&apos;s senior developers. Code reviews, career advice, debugging help, or guided learning — whatever you need to level up.
            </p>
          </div>
        </section>

        {/* OUR MENTORS */}
        <section className="w-full bg-wenza-bg py-[80px] px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
             
             <div className="text-center mb-16">
                <h2 className="text-[32px] md:text-[40px] font-bold text-wenza-brown font-lora mb-4">Our Mentors</h2>
                <p className="text-[16px] md:text-[18px] text-wenza-muted max-w-[600px] mx-auto leading-relaxed">
                  Experienced developers who&apos;ve been where you are. They&apos;ll help you get where you want to go.
                </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
               {mentors.map((mentor, idx) => (
                 <div key={idx} className="bg-white border border-wenza-border rounded-[16px] p-8 flex flex-col items-center text-center hover:border-wenza-primary hover:shadow-xl transition-all duration-300 relative group">
                    <div className="absolute top-4 right-4 w-3.5 h-3.5 rounded-full bg-wenza-success border-2 border-white shadow-sm" title="Online" />
                    
                    <div className="w-[84px] h-[84px] rounded-full border-[3.5px] border-[#D0A050] bg-wenza-bdark text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md transition-transform group-hover:scale-105">
                      {mentor.initials}
                    </div>
                    
                    <h3 className="text-[19px] font-bold text-wenza-brown mb-1">{mentor.name}</h3>
                    <p className="text-[14px] font-bold text-wenza-primary mb-3 uppercase tracking-wider">{mentor.role}</p>
                    <p className="text-[14px] text-wenza-muted mb-6 leading-relaxed line-clamp-2 h-[40px] px-2 font-medium">{mentor.spec}</p>
                    
                    <div className="flex items-center gap-1.5 mb-8 bg-wenza-page/50 px-4 py-1.5 rounded-full">
                       <FaStar className="text-[#D0A050] text-sm" />
                       <span className="text-[14px] font-black text-wenza-brown">{mentor.rating}</span>
                       <span className="text-[13px] text-wenza-muted font-bold ml-1">({mentor.sessions} sessions)</span>
                    </div>
                    
                    <Link href="/auth?mode=signup" className="w-full mt-auto">
                       <button className="w-full h-11 bg-wenza-primary text-white font-bold rounded-[10px] hover:bg-wenza-primary-hover shadow-lg shadow-wenza-primary/10 transition-all text-sm">
                         Book Session
                       </button>
                    </Link>
                 </div>
               ))}
             </div>

          </div>
        </section>

        {/* HOW MENTORSHIP WORKS */}
        <section className="w-full bg-white py-[80px] px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            
            <div className="text-center mb-16">
                <h2 className="text-[32px] md:text-[40px] font-bold text-wenza-brown font-lora mb-4">How It Works</h2>
                <p className="text-[16px] text-wenza-muted max-w-[500px]">Simple steps to start your personalized learning journey.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
               {[
                 { icon: <FaSearch />, title: "Pick a Mentor", desc: "Browse mentors by specialty and read reviews from other learners" },
                 { icon: <FaCalendarCheck />, title: "Book a Time", desc: "Choose a 30 or 60-minute slot that works for your schedule" },
                 { icon: <FaVideo />, title: "Join the Call", desc: "Connect via video call with screen sharing for code reviews" },
                 { icon: <FaRocket />, title: "Level Up", desc: "Get actionable feedback, resources, and a clear next step" }
               ].map((step, idx) => (
                 <div key={idx} className="bg-wenza-card border border-wenza-border rounded-[20px] p-8 flex flex-col items-center text-center relative group hover:border-wenza-primary transition-all duration-300">
                    <div className="absolute -top-4 left-10 w-9 h-9 rounded-full bg-wenza-bdark text-[#D0A050] font-black flex items-center justify-center text-[15px] border-2 border-white shadow-md z-10 transition-transform group-hover:scale-110">
                      {idx + 1}
                    </div>
                    <div className="w-16 h-16 rounded-[18px] bg-white flex items-center justify-center text-wenza-primary text-3xl mb-7 mt-2 shadow-sm border border-wenza-border/50">
                       {step.icon}
                    </div>
                    <h3 className="text-[19px] font-bold text-wenza-brown mb-3">{step.title}</h3>
                    <p className="text-[15px] text-wenza-text leading-relaxed font-medium">
                      {step.desc}
                    </p>
                 </div>
               ))}
            </div>

          </div>
        </section>

        {/* MENTORSHIP PRICING */}
        <section className="w-full bg-wenza-card py-[100px] px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
             
             <div className="text-center mb-16">
                <h2 className="text-[32px] md:text-[40px] font-bold text-wenza-brown font-lora mb-4">Mentorship Pricing</h2>
                <p className="text-[16px] text-wenza-muted">Affordable expert guidance tailored to your needs.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1100px] relative items-center">
                
                {/* 1. Single Session */}
                <div className="bg-white border border-wenza-border rounded-[24px] p-10 flex flex-col shadow-sm h-full hover:shadow-md transition-shadow">
                   <h2 className="text-[20px] font-bold text-wenza-brown mb-2">Single Session</h2>
                   <div className="flex items-baseline gap-1 mb-2">
                     <span className="text-[44px] font-bold text-wenza-brown font-lora leading-none">₦5,000</span>
                   </div>
                   <p className="text-[14px] font-bold text-wenza-muted mb-10">60 minutes, 1-on-1</p>
                   
                   <div className="flex flex-col gap-5 mb-10 flex-1">
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span>Code review & feedback</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span>Career & roadmap advice</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span>Live debugging help</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span>Personal learning guidance</span>
                     </div>
                   </div>

                   <Link href="/auth?mode=signup" className="w-full mt-auto">
                     <button className="w-full h-12 rounded-[12px] font-bold border-2 border-wenza-primary text-wenza-primary hover:bg-wenza-primary hover:text-white transition-all duration-300">
                       Choose Single
                     </button>
                   </Link>
                </div>

                {/* 2. 4-Session Pack (Highlighted) */}
                <div className="bg-white border-[3px] border-wenza-primary rounded-[28px] p-11 flex flex-col relative shadow-[0_20px_50px_rgba(176,80,16,0.12)] z-10 md:scale-105 min-h-[580px]">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-wenza-primary text-white text-[12px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg border-2 border-white">
                     Best Value
                   </div>

                   <h2 className="text-[22px] font-bold text-wenza-brown mb-2 mt-4 text-center md:text-left">4-Session Pack</h2>
                   <div className="flex items-baseline gap-1 mb-2 justify-center md:justify-start">
                     <span className="text-[52px] font-bold text-wenza-primary font-lora leading-none">₦18,000</span>
                   </div>
                   <p className="text-[15px] text-wenza-primary font-black mb-10 text-center md:text-left tracking-wide">SAVE ₦2,000</p>
                   
                   <div className="flex flex-col gap-5 mb-10 flex-1">
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-bold">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span>Everything in Single</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-bold">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span className="text-wenza-brown underline decoration-wenza-primary/30">Priority booking access</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span>WhatsApp follow-up support</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span>Digital session notes</span>
                     </div>
                   </div>

                   <Link href="/auth?mode=signup" className="w-full mt-auto">
                     <button className="w-full h-14 rounded-[14px] font-black bg-wenza-primary text-white hover:bg-wenza-primary-hover shadow-xl shadow-wenza-primary/30 transition-all duration-300 uppercase tracking-wider text-[15px]">
                       Choose 4-Pack
                     </button>
                   </Link>
                </div>

                {/* 3. 8-Session Pack */}
                <div className="bg-white border border-wenza-border rounded-[24px] p-10 flex flex-col shadow-sm h-full hover:shadow-md transition-shadow">
                   <h2 className="text-[20px] font-bold text-wenza-brown mb-2">8-Session Pack</h2>
                   <div className="flex items-baseline gap-1 mb-2">
                     <span className="text-[44px] font-bold text-wenza-brown font-lora leading-none tracking-tight">₦32,000</span>
                   </div>
                   <p className="text-[14px] font-bold text-wenza-muted mb-10">SAVE ₦8,000</p>
                   
                   <div className="flex flex-col gap-5 mb-10 flex-1">
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-bold">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span>Everything in 4-Pack</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-bold">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span className="text-wenza-brown underline decoration-wenza-primary/30">Dedicated senior mentor</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span>Comprehensive project reviews</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheck className="text-wenza-success shrink-0 mt-1" /> <span>Customized career roadmap</span>
                     </div>
                   </div>

                   <Link href="/auth?mode=signup" className="w-full mt-auto">
                     <button className="w-full h-12 rounded-[12px] font-bold border-2 border-wenza-primary text-wenza-primary hover:bg-wenza-primary hover:text-white transition-all duration-300">
                       Choose 8-Pack
                     </button>
                   </Link>
                </div>

             </div>

          </div>
        </section>

      </main>
    </div>
  );
}
