"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaTimesCircle, FaChevronDown, FaHeadset } from 'react-icons/fa';

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Is Wenza really free to start?", a: "Yes. Create an account and access free courses in HTML, CSS, and Git immediately. No credit card required." },
    { q: "How do I pay?", a: "We accept debit cards via Paystack, bank transfer, and USSD. All payments are in Naira (₦)." },
    { q: "Can I access courses offline?", a: "Yes. Paid courses can be downloaded for offline viewing on the Wenza mobile app." },
    { q: "What kind of certificates do you offer?", a: "Each paid course includes a verifiable digital certificate of completion that you can share on LinkedIn or with employers." },
    { q: "How does mentorship work?", a: "Each paid course includes 2 live 1-on-1 sessions with a Wenza senior developer. You can also buy additional mentorship packs separately." },
    { q: "What if I'm not satisfied?", a: "All paid courses come with a 30-day money-back guarantee." }
  ];

  return (
    <div className="w-full flex justify-center mt-[64px] bg-wenza-bg min-h-screen">
      <main className="w-full flex flex-col items-center overflow-hidden">
        
        {/* HEADER */}
        <section className="w-full bg-[#3D2010] py-20 px-6 md:px-16 text-center">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
             <h1 className="text-[36px] md:text-[48px] font-bold text-white font-lora mb-6 leading-tight">
               Simple, Transparent Pricing
             </h1>
             <p className="text-wenza-border text-[16px] md:text-[18px] leading-relaxed max-w-[620px] font-medium opacity-90">
               Start free. Pay per course. Or go unlimited. All prices in Naira, no hidden fees or dollar exchange surprises.
             </p>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="w-full py-[80px] px-6 md:px-16 bg-wenza-bg">
          <div className="max-w-[1100px] mx-auto flex flex-col items-center">
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20 relative items-stretch">
                
                {/* 1. Free */}
                <div className="bg-white border border-wenza-border rounded-[24px] p-10 flex flex-col relative shadow-sm hover:shadow-md transition-all">
                   <h2 className="text-[20px] font-bold text-wenza-brown mb-2">Free</h2>
                   <div className="flex items-baseline gap-1 mb-2">
                     <span className="text-[44px] font-bold text-wenza-brown font-lora leading-none">₦0</span>
                   </div>
                   <p className="text-[14px] font-bold text-wenza-muted mb-10 h-10">Start your journey today</p>
                   
                   <div className="flex flex-col gap-4 mb-10 flex-1">
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>Free courses (HTML, CSS, Git)</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>Community forum access</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>Study group participation</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>Weekly coding challenges</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-muted/50">
                       <FaTimesCircle className="text-[18px] shrink-0 mt-0.5" /> <span>Paid expert courses</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-muted/50">
                       <FaTimesCircle className="text-[18px] shrink-0 mt-0.5" /> <span>Verifiable certificates</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-muted/50">
                       <FaTimesCircle className="text-[18px] shrink-0 mt-0.5" /> <span>1-on-1 mentorship</span>
                     </div>
                   </div>

                   <Link href="/auth?mode=signup" className="w-full mt-auto">
                     <button className="w-full h-12 rounded-[12px] font-bold border-2 border-wenza-primary text-wenza-primary hover:bg-wenza-primary hover:text-white transition-all duration-300">
                       Get Started Free
                     </button>
                   </Link>
                </div>

                {/* 2. Per Course (Highlighted) */}
                <div className="bg-white border-[3px] border-wenza-primary rounded-[28px] p-11 flex flex-col relative shadow-[0_20px_50px_rgba(176,80,16,0.12)] z-10 md:scale-105 min-h-[620px]">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-wenza-primary text-white text-[12px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg border-2 border-white">
                     Most Popular
                   </div>

                   <h2 className="text-[22px] font-bold text-wenza-brown mb-2 mt-4">Per Course</h2>
                   <div className="flex items-baseline gap-1 mb-2">
                     <span className="text-[16px] text-wenza-muted font-black mr-1 uppercase tracking-tighter">From</span>
                     <span className="text-[52px] font-bold text-wenza-primary font-lora leading-none">₦3,500</span>
                   </div>
                   <p className="text-[15px] text-wenza-primary font-black mb-10 h-10 tracking-wide uppercase">One-time payment, lifetime access</p>
                   
                   <div className="flex flex-col gap-5 mb-10 flex-1">
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-bold">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>All Free features included</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-bold">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span className="text-wenza-brown underline decoration-wenza-primary/30">Premium structured courses</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>Hands-on real-world projects</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>Verifiable certificate</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-bold">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span className="text-wenza-brown">2 mentorship sessions included</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>Offline downloads on app</span>
                     </div>
                   </div>

                   <Link href="/courses" className="w-full mt-auto">
                     <button className="w-full h-14 rounded-[14px] font-black bg-wenza-primary text-white hover:bg-wenza-primary-hover shadow-xl shadow-wenza-primary/30 transition-all duration-300 uppercase tracking-wider text-[15px]">
                       Browse Courses
                     </button>
                   </Link>
                </div>

                {/* 3. Unlimited */}
                <div className="bg-white border border-wenza-border rounded-[24px] p-10 flex flex-col relative shadow-sm hover:shadow-md transition-all">
                   <h2 className="text-[20px] font-bold text-wenza-brown mb-2">Unlimited</h2>
                   <div className="flex items-baseline gap-1 mb-2">
                     <span className="text-[44px] font-bold text-wenza-brown font-lora leading-none tracking-tight">₦15,000</span>
                     <span className="text-[15px] text-wenza-muted font-bold ml-1">/month</span>
                   </div>
                   <p className="text-[14px] font-bold text-wenza-muted mb-10 h-10">Access everything, cancel anytime</p>
                   
                   <div className="flex flex-col gap-4 mb-10 flex-1">
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>All expert courses unlocked</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>Unlimited certificates</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-bold">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span className="text-wenza-brown">4 mentorship sessions /mo</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>Priority community support</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-medium">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span>Early access to new content</span>
                     </div>
                     <div className="flex items-start gap-3 text-[15px] text-wenza-text font-bold">
                       <FaCheckCircle className="text-wenza-success text-[18px] shrink-0 mt-0.5" /> <span className="text-wenza-brown">Career coaching & job board</span>
                     </div>
                   </div>

                   <Link href="/auth?mode=signup" className="w-full mt-auto">
                     <button className="w-full h-12 rounded-[12px] font-bold border-2 border-wenza-primary text-wenza-primary hover:bg-wenza-primary hover:text-white transition-all duration-300">
                       Start Free Trial
                     </button>
                   </Link>
                </div>

             </div>

             {/* MENTORSHIP ADD-ON NOTE */}
             <div className="w-full max-w-[800px] bg-white border border-wenza-border rounded-[20px] p-8 text-center flex flex-col items-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-wenza-bg text-wenza-primary flex items-center justify-center text-2xl mb-5 border border-wenza-border/50">
                   <FaHeadset />
                </div>
                <h3 className="text-[20px] font-bold text-wenza-brown mb-3">Extra Mentorship Sessions</h3>
                <p className="text-[16px] text-wenza-text mb-6 max-w-[560px] leading-relaxed font-medium">
                   Need more 1-on-1 focus time? You can purchase additional mentorship session packs anytime to accelerate your learning.
                </p>
                <Link href="/mentorship" className="text-wenza-primary font-black hover:underline flex items-center gap-2 group transition-all">
                   <span>Explore Mentorship Packs</span>
                   <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
             </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="w-full bg-white py-24 px-6 md:px-16">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
             <h2 className="text-[32px] md:text-[40px] font-bold text-wenza-brown font-lora mb-12 text-center">Common Questions</h2>
             
             <div className="w-full flex flex-col gap-4">
               {faqs.map((faq, idx) => {
                 const isOpen = openFaq === idx;
                 return (
                   <div key={idx} className={`w-full border rounded-[16px] overflow-hidden transition-all duration-300 ${isOpen ? 'border-wenza-primary bg-[#fffbf7] shadow-md' : 'border-wenza-border bg-white'}`}>
                      <button 
                        className="w-full flex items-center justify-between p-6 text-left"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                      >
                         <h4 className={`text-[17px] font-bold pr-4 transition-colors ${isOpen ? 'text-wenza-primary' : 'text-wenza-brown'}`}>{faq.q}</h4>
                         <div className={`text-wenza-primary transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                            <FaChevronDown className="text-lg" />
                         </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                         <p className="px-6 pb-6 text-[16px] text-wenza-text leading-relaxed font-medium opacity-90">
                           {faq.a}
                         </p>
                      </div>
                   </div>
                 );
               })}
             </div>

          </div>
        </section>

      </main>
    </div>
  );
}
