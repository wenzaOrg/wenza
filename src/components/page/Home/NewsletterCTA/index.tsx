"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemedInput from '@/components/common/ThemedInput';
import ThemedButton from '@/components/common/ThemedButton';

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="cta-section w-full py-[72px] px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="text-3xl md:text-[36px] font-bold text-white mb-4 font-lora">
          Start Learning Today — It&apos;s Free to Join
        </h2>
        <p className="text-[16px] text-white/85 max-w-[480px] mb-8 leading-relaxed">
          Create your account in 60 seconds. No credit card needed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-4">
          <ThemedInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            variant="dark"
            className="w-full sm:w-[360px]"
          />
          <ThemedButton variant="gold" size="lg" className="whitespace-nowrap">
            Join Wenza
          </ThemedButton>
        </div>
        <p className="text-[13px] text-white/60">
          Or <Link href="/auth?mode=signup" className="text-wenza-gold hover:underline">sign up with your phone number</Link> No spam ever.
        </p>
      </div>
    </section>
  );
};

export default NewsletterCTA;
