import React from 'react';

const steps = [
  { num: "1", title: "Create Your Free Account", desc: "Sign up in 60 seconds with email or phone number. No payment needed." },
  { num: "2", title: "Choose a Course", desc: "Browse 500+ courses. Filter by price, category, or skill level." },
  { num: "3", title: "Learn at Your Pace", desc: "Watch lessons, take quizzes, earn certificates. Works on any phone, even on 2G." }
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-wenza-bg py-[72px] px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-[36px] font-bold text-wenza-brown text-center mb-4 font-lora">
          Start Learning in 3 Simple Steps
        </h2>
        <p className="text-[16px] text-wenza-muted text-center max-w-[600px] mb-16">
          No confusing setup. No hidden fees. Just pick a course and go.
        </p>

        <div className="relative w-full">
          {/* Connecting dashed line (desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[20%] right-[20%] h-[2px] border-t-2 border-dashed border-wenza-primary/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-wenza-primary text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-[0_0_0_8px_rgba(176,80,16,0.1)] group-hover:shadow-[0_0_0_12px_rgba(176,80,16,0.15)] transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-[20px] font-semibold text-wenza-brown mb-3">{step.title}</h3>
                <p className="text-[15px] text-wenza-text leading-relaxed max-w-[300px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
