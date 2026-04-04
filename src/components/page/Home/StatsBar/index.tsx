import React from 'react';

const stats = [
  { val: "10,000+", label: "Active Learners" },
  { val: "500+", label: "Courses" },
  { val: "50+", label: "Instructors" },
  { val: "₦1,500", label: "Cheapest Course" }
];

const StatsBar = () => {
  return (
    <section className="w-full bg-wenza-primary py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center md:divide-x divide-white/20">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center py-2 md:py-0">
            <span className="text-3xl md:text-[40px] font-bold text-white font-lora mb-1">{stat.val}</span>
            <span className="text-[13px] text-white/80 uppercase tracking-widest font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
