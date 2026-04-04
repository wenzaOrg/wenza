"use client";

import Image from 'next/image';
import React from 'react';
import { FaNairaSign, FaHandshake, FaGlobe, FaRocket } from 'react-icons/fa6';

export default function AboutPage() {
  return (
    <div className="w-full flex justify-center mt-[64px] bg-wenza-bg min-h-screen">
      <main className="w-full flex flex-col items-center overflow-hidden">

        {/* HERO */}
        <section className="w-full bg-linear-to-r from-[#1A1008] to-[#3D2010] py-24 px-6 md:px-16 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-6">
            <h1 className="text-[36px] md:text-[52px] font-bold text-white font-lora leading-[1.1] tracking-tight">
              Built for Nigerian Developers.<br className="hidden sm:block" /> By Nigerian Developers.
            </h1>
            <p className="text-wenza-border text-[18px] md:text-[20px] leading-relaxed max-w-[700px] font-medium opacity-90">
              Wenza exists because every Nigerian deserves access to world-class tech education — at prices that make sense, with mentors who understand the journey.
            </p>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="w-full py-[100px] px-6 md:px-16 bg-wenza-bg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

            {/* Left (50%) - Image */}
            <div className="w-full md:w-1/2 aspect-video md:aspect-square lg:aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white relative group">
              <Image
                width={1000}
                height={1000}
                src="/img/brand/wenza_team_group.png"
                alt="Wenza Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-wenza-bdark/40 to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 z-10">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[14px] font-black text-wenza-brown shadow-lg border border-white/50 uppercase tracking-widest">
                  The Wenza Team
                </span>
              </div>
            </div>

            {/* Right (50%) - Story */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h2 className="text-[32px] md:text-[40px] font-bold text-wenza-brown font-lora mb-8 leading-tight">The Wenza Story</h2>

              <div className="flex flex-col gap-6 text-[17px] leading-relaxed text-wenza-text font-medium opacity-90">
                <p>
                  Wenza started in 2024 when a group of Nigerian software engineers saw a problem they&apos;d all experienced: international platforms were expensive, their content wasn&apos;t tailored to the local ecosystem, and there was no real mentorship.
                </p>
                <p>
                  So we built something different. Wenza isn&apos;t a marketplace — it&apos;s a curated learning platform. Every course is created by our team of experienced developers, designed with Nigerian learners in mind, and backed by live mentorship.
                </p>
                <div className="mt-4 p-6 bg-wenza-primary/5 border-l-4 border-wenza-primary rounded-r-2xl">
                  <p className="font-black text-wenza-primary text-[19px]">
                    Today, 10,000+ learners across Nigeria trust Wenza to build their tech careers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* WHAT SETS US APART */}
        <section className="w-full bg-white py-[100px] px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col items-center">

            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[40px] font-bold text-wenza-brown font-lora mb-4">What Sets Us Apart</h2>
              <p className="text-[17px] text-wenza-muted max-w-[600px] mx-auto">Why Nigerian developers choose Wenza for their professional growth.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">

              {[
                { icon: <FaNairaSign className="text-wenza-primary" />, title: "Affordable in Naira", desc: "No dollar pricing. No exchange rate surprises. Quality tech education from ₦3,500." },
                { icon: <FaHandshake className="text-wenza-primary" />, title: "Real Mentorship", desc: "Not just videos. Every paid course includes live 1-on-1 sessions with Wenza's senior developers." },
                { icon: <FaGlobe className="text-wenza-primary" />, title: "Built for Nigeria", desc: "Low-data mode, offline downloads, and optimized for the networks and devices Nigerians use." },
                { icon: <FaRocket className="text-wenza-primary" />, title: "Career Focused", desc: "Project-based learning that helps you build a portfolio and land your dream role." }
              ].map((val, idx) => (
                <div key={idx} className="bg-wenza-card border border-wenza-border rounded-[24px] p-10 flex flex-col items-center text-center shadow-sm hover:border-wenza-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl mb-8 shadow-sm border border-wenza-border/50">
                    {val.icon}
                  </div>
                  <h3 className="text-[20px] font-bold text-wenza-brown mb-4 tracking-tight">{val.title}</h3>
                  <p className="text-[15px] text-wenza-text leading-relaxed font-medium opacity-90">
                    {val.desc}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* STATS BAR (Reused from Homepage) */}
        <section className="w-full bg-wenza-primary py-16 px-6 md:px-16 relative overflow-hidden">
          {/* Subtle background texture/pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[40px_40px]"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-wrap justify-center md:grid md:grid-cols-5 gap-y-12 md:gap-y-0 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              {[
                { val: "10,000+", label: "Active Learners" },
                { val: "200+", label: "Expert Courses" },
                { val: "50+", label: "Senior Mentors" },
                { val: "85%", label: "Completion Rate" },
                { val: "3k+", label: "Career Pivoters" }
              ].map((stat, idx) => (
                <div key={idx} className="w-1/2 md:w-auto flex flex-col items-center py-4 md:py-0 px-4">
                  <h4 className="text-[32px] md:text-[44px] font-bold text-white font-lora mb-2 leading-none">{stat.val}</h4>
                  <p className="text-[12px] md:text-[14px] text-white/80 uppercase tracking-[0.2em] font-black">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
