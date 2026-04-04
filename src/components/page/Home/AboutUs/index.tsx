import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-[72px] px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-16">
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="relative">
              <div className="w-full aspect-4/3 bg-wenza-brown rounded-[12px] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-br from-wenza-dark via-wenza-brown to-wenza-primary opacity-90" />
                <div className="relative z-10 text-center px-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full border-[3px] border-wenza-gold bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-3xl text-wenza-gold font-lora font-bold">W</span>
                  </div>
                  <p className="text-white/80 text-[14px] font-medium tracking-wide uppercase">
                    Since 2024 · Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -right-4 md:-right-6 bg-wenza-card border border-wenza-border rounded-[12px] px-5 py-4 shadow-wenza">
                <p className="text-[24px] font-bold text-wenza-primary font-lora">10,000+</p>
                <p className="text-[12px] text-wenza-muted font-medium">Learners across Nigeria</p>
              </div>
            </div>
          </div>

          {/* Story text side */}
          <div className="w-full lg:w-[55%]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-wenza-border" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-wenza-primary">
                About Wenza
              </span>
              <div className="w-8 h-[2px] bg-wenza-border" />
            </div>
            <h2 className="text-3xl md:text-[36px] font-bold text-wenza-brown font-lora mb-5 leading-tight">
              Built for Nigerian Developers.<br className="hidden md:block" /> By Nigerian Developers.
            </h2>
            <div className="space-y-4 text-[15px] md:text-[16px] text-wenza-text leading-relaxed">
              <p>
                Wenza started in 2024 when a group of Nigerian software engineers saw a problem they&apos;d all experienced: international platforms like Udemy and Coursera were expensive, their content wasn&apos;t tailored to the Nigerian tech ecosystem, and there was no real mentorship.
              </p>
              <p>
                So we built something different. Wenza isn&apos;t a marketplace — it&apos;s a curated learning platform. Every course is created by our team of experienced developers, designed with Nigerian learners in mind, and backed by live mentorship.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-6 text-wenza-primary text-[15px] font-semibold hover:gap-3 transition-all group"
            >
              Learn more about us <FaArrowRight className="text-[12px] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
