import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DEALS = [
    { title: "Frontend Masterclass 2026", bg: "/img/blog/hero_laptop.png", discount: "50%" },
    { title: "Advanced Node.js Scaling", bg: "/img/blog/team_presentation.png", discount: "10%" },
    { title: "UI/UX Figma Systems", bg: "/img/blog/ui_design.png", discount: "50%" },
];

export default function CheckoutDealsGrid() {
    return (
        <section className="w-full bg-white py-[72px] px-6 md:px-16 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-[28px] font-bold text-[#0f172a] tracking-tight max-w-sm leading-tight">
                        Top Education offers and deals are listed here
                    </h2>
                    <Link href="/courses" className="text-sm font-bold text-wenza-primary hover:underline hover:text-wenza-primary-hover transition-colors mb-2">
                        See all
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DEALS.map((deal, i) => (
                        <div key={i} className="relative w-full aspect-4/3 rounded-[24px] overflow-hidden group cursor-pointer shadow-sm border border-black/5 hover:border-wenza-primary transition-colors">
                            {/* Background Image */}
                            <Image 
                                src={deal.bg} 
                                alt={deal.title} 
                                fill 
                                sizes="(max-width: 1024px) 100vw, 33vw" 
                                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            {/* Heavy dark gradient overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10"></div>
                            
                            {/* Left Badge - EXACT WENZA TEAL */}
                            <div className="absolute top-8 left-8 bg-wenza-primary px-5 py-4 text-white text-[32px] md:text-[40px] font-extrabold leading-none rounded-lg shadow-md">
                                {deal.discount}
                            </div>
                            
                            {/* Text blocks */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-white text-[22px] font-bold mb-3 line-clamp-1 leading-tight tracking-wide">{deal.title}</h3>
                                <p className="text-white/80 text-[14px] font-medium leading-relaxed line-clamp-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
