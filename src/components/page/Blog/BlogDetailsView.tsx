import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_BLOGS } from './mockData';
import RelatedBlogs from './RelatedBlogs';

export default function BlogDetailsView({ blogId }: { blogId: string }) {
    // Look up the exact blog based on URL ID
    const blog = MOCK_BLOGS.find(b => b.id === blogId);

    if (!blog) {
        return (
            <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-wenza-bg pt-[64px]">
                <h1 className="text-4xl font-bold text-wenza-brown font-lora mb-4">Blog Not Found</h1>
                <Link href="/blog" className="text-wenza-primary font-bold hover:underline">
                    Return to Blog
                </Link>
            </div>
        );
    }

    return (
        <main className="w-full bg-wenza-bg font-sans pt-[64px] min-h-screen">
            {/* Elegant Header Area */}
            <article className="w-full max-w-[1000px] mx-auto px-6 md:px-16 pt-16 lg:pt-24 pb-20">
                
                {/* Meta row: Category, Date, Read Time */}
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8 text-[13px] md:text-[14px] font-medium text-wenza-muted">
                    <span className="text-wenza-primary tracking-wider font-bold uppercase bg-wenza-primary/5 px-3 py-1 rounded-full">
                        {blog.tags[0] || 'Technology'}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-wenza-border"></span>
                    <span>Oct 12, 2026</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-wenza-border"></span>
                    <span>5 min read</span>
                </div>

                {/* Elegant Centered Title */}
                <h1 className="text-[36px] md:text-[52px] font-bold text-wenza-brown font-lora leading-[1.15] md:leading-[1.1] text-center mb-10 mx-auto max-w-[850px] tracking-tight">
                    {blog.title}
                </h1>

                {/* Sleek Inline Author Block */}
                <div className="flex justify-center items-center gap-4 mb-14">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm border-2 border-white">
                        <Image src="/img/blog/author_avatar.png" alt={blog.author} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-[15px] font-bold text-wenza-brown">{blog.author}</span>
                        <span className="text-[13px] font-medium text-wenza-muted">Technical Educator @ Wenza</span>
                    </div>
                </div>

                {/* Premium Hero Image with hover effect and soft shadow */}
                <div className="w-full aspect-video md:aspect-21/9 relative rounded-[24px] md:rounded-[32px] overflow-hidden mb-16 shadow-[0_20px_40px_-15px_rgba(26,16,8,0.08)] border border-wenza-border/50 group">
                    <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <Image 
                        src={blog.heroImage} 
                        alt={blog.title} 
                        fill 
                        priority
                        className="object-cover transform group-hover:scale-105 transition-transform duration-800 ease-out" 
                    />
                </div>

                {/* Clean constraints for article body */}
                <div className="mx-auto max-w-[720px]">
                    <div className="flex flex-col gap-8 text-wenza-text text-[17px] md:text-[18px] leading-[1.85] font-medium mb-16">
                        {/* Split paragraphs with special introductory styling for the first one */}
                        {blog.content.trim().split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className={idx === 0 ? "text-[20px] md:text-[22px] text-wenza-brown leading-relaxed font-lora" : ""}>
                                {paragraph.trim()}
                            </p>
                        ))}
                    </div>

                    {/* Premium Tags Pill Box */}
                    <div className="flex flex-wrap items-center gap-3 mb-16 border-t border-b border-wenza-border/60 py-8">
                        <span className="text-[14px] font-bold text-wenza-brown mr-2">Topics:</span>
                        {blog.tags.map((tag, i) => (
                            <span key={i} className="bg-white hover:bg-wenza-card transition-colors shadow-sm text-wenza-primary text-[13px] font-semibold px-4 py-1.5 rounded-full cursor-pointer border border-wenza-border/60">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Premium Author Footer Card */}
                    <div className="bg-linear-to-br from-[#ffffff] to-[#fffcf9] p-8 md:p-10 rounded-[28px] shadow-[0_8px_30px_rgba(26,16,8,0.04)] border border-white flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
                        {/* Subtle decorative blob */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-wenza-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        
                        <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-sm border-4 border-wenza-bg z-10">
                            <Image src="/img/blog/author_avatar.png" alt={blog.author} fill className="object-cover" />
                        </div>
                        
                        <div className="flex flex-col text-center md:text-left z-10 w-full mt-2 md:mt-0">
                            <span className="text-[11px] uppercase font-black tracking-[0.15em] text-wenza-primary mb-2">About the Author</span>
                            <h3 className="text-[20px] font-bold text-wenza-brown mb-2">{blog.author}</h3>
                            <p className="text-[15px] text-wenza-muted leading-relaxed mb-6 max-w-[400px]">
                                A senior developer and instructor at Wenza. Passionate about translating complex logic into readable code and teaching the next generation of top-tier engineers.
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <button className="h-10 px-8 rounded-full bg-wenza-primary text-white font-semibold text-[14px] hover:bg-wenza-primary-hover hover:shadow-md transition-all">
                                    Follow
                                </button>
                                <button className="h-10 px-6 rounded-full border border-wenza-border bg-white text-wenza-brown font-semibold text-[14px] hover:border-wenza-primary hover:text-wenza-primary transition-colors">
                                    All Posts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </article>

            {/* Seamless transition to related blogs */}
            <div className="bg-wenza-card border-t border-dashed border-wenza-border/80 pt-16 pb-20">
                <RelatedBlogs />
            </div>
        </main>
    );
}
