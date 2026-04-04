/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function CourseOverviewContent({ course, activeTab }: { course: any, activeTab: string }) {
    if (activeTab === 'Curriculum') {
        return (
            <div className="bg-wenza-card border border-wenza-border shadow-wenza rounded-[32px] p-8 md:p-12 font-sans w-full">
                <h3 className="text-3xl font-bold text-wenza-brown font-lora mb-8">Course Curriculum</h3>
                <ul className="space-y-4">
                    {course.curriculum?.map((item: string, i: number) => (
                        <li key={i} className="flex gap-5 items-center p-5 bg-white rounded-2xl shadow-sm border border-transparent hover:border-wenza-primary/30 transition-colors cursor-default">
                            <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-wenza-bg text-wenza-primary font-black text-lg">{i+1}</span>
                            <p className="font-bold text-wenza-brown text-[16px]">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    if (activeTab === 'Meet the Mentor') {
         return (
             <div className="bg-wenza-card border border-wenza-border shadow-wenza rounded-[32px] p-8 md:p-12 font-sans w-full flex flex-col md:flex-row gap-8 items-start">
                 <div className="relative w-40 h-40 rounded-[32px] overflow-hidden shrink-0 border-4 border-white shadow-wenza bg-wenza-primary rotate-3 hover:rotate-0 transition-transform duration-500">
                    {course.mentorAvatar && (
                        <Image src={course.mentorAvatar} alt={course.mentorName} fill sizes="160px" className="object-cover" />
                    )}
                </div>
                <div className="pt-2">
                    <h3 className="text-[12px] font-black tracking-widest uppercase text-wenza-primary mb-2">Your Wenza Mentor</h3>
                    <h4 className="text-4xl font-extrabold text-wenza-brown font-lora mb-4">{course.mentorName}</h4>
                    <p className="text-wenza-text leading-loose text-lg font-medium">{course.mentorBio}</p>
                </div>
            </div>
         );
    }

    if (activeTab === 'Reviews') {
        return (
            <div className="bg-wenza-card border border-wenza-border shadow-wenza rounded-[32px] p-8 md:p-12 font-sans w-full space-y-8">
                <div className="flex items-center gap-4">
                    <FaStar className="text-wenza-gold text-4xl" />
                    <h3 className="text-3xl font-bold text-wenza-brown font-lora">Student Feedback</h3>
                </div>
                <p className="text-wenza-muted text-lg font-medium leading-loose">
                    This course has received a stellar average rating from our global community of engineering students. We constantly update the course materials based on direct feedback from Wenza alumni.
                </p>
            </div>
        );
    }

    // Default: 'Overview'
    return (
        <div className="bg-wenza-card border border-wenza-border shadow-wenza rounded-[32px] p-8 md:p-10 lg:p-14 font-sans w-full flex flex-col gap-14">
            
            {/* Top Info Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-wenza-border/50">
                <h2 className="text-3xl md:text-5xl font-extrabold text-wenza-brown font-lora leading-tight">
                    {course.title}
                </h2>
                <div className="shrink-0 bg-wenza-bg px-6 py-4 rounded-2xl shadow-sm text-center">
                    <div className="text-3xl font-black text-wenza-brown mb-1">{course.stars}</div>
                    <div className="flex gap-1 text-wenza-gold text-sm mb-1 justify-center">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300"/>
                    </div>
                    <div className="text-[11px] font-bold text-wenza-muted uppercase tracking-widest">{course.reviewsCount}+ Reviews</div>
                </div>
            </div>

            {/* Aggregated Reviews Mockup UI from screenshot */}
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between border-b border-wenza-border/50 pb-14 -mt-4">
                <div className="bg-wenza-bg rounded-[24px] p-8 flex flex-col items-center justify-center shrink-0 w-full md:w-[260px] shadow-sm transform -rotate-2">
                    <span className="text-5xl font-black text-wenza-brown mb-3">{course.stars} <span className="text-2xl text-wenza-muted font-bold">out of 5</span></span>
                    <div className="flex gap-1.5 text-wenza-gold mb-4 text-2xl">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-wenza-gold"/>
                    </div>
                    <span className="text-sm font-bold text-wenza-muted uppercase tracking-widest">Top Rating</span>
                </div>
                
                <div className="flex-1 w-full space-y-5 max-w-sm">
                    {[5, 4, 3, 2, 1].map((num) => (
                        <div key={num} className="flex items-center gap-5 text-[15px] font-bold text-wenza-muted">
                            <span className="w-16 shrink-0">{num} Stars</span>
                            <div className="flex-1 h-3 bg-wenza-bg rounded-full overflow-hidden">
                                <div className="h-full bg-wenza-primary rounded-full" style={{ width: `${Math.max(10, num * 20 - 15)}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* About / Description matching the mentor comments in mockup */}
            <div className="flex flex-col gap-10">
                <div className="space-y-6">
                    <div className="flex justify-between items-start">
                         <div className="flex items-center gap-4">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-wenza-primary">
                                <Image src={course.mentorAvatar} alt={course.mentorName} fill sizes="56px" className="object-cover" />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-wenza-brown text-xl mb-1">{course.mentorName}</h4>
                                <div className="flex gap-1 text-wenza-gold text-sm">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-wenza-gold" />
                                </div>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-wenza-muted bg-white/60 px-4 py-2 rounded-full flex items-center gap-2">
                             ⏱ {course.duration}
                        </span>
                    </div>
                    <p className="text-wenza-text font-medium leading-loose md:pr-12 text-[17px]">
                        {course.about}
                    </p>
                </div>
            </div>
        </div>
    );
}
