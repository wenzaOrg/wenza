import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EYE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const CHEVRON_LEFT = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-wenza-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

const CHEVRON_RIGHT = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

import { MOCK_BLOGS } from './mockData';

const RelatedBlogs = () => {
    return (
        <section className="bg-wenza-bg py-[72px] w-full font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                {/* Header Row */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl font-bold text-wenza-brown font-lora">Related Blog</h2>
                    <Link href="/blog" className="text-sm font-semibold text-wenza-primary hover:underline font-dm-sans">
                        See all
                    </Link>
                </div>
                
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {MOCK_BLOGS.slice(0, 2).map((post) => (
                        <div key={post.id} className="bg-wenza-card rounded-[20px] p-6 shadow-wenza border border-transparent hover:border-wenza-primary transition-colors cursor-pointer flex flex-col h-full">
                            {/* Featured Image */}
                            <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden mb-6">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-[20px] font-bold text-wenza-brown font-lora leading-snug mb-4 pr-12 line-clamp-2">
                                {post.title}
                            </h3>
                            
                            {/* Author Row */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-wenza-border bg-wenza-primary outline-1 outline-offset-1 outline-wenza-border flex items-center justify-center font-bold text-white text-xs">
                                    {post.author.charAt(0)}
                                </div>
                                <span className="font-semibold text-sm text-wenza-brown">{post.author}</span>
                            </div>

                            {/* Excerpt */}
                            <p className="text-wenza-muted text-sm leading-relaxed max-w-[90%] mb-8 line-clamp-3">
                                {post.excerpt}
                            </p>

                            {/* Footer */}
                            <div className="flex justify-between items-center mt-auto">
                                <Link href={`/blog/${post.id}`} className="text-wenza-primary text-sm underline underline-offset-4 decoration-wenza-primary/40 hover:text-wenza-primary hover:font-bold">
                                    Read more
                                </Link>
                                <div className="flex items-center gap-2 text-wenza-primary text-sm font-bold">
                                    {EYE_SVG}
                                    <span>{post.views}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-end gap-2 mt-12">
                    <button className="w-10 h-10 flex items-center justify-center border border-wenza-primary text-wenza-primary rounded-lg hover:bg-wenza-primary/10 transition-colors">
                        {CHEVRON_LEFT}
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-wenza-primary rounded-lg shadow-sm hover:opacity-90 transition-opacity">
                        {CHEVRON_RIGHT}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RelatedBlogs;
