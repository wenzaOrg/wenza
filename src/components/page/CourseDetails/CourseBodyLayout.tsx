/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from 'react';
import CourseSidebar from './CourseSidebar';
import CourseOverviewContent from './CourseOverviewContent';

export default function CourseBodyLayout({ course }: { course: any }) {
    const [activeTab, setActiveTab] = useState('Overview');
    const tabs = ['Overview', 'Curriculum', 'Reviews', 'Meet the Mentor'];

    return (
        <section className="w-full max-w-7xl mx-auto px-6 md:px-16 -mt-20 md:-mt-32 relative z-10 flex flex-col lg:flex-row gap-10">
            
            {/* Left Main Content */}
            <div className="flex-1 flex flex-col gap-8">
                {/* Tabs Row */}
                <div className="flex flex-wrap gap-3 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-wenza-border/50 self-start">
                    {tabs.map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 md:px-10 h-10 rounded-xl text-[14px] font-bold transition-all shadow-sm ${
                                activeTab === tab 
                                ? 'bg-wenza-primary text-white scale-105' 
                                : 'bg-wenza-card text-wenza-muted hover:text-wenza-brown hover:bg-gray-100'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <CourseOverviewContent course={course} activeTab={activeTab} />
            </div>
            
            {/* Right Sticky Sidebar */}
            <div className="w-full lg:w-[380px] shrink-0">
                <div className="sticky top-[100px]">
                    <CourseSidebar course={course} />
                </div>
            </div>
        </section>
    );
}
