import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MOCK_IN_PROGRESS } from './mockData';

const WelcomeBack = () => {
    return (
        <section className="w-full bg-wenza-page py-[72px] px-6 md:px-16 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-wenza-brown font-lora">Welcome back, ready for your next lesson?</h2>
                    <Link href="/dashboard/history" className="text-sm font-bold text-wenza-primary hover:text-wenza-primary-hover transition-colors">
                        View history
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {MOCK_IN_PROGRESS.map((course) => (
                        <div key={course.id} className="bg-wenza-card rounded-[20px] p-5 shadow-wenza border border-transparent hover:border-wenza-primary transition-colors cursor-pointer group flex flex-col h-full">
                            <div className="relative w-full aspect-video rounded-[12px] overflow-hidden mb-4">
                                <Image 
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            
                            <h3 className="text-[16px] font-bold text-wenza-brown font-lora leading-snug mb-3">
                                {course.title}
                            </h3>
                            
                            <div className="flex items-center gap-2 mb-6">
                                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-wenza-border bg-wenza-primary flex items-center justify-center font-bold text-white text-[10px]">
                                    <Image src={course.mentorAvatar} alt={course.mentorName} fill sizes="24px" className="object-cover" />
                                </div>
                                <span className="text-[12px] font-semibold text-wenza-brown">{course.mentorName}</span>
                            </div>

                            <div className="mt-auto">
                                <div className="w-full h-1 bg-wenza-border rounded-full overflow-hidden mb-2">
                                    <div 
                                        className="h-full bg-[#3AC6BE] rounded-full" 
                                        style={{ width: `${course.progressPercent}%` }}
                                    ></div>
                                </div>
                                <p className="text-right text-[11px] text-wenza-muted font-semibold tracking-wide uppercase">
                                    {course.progressText}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end gap-2 mt-8">
                    <button className="w-8 h-8 flex items-center justify-center bg-[#bdede9] text-wenza-primary rounded hover:bg-opacity-80 transition-colors">
                        <FaChevronLeft className="text-[12px]" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-[#3AC6BE] text-white rounded shadow-sm hover:bg-opacity-90 transition-opacity">
                        <FaChevronRight className="text-[12px]" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WelcomeBack;
