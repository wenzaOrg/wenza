import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemedButton from '@/components/common/ThemedButton';

const HeroSection = () => {
    return (
        <section className="bg-wenza-bg py-[72px] w-full font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-16 h-full flex flex-col md:flex-row items-center gap-12">
                
                {/* Left Text Content */}
                <div className="flex-1 space-y-6">
                    <p className="font-semibold text-wenza-muted text-sm md:text-base tracking-wide uppercase">
                        Insights & Updates
                    </p>
                    
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-wenza-brown font-lora">
                        Why Building Projects is the Fastest Way to Learn Tech
                    </h1>
                    
                    <p className="text-wenza-muted text-[17px] leading-relaxed max-w-xl">
                        Explore the Wenza blog for deep dives into software development, career guidance, and practical tips from the brightest minds in the Nigerian developer ecosystem. Stay informed and level up your skills.
                    </p>
                    
                    <div className="pt-4">
                        <Link href="/courses">
                            <ThemedButton 
                                variant="primary" 
                                size="lg" 
                                className="h-12 px-8 rounded-[8px] font-bold"
                            >
                                Start learning now
                            </ThemedButton>
                        </Link>
                    </div>
                </div>

                {/* Right Image Content */}
                <div className="flex-1 w-full max-w-2xl relative rounded-[20px] overflow-hidden shadow-2xl">
                    <div className="aspect-4/3 relative">
                        <Image 
                            src="/img/blog/hero_laptop.png" 
                            alt="Online learning" 
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
