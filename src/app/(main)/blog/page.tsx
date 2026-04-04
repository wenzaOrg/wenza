import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import { HeroSection, BlogCategories, RelatedBlogs } from '@/components/page/Blog';

const BlogPage = () => {
    return (
        <main className="min-h-screen bg-wenza-bg flex flex-col pt-[64px]">
            <Navbar />
            
            <div className="flex-1 w-full flex flex-col">
                <HeroSection />
                <BlogCategories />
                <RelatedBlogs />
            </div>
        </main>
    );
};

export default BlogPage;
