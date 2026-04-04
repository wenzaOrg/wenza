import React from 'react';
import Hero from '@/components/page/Home/Hero';
import HowItWorks from '@/components/page/Home/HowItWorks';
import Categories from '@/components/page/Home/Categories';

import WhyWenza from '@/components/page/Home/WhyWenza';
import StatsBar from '@/components/page/Home/StatsBar';
import Testimonials from '@/components/page/Home/Testimonials';
import NewsletterCTA from '@/components/page/Home/NewsletterCTA';
import AboutUs from '@/components/page/Home/AboutUs';
import Blogs from '@/components/page/Home/Blog';

export default function HomePage() {
  return (
    <div className="w-full flex justify-center mt-[64px] bg-wenza-bg">
      <main className="w-full flex flex-col items-center overflow-hidden">
        <Hero />
        <HowItWorks />
        <Categories />
        <WhyWenza />
        <AboutUs />
        <StatsBar />
        <Testimonials />
        <Blogs />
        <NewsletterCTA />
      </main>
    </div>
  );
}
