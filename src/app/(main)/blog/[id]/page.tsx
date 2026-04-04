import React from 'react';
import { MOCK_BLOGS } from '@/components/page/Blog/mockData';
import BlogDetailsView from '@/components/page/Blog/BlogDetailsView';

export async function generateStaticParams() {
    return MOCK_BLOGS.map((blog) => ({
        id: blog.id,
    }));
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    // Await params object for Next.js 15+ Server Components compatibility
    const resolvedParams = await params;
    
    return <BlogDetailsView blogId={resolvedParams.id} />;
}
