import React from 'react';
import Link from 'next/link';
import ThemedButton from '@/components/common/ThemedButton';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="w-full h-screen max-h-screen bg-wenza-bg relative overflow-hidden">


      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6 md:px-16 py-8 md:py-12 relative z-10">
        
        {/* Left content — 50% */}
        <div className="w-full md:w-[50%] flex flex-col items-start gap-5 order-2 md:order-1">
          <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-wenza-brown font-lora leading-[1.15]">
            <span className="text-wenza-primary">Learn</span> In-Demand Skills Without Breaking the Bank
          </h1>
          
          <p className="text-wenza-text text-[15px] md:text-[17px] leading-relaxed max-w-[440px]">
            Access 500+ expert-led courses in tech, business, design, and trade skills. Pay in Naira. Learn at your pace. Join 10,000+ Nigerians on Wenza.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
            <Link href="/auth?mode=signup">
              <ThemedButton variant="primary" size="lg" className="font-semibold">
                Start Learning — It&apos;s Free
              </ThemedButton>
            </Link>
            <Link href="#how-it-works" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full bg-white border-2 border-wenza-primary flex items-center justify-center shadow-md group-hover:bg-wenza-primary group-hover:text-white transition-all duration-300">
                <FaPlay className="text-wenza-primary text-xs ml-0.5 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[15px] font-medium text-wenza-brown group-hover:text-wenza-primary transition-colors">Watch how it works</span>
            </Link>
          </div>
        </div>

        {/* Right visual — 50% */}
        <div className="w-full md:w-[50%] relative order-1 md:order-2 flex justify-center md:justify-end">
          {/* Student image */}
          <div className="relative w-[320px] md:w-[420px] lg:w-[460px] min-h-[400px] md:min-h-[500px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-student.png"
              alt="Nigerian student learning on Wenza"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl mix-blend-multiply"
            />

            {/* Floating card — 10,000+ Learners */}
            <div className="absolute top-8 -left-4 md:-left-12 bg-white rounded-[14px] p-3.5 shadow-[0_8px_30px_rgba(26,16,8,0.12)] border border-wenza-border/50 flex items-center gap-3 z-20 animate-float">
              <div className="w-10 h-10 rounded-[10px] bg-wenza-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-wenza-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-wenza-brown leading-tight">10,000+</span>
                <span className="text-[11px] text-wenza-muted">Active Learners</span>
              </div>
            </div>

            {/* Floating card — Stats icon (top-right decorative) */}
            <div className="absolute top-4 right-2 md:-right-4 w-11 h-11 rounded-[10px] bg-wenza-primary shadow-lg flex items-center justify-center z-20 animate-float-delayed">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>

            {/* Floating card — Course preview */}
            <div className="absolute bottom-20 -left-6 md:-left-16 bg-white/95 backdrop-blur-sm rounded-[14px] p-3.5 shadow-[0_8px_30px_rgba(26,16,8,0.12)] border border-wenza-border/50 z-20 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-linear-to-br from-wenza-primary to-wenza-gold flex items-center justify-center shrink-0">
                  <span className="text-white text-[11px] font-bold">₦</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-wenza-brown leading-tight">Courses from ₦1,500</span>
                  <span className="text-[11px] text-wenza-muted">Pay once, own forever</span>
                </div>
              </div>
            </div>

            {/* Floating card — Congratulations style */}
            <div className="absolute bottom-32 -right-2 md:-right-8 bg-white/95 backdrop-blur-sm rounded-[14px] p-3.5 shadow-[0_8px_30px_rgba(26,16,8,0.12)] border border-wenza-border/50 z-20 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[10px] bg-wenza-success/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-wenza-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-wenza-brown leading-tight">Congratulations!</span>
                  <span className="text-[11px] text-wenza-muted">Certificate earned</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;