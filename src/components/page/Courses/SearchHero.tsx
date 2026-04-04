"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import ThemedDropdown from '@/components/common/ThemedDropdown';

const SearchHero = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [q, setQ] = useState(searchParams.get('q') || '');
    const [category, setCategory] = useState(searchParams.get('category') || '');
    const [level, setLevel] = useState(searchParams.get('level') || '');
    const [price, setPrice] = useState(searchParams.get('priceType') || '');
    const [duration, setDuration] = useState(searchParams.get('durationFormat') || '');
    const [format, setFormat] = useState(searchParams.get('format') || '');

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (q) params.set('q', q);
        if (category) params.set('category', category);
        if (level) params.set('level', level);
        if (price) params.set('priceType', price);
        if (duration) params.set('durationFormat', duration);
        if (format) params.set('format', format);
        router.push(`/courses?${params.toString()}`, { scroll: false });
    };

    return (
        <section className="relative w-full h-[360px] md:h-[420px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/img/blog/hero_laptop.png" 
                    alt="Learn with Wenza"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-wenza-brown/40 mix-blend-multiply" />
            </div>

            {/* Search Container */}
            <div className="relative z-10 w-full max-w-5xl px-6 md:px-16 mt-12">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-[0_12px_32px_rgba(26,16,8,0.15)] mx-auto">
                    
                    {/* Top Search Input Row */}
                    <div className="flex flex-col md:flex-row gap-3 mb-4">
                        <div className="relative flex-1">
                            <input 
                                type="text" 
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                placeholder="Search your favourite course..." 
                                className="w-full h-12 bg-wenza-bg border border-wenza-border rounded-lg px-4 focus:outline-none focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary font-sans text-wenza-brown placeholder:text-wenza-muted"
                            />
                        </div>
                        <button 
                            onClick={handleSearch}
                            className="h-12 px-8 bg-wenza-primary hover:bg-wenza-primary-hover text-white font-bold rounded-lg transition-colors whitespace-nowrap"
                        >
                            Search Courses
                        </button>
                        {(q || category || level || price || duration || format) && (
                            <button 
                                onClick={() => {
                                    setQ(''); setCategory(''); setLevel(''); setPrice(''); setDuration(''); setFormat('');
                                    router.push('/courses', { scroll: false });
                                }}
                                className="h-12 px-6 bg-white border border-wenza-error text-wenza-error hover:bg-wenza-error/5 font-bold rounded-lg transition-colors whitespace-nowrap"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {/* Bottom Filters Row */}
                    <div className="flex flex-wrap md:flex-nowrap gap-3 w-full">
                        <div className="flex-1 min-w-[140px]">
                            <ThemedDropdown 
                                options={["Frontend", "Backend", "Data Science", "Mobile Dev", "Cloud", "UI/UX", "Security"]}
                                value={category}
                                onChange={setCategory}
                                placeholder="Category"
                                className="h-11"
                            />
                        </div>
                        <div className="flex-1 min-w-[140px]">
                            <ThemedDropdown 
                                options={["Beginner", "Intermediate", "Advanced"]}
                                value={level}
                                onChange={setLevel}
                                placeholder="Level"
                                className="h-11"
                            />
                        </div>
                        <div className="flex-1 min-w-[140px]">
                            <ThemedDropdown 
                                options={["Free", "Paid", "Subscription"]}
                                value={price}
                                onChange={setPrice}
                                placeholder="Price"
                                className="h-11"
                            />
                        </div>
                        <div className="flex-1 min-w-[140px]">
                            <ThemedDropdown 
                                options={["Short (1-4 weeks)", "Medium (1-3 months)", "Long (3+ months)"]}
                                value={duration}
                                onChange={setDuration}
                                placeholder="Duration"
                                className="h-11"
                            />
                        </div>
                        <div className="flex-1 min-w-[140px]">
                            <ThemedDropdown 
                                options={["Video Only", "Project Based", "Live Mentorship"]}
                                value={format}
                                onChange={setFormat}
                                placeholder="Format"
                                className="h-11"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SearchHero;
