import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_MENTORS } from './mockData';

const MentorList = () => {
    return (
        <section className="bg-wenza-page py-16 w-full font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl font-bold text-wenza-brown font-lora">Learn from Wenza Experts</h2>
                    <Link href="/mentorship" className="text-sm font-bold text-wenza-primary hover:text-wenza-primary-hover transition-colors">
                        Meet all mentors
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MOCK_MENTORS.map((mentor) => (
                        <div key={mentor.id} className="relative mt-8 bg-wenza-card rounded-[8px] p-6 shadow-wenza border border-transparent flex flex-col items-center group cursor-pointer hover:border-wenza-primary transition-colors">
                            {/* Avatar pushing up from the card */}
                            <div className="absolute -top-12 w-24 h-24 rounded-[20px] overflow-hidden border-4 border-wenza-bg bg-wenza-primary flex items-center justify-center font-bold text-white text-2xl group-hover:scale-110 transition-transform">
                                <Image src={mentor.image} alt={mentor.name} fill sizes="96px" className="object-cover" />
                            </div>
                            
                            <div className="mt-12 text-center w-full">
                                <h3 className="text-[18px] font-bold text-wenza-brown font-lora mb-3">
                                    {mentor.name}
                                </h3>
                                <p className="text-center text-wenza-muted text-[13px] leading-relaxed line-clamp-3 w-full max-w-[200px] mx-auto">
                                    {mentor.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentorList;
