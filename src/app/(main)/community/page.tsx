"use client";

import React from 'react';
import Link from 'next/link';
import { FaComments, FaUsers, FaLaptopCode } from 'react-icons/fa';

export default function CommunityPage() {
  return (
    <div className="w-full flex justify-center mt-[64px] bg-wenza-page">
      <main className="w-full flex flex-col items-center overflow-hidden">
        
        {/* PAGE HEADER */}
        <section className="w-full bg-linear-to-r from-wenza-dark to-wenza-brown py-[48px] px-4 flex items-center justify-center text-center">
          <div className="max-w-3xl flex flex-col items-center">
            <h1 className="text-[40px] font-bold text-white font-lora mb-4">Join the Wenza Developer Community</h1>
            <p className="text-wenza-border text-[16px] leading-relaxed max-w-[560px] font-sans">
              Learn alongside 10,000+ Nigerian developers. Study groups, coding challenges, forums, and peer code reviews — because learning alone is hard.
            </p>
          </div>
        </section>

        {/* COMMUNITY FEATURES */}
        <section className="w-full bg-wenza-page py-[72px] px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col items-center">

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
               
               {/* 1. Forums */}
               <div className="bg-wenza-card border border-wenza-border rounded-[16px] p-[32px] flex flex-col items-center text-center shadow-sm relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wenza-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  <div className="w-14 h-14 bg-wenza-page border border-wenza-border rounded-full flex items-center justify-center text-wenza-primary text-2xl mb-6 relative z-10 shadow-sm group-hover:bg-wenza-primary group-hover:text-white transition-colors">
                    <FaComments size={20} />
                  </div>
                  <h3 className="text-[20px] font-bold text-wenza-brown mb-3 relative z-10">Discussion Forums</h3>
                  <p className="text-[15px] text-wenza-text leading-relaxed mb-8 flex-1 relative z-10">
                    Ask questions, share knowledge, and help others. Our forums cover every tech topic from Python basics to system design.
                  </p>
                  <button className="w-full h-11 border border-wenza-primary text-wenza-primary font-bold rounded-[8px] hover:bg-wenza-primary hover:text-white transition-colors relative z-10">
                    Browse Forums
                  </button>
               </div>

               {/* 2. Study Groups */}
               <div className="bg-wenza-card border border-wenza-border rounded-[16px] p-[32px] flex flex-col items-center text-center shadow-sm relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wenza-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  <div className="w-14 h-14 bg-wenza-page border border-wenza-border rounded-full flex items-center justify-center text-wenza-primary text-2xl mb-6 relative z-10 shadow-sm group-hover:bg-wenza-primary group-hover:text-white transition-colors">
                    <FaUsers size={20} />
                  </div>
                  <h3 className="text-[20px] font-bold text-wenza-brown mb-3 relative z-10">Study Groups</h3>
                  <p className="text-[15px] text-wenza-text leading-relaxed mb-8 flex-1 relative z-10">
                    Join a study group matched to your course and level. Weekly meetups, accountability partners, and group projects.
                  </p>
                  <button className="w-full h-11 border border-wenza-primary text-wenza-primary font-bold rounded-[8px] hover:bg-wenza-primary hover:text-white transition-colors relative z-10">
                    Find a Group
                  </button>
               </div>

               {/* 3. Coding Challenges */}
               <div className="bg-wenza-card border border-wenza-border rounded-[16px] p-[32px] flex flex-col items-center text-center shadow-sm relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wenza-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  <div className="w-14 h-14 bg-wenza-page border border-wenza-border rounded-full flex items-center justify-center text-wenza-primary text-2xl mb-6 relative z-10 shadow-sm group-hover:bg-wenza-primary group-hover:text-white transition-colors">
                    <FaLaptopCode size={20} />
                  </div>
                  <h3 className="text-[20px] font-bold text-wenza-brown mb-3 relative z-10">Coding Challenges</h3>
                  <p className="text-[15px] text-wenza-text leading-relaxed mb-8 flex-1 relative z-10">
                    Weekly coding challenges to sharpen your skills. Compete with other learners, earn badges, and build your profile.
                  </p>
                  <button className="w-full h-11 border border-wenza-primary text-wenza-primary font-bold rounded-[8px] hover:bg-wenza-primary hover:text-white transition-colors relative z-10">
                    Start a Challenge
                  </button>
               </div>

             </div>

          </div>
        </section>

        {/* COMMUNITY STATS */}
        <section className="w-full bg-white py-[72px] px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
               {[
                 { val: "10,000+", label: "Members" },
                 { val: "500+", label: "Study Groups" },
                 { val: "2,000+", label: "Forum Posts/Week" },
                 { val: "50+", label: "Weekly Challenges" }
               ].map((stat, idx) => (
                 <div key={idx} className="bg-wenza-card border border-wenza-border rounded-[12px] p-8 flex flex-col items-center text-center shadow-sm">
                   <span className="text-3xl md:text-[36px] font-bold text-wenza-brown font-lora mb-2">{stat.val}</span>
                   <span className="text-[14px] text-wenza-muted font-medium">{stat.label}</span>
                 </div>
               ))}
             </div>

          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-linear-to-r from-wenza-primary to-wenza-primary-hover py-[72px] px-4 md:px-8">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-[36px] font-bold text-white mb-4 font-lora">Community is Free for All Learners</h2>
            <p className="text-[16px] text-white/85 max-w-[480px] mb-8 leading-relaxed font-sans">
              Create your account and join today.
            </p>
            <Link href="/auth?mode=signup" className="w-full sm:w-auto">
              <button className="h-12 w-full sm:w-auto px-8 bg-wenza-gold text-wenza-brown font-bold rounded-[8px] hover:bg-white transition-colors shadow-lg shadow-wenza-bdark/10">
                Create Your Account
              </button>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
