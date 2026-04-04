import React from 'react';
import { FaMoneyBillWave, FaMobileAlt, FaCertificate, FaUsers } from 'react-icons/fa';

const cards = [
  { icon: <FaMoneyBillWave className="text-2xl" />, title: "Prices from ₦1,500", desc: "World-class courses at prices that work for Nigerians. Pay once, own forever." },
  { icon: <FaMobileAlt className="text-2xl" />, title: "Works on Any Phone", desc: "Low data usage. Offline downloads. Works on 2G/3G networks." },
  { icon: <FaCertificate className="text-2xl" />, title: "Earn Real Certificates", desc: "Shareable certificates employers in Nigeria and beyond recognize." },
  { icon: <FaUsers className="text-2xl" />, title: "Learn with Community", desc: "Study groups, Q&A, mentorship. You never learn alone." }
];

const WhyWenza = () => {
  return (
    <section className="w-full py-[72px] px-6 md:px-16 relative overflow-hidden">
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #D0A050 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-3xl md:text-[36px] font-bold text-wenza-brown text-center mb-4 font-lora">
          Why Thousands of Nigerians Choose Wenza
        </h2>
        <p className="text-[16px] text-wenza-text text-center max-w-[600px] mb-12">
          Built for the way Nigerians learn — affordable, mobile-first, and community-driven.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="why-card bg-wenza-brown border border-white/10 rounded-[12px] p-7 flex flex-col items-center text-center backdrop-blur-sm hover:bg-brown/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-full bg-wenza-primary/20 flex items-center justify-center text-wenza-gold mb-5 group-hover:bg-wenza-primary/30 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-[14px] text-wenza-border leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWenza;
