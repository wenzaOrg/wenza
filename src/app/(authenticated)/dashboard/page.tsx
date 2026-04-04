"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBookOpen, FaUserTie, FaUsers, FaCertificate, FaCog, FaPlayCircle, FaCalendarAlt, FaVideo, FaStar } from 'react-icons/fa';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('My Learning');
  
  const navItems = [
    { name: 'My Learning', icon: <FaBookOpen /> },
    { name: 'Mentorship Sessions', icon: <FaUserTie /> },
    { name: 'Community Groups', icon: <FaUsers /> },
    { name: 'Certificates', icon: <FaCertificate /> },
    { name: 'Settings', icon: <FaCog /> }
  ];

  const recommendedCourses = [
    { title: "React & Next.js — Build Modern Web Apps", category: "Frontend", level: "Intermediate", duration: "10 weeks", rating: 4.7, color: "bg-blue-500" },
    { title: "Data Science with Python", category: "Data Science", level: "Intermediate", duration: "10 weeks", rating: 4.8, color: "bg-purple-600" },
    { title: "SQL & Relational Databases", category: "Backend", level: "Beginner", duration: "6 weeks", rating: 4.7, color: "bg-blue-600" }
  ];

  return (
    <div className="w-full flex justify-center mt-[64px] bg-wenza-page min-h-screen">
      
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:flex w-[260px] flex-col bg-white border-r border-wenza-border h-[calc(100vh-64px)] fixed left-0 top-[64px] py-8 px-4 z-10">
         <div className="flex flex-col items-center mb-8 pb-8 border-b border-wenza-border text-center px-4">
            <div className="w-16 h-16 rounded-full bg-wenza-bdark text-wenza-gold flex items-center justify-center font-bold text-2xl shadow-sm mb-3">
              JD
            </div>
            <h3 className="font-bold text-wenza-brown text-[16px]">John Doe</h3>
            <p className="text-[13px] text-wenza-muted">Student &bull; Joined Mar 2026</p>
         </div>

         <nav className="flex flex-col gap-2">
           {navItems.map(item => (
             <button 
               key={item.name}
               onClick={() => setActiveTab(item.name)}
               className={`flex items-center gap-3 h-11 px-4 rounded-[8px] text-[14px] font-medium transition-colors ${activeTab === item.name ? 'bg-wenza-primary/10 text-wenza-primary font-bold' : 'text-wenza-text hover:bg-wenza-card hover:text-wenza-brown'}`}
             >
               <span className={`text-[16px] ${activeTab === item.name ? 'text-wenza-primary' : 'text-wenza-muted'}`}>
                 {item.icon}
               </span>
               {item.name}
             </button>
           ))}
         </nav>

         <div className="mt-auto pt-6 border-t border-wenza-border">
           <Link href="/" className="flex items-center gap-3 h-11 px-4 rounded-[8px] text-[14px] font-medium text-wenza-text hover:bg-wenza-card hover:text-wenza-brown transition-colors">
              Log Out
           </Link>
         </div>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:pl-[260px] flex flex-col items-center">
         
         {/* Mobile Nav Select */}
         <div className="lg:hidden w-full bg-white border-b border-wenza-border p-4 sticky top-[64px] z-20 shadow-sm">
           <select 
             className="w-full h-11 border border-wenza-border rounded-[8px] px-4 font-bold text-wenza-brown bg-wenza-card appearance-none focus:outline-none focus:border-wenza-primary text-[14px]"
             value={activeTab}
             onChange={(e) => setActiveTab(e.target.value)}
           >
             {navItems.map(item => (
               <option key={item.name} value={item.name}>{item.name}</option>
             ))}
           </select>
         </div>

         <div className="w-full max-w-5xl mx-auto p-4 md:p-8 lg:p-10 flex flex-col gap-8">
            
            {activeTab === 'My Learning' && (
              <div className="animate-fade-in flex flex-col gap-8 w-full">
                
                {/* Greeting */}
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl font-bold text-wenza-brown font-lora text-center sm:text-left">Welcome back, John!</h1>
                  <p className="text-[15px] text-wenza-muted text-center sm:text-left">Ready to continue your tech journey today?</p>
                </div>

                {/* Dashboard Grid Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  
                  {/* Resume Learning Card (2/3 width) */}
                  <div className="md:col-span-2 bg-white border border-wenza-border rounded-[16px] p-6 shadow-sm flex flex-col sm:flex-row gap-6 relative overflow-hidden group hover:border-wenza-primary transition-colors">
                     <div className="w-full sm:w-[180px] aspect-video sm:aspect-square md:aspect-4/3 bg-green-700 rounded-[8px] flex flex-col items-center justify-center shrink-0 relative overflow-hidden">
                       <FaPlayCircle className="text-white/80 text-4xl mb-2 group-hover:scale-110 transition-transform shadow-lg rounded-full" />
                       <span className="text-white/80 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm bg-black/30 px-2 py-0.5 rounded-[100px]">Python</span>
                     </div>
                     <div className="flex flex-col flex-1 justify-center">
                        <span className="text-[12px] font-bold text-wenza-primary uppercase tracking-wider mb-1">Up Next</span>
                        <h3 className="text-[18px] font-bold text-wenza-brown mb-2 line-clamp-2">Module 4: Functions & Modules</h3>
                        <p className="text-[14px] text-wenza-text mb-5 line-clamp-1">Python for Absolute Beginners</p>
                        
                        <div className="w-full flex flex-col gap-1.5 mt-auto">
                          <div className="flex justify-between items-end text-[12px] font-medium text-wenza-muted">
                            <span>45% Complete</span>
                            <span>19/42 Lessons</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-wenza-border overflow-hidden">
                            <div className="h-full bg-wenza-primary" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                     </div>
                  </div>

                  {/* Upcoming Mentorship Card (1/3 width) */}
                  <div className="md:col-span-1 bg-linear-to-br from-wenza-card to-white border border-wenza-primary/30 rounded-[16px] p-6 shadow-sm flex flex-col relative overflow-hidden">
                     <div className="flex items-center justify-between mb-4">
                       <span className="text-[12px] font-bold text-wenza-primary uppercase tracking-wider bg-wenza-primary/10 px-2.5 py-1.5 rounded-[100px]">Next Session</span>
                       <FaCalendarAlt className="text-wenza-primary/50 text-xl" />
                     </div>
                     <h3 className="text-[18px] font-bold text-wenza-brown mb-1">Code Review & Mentorship</h3>
                     <div className="text-[13px] text-wenza-muted mb-6 flex items-center gap-1.5">
                       <div className="w-5 h-5 rounded-full bg-wenza-bdark text-white flex items-center justify-center text-[10px] font-bold">CO</div> With Chidi Okonkwo
                     </div>
                     
                     <div className="mt-auto bg-white border border-wenza-border rounded-[8px] p-3 border-l-4 border-l-wenza-primary flex flex-col gap-0.5 relative shadow-sm">
                       <span className="text-[13px] font-bold text-wenza-brown">Tomorrow</span>
                       <span className="text-[12px] text-wenza-primary font-medium">4:00 PM - 5:00 PM WAT</span>
                     </div>
                     <button className="w-full h-10 mt-3 rounded-[8px] border border-wenza-primary text-wenza-primary font-bold text-[13px] hover:bg-wenza-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                       <FaVideo /> Join Call
                     </button>
                  </div>

                </div>

                {/* Recommended Courses Grid */}
                <div className="w-full flex flex-col mt-4">
                   <div className="flex justify-between items-end mb-6">
                     <h2 className="text-[22px] font-bold text-wenza-brown font-lora">Recommended For You</h2>
                     <Link href="/courses" className="text-[13px] font-medium text-wenza-primary hover:underline">
                       Browse All Catalog
                     </Link>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {recommendedCourses.map((c, idx) => (
                        <Link href={`/courses/${idx + 1}`} key={idx} className="bg-white border border-wenza-border rounded-[12px] overflow-hidden hover:border-wenza-primary hover:-translate-y-1 transition-transform shadow-sm flex flex-col group">
                           <div className={`w-full h-32 ${c.color} flex items-center justify-center text-white/50 relative shadow-inner`}>
                              <div className="absolute top-3 left-3 bg-black/50 text-white text-[10px] px-2 py-1 rounded-[100px] font-medium tracking-wider uppercase backdrop-blur-sm">
                                {c.level}
                              </div>
                              <FaPlayCircle className="text-4xl text-white/80 group-hover:scale-110 transition-transform shadow-lg rounded-full" />
                           </div>
                           <div className="p-5 flex flex-col flex-1">
                              <span className="text-[10px] bg-wenza-page text-wenza-primary px-2 py-0.5 rounded-[100px] font-bold uppercase tracking-wider w-fit mb-2">
                                {c.category}
                              </span>
                              <h3 className="text-[15px] font-bold text-wenza-brown mb-1 line-clamp-2 leading-tight group-hover:text-wenza-primary transition-colors flex-1">
                                {c.title}
                              </h3>
                              <p className="text-[12px] text-wenza-muted mb-4">
                                {c.duration}
                              </p>
                              <div className="pt-3 border-t border-wenza-border flex justify-between items-center">
                                 <div className="flex items-center gap-1.5">
                                   <FaStar className="text-wenza-gold text-[12px]" />
                                   <span className="text-[12px] font-bold text-wenza-brown tracking-tight">{c.rating}</span>
                                 </div>
                                 <span className="text-[12px] font-bold text-wenza-primary hover:underline">View Course</span>
                              </div>
                           </div>
                        </Link>
                      ))}
                   </div>
                </div>

              </div>
            )}

            {activeTab !== 'My Learning' && (
              <div className="w-full min-h-[400px] flex flex-col items-center justify-center text-center bg-white border border-wenza-border rounded-[16px] shadow-sm animate-fade-in p-8">
                <div className="w-20 h-20 rounded-full bg-wenza-page flex items-center justify-center text-wenza-primary text-3xl mb-4">
                  {navItems.find(i => i.name === activeTab)?.icon}
                </div>
                <h2 className="text-[24px] font-bold text-wenza-brown font-lora mb-2">{activeTab}</h2>
                <p className="text-[15px] text-wenza-muted max-w-[400px]">
                  This section of your dashboard is currently under construction. Please check back later!
                </p>
              </div>
            )}

         </div>
      </main>
    </div>
  );
}
