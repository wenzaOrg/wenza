/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function CourseSidebar({ course }: { course: any }) {
    return (
        <div className="bg-wenza-card rounded-[24px] shadow-wenza border border-wenza-border/50 overflow-hidden flex flex-col font-sans relative">
            {/* Tag */}
            <div className="absolute top-4 left-4 z-10 bg-wenza-bg text-[10px] font-black tracking-widest uppercase text-wenza-brown px-3 py-1 rounded-sm">
                {course.category}
            </div>

            {/* Mini thumbnail */}
            <div className="relative w-full aspect-video">
                <Image src={course.image} alt={course.title} fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover" />
            </div>

            <div className="p-8 flex flex-col">
                <div className="flex items-end gap-4 mb-2">
                    <span className="text-4xl font-extrabold text-wenza-primary font-sans">{course.price}</span>
                    <span className="text-xl font-bold text-wenza-muted line-through pb-1 decoration-2 decoration-wenza-error/60">{course.oldPrice}</span>
                </div>
                
                <span className="text-sm font-bold text-wenza-gold tracking-wide uppercase mb-7">★ Wenza Standard Pricing</span>
                
                <button className="w-full h-[60px] bg-wenza-primary hover:brightness-110 transition-all hover:scale-[1.02] active:scale-95 rounded-xl text-white font-bold text-[17px] mb-8 shadow-md">
                    Enroll Now
                </button>

                <h4 className="text-[20px] font-bold text-wenza-brown font-lora mb-5">This Course includes</h4>
                <ul className="flex flex-col gap-3.5 text-[14px] font-medium text-wenza-text mb-8">
                    <li className="flex items-center gap-3"><FaCheckCircle className="text-wenza-primary text-lg shrink-0" /> Lifetime Access to Curriculum</li>
                    <li className="flex items-center gap-3"><FaCheckCircle className="text-wenza-primary text-lg shrink-0" /> Access on all smart devices</li>
                    <li className="flex items-center gap-3"><FaCheckCircle className="text-wenza-primary text-lg shrink-0" /> Official Wenza Certificate</li>
                    <li className="flex items-center gap-3"><FaCheckCircle className="text-wenza-primary text-lg shrink-0" /> Real-world Project Portfolio</li>
                </ul>

                <hr className="border-wenza-border/50 border-t-2 mb-6" />

                <h4 className="text-[20px] font-bold text-wenza-brown font-lora mb-3">Training your team?</h4>
                <p className="text-[14px] text-wenza-muted leading-relaxed font-medium mb-8 pr-4">
                    Get access to this course for your entire engineering team. Contact Wenza corporate sales.
                </p>

                <hr className="border-wenza-border/50 border-t-2 mb-6" />

                <h4 className="text-[16px] font-bold text-wenza-brown font-sans mb-4 uppercase tracking-widest">Share this course</h4>
                <div className="flex gap-2 text-wenza-muted">
                    <button className="w-9 h-9 rounded-full bg-wenza-bg flex items-center justify-center hover:bg-wenza-primary hover:text-white transition-all hover:-translate-y-1"><FaTwitter /></button>
                    <button className="w-9 h-9 rounded-full bg-wenza-bg flex items-center justify-center hover:bg-wenza-primary hover:text-white transition-all hover:-translate-y-1"><FaFacebookF /></button>
                    <button className="w-9 h-9 rounded-full bg-wenza-bg flex items-center justify-center hover:bg-wenza-primary hover:text-white transition-all hover:-translate-y-1"><FaYoutube /></button>
                    <button className="w-9 h-9 rounded-full bg-wenza-bg flex items-center justify-center hover:bg-wenza-primary hover:text-white transition-all hover:-translate-y-1"><FaInstagram /></button>
                    <button className="w-9 h-9 rounded-full bg-wenza-bg flex items-center justify-center hover:bg-wenza-primary hover:text-white transition-all hover:-translate-y-1"><FaTelegramPlane /></button>
                    <button className="w-9 h-9 rounded-full bg-wenza-bg flex items-center justify-center hover:bg-wenza-primary hover:text-white transition-all hover:-translate-y-1"><FaWhatsapp /></button>
                </div>
            </div>
        </div>
    );
}
