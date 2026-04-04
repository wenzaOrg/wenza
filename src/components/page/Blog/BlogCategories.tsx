import React from 'react';
import Image from 'next/image';

const categories = [
    { title: 'UX/UI', image: '/img/blog/ui_design.png' },
    { title: 'React', image: '/img/blog/tech_code.png' },
    { title: 'PHP', image: '/img/blog/tech_code.png' },
    { title: 'JavaScript', image: '/img/blog/tech_code.png' }
];

const BlogCategories = () => {
    return (
        <section className="bg-wenza-bg py-[72px] w-full font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <h2 className="text-2xl font-bold text-wenza-brown font-lora mb-8">Reading blog list</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="relative rounded-[20px] overflow-hidden group cursor-pointer aspect-square sm:aspect-auto sm:h-[180px] shadow-sm">
                            <Image 
                                src={category.image} 
                                alt={category.title} 
                                fill
                                sizes="(max-width: 768px) 100vw, 25vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
                            <div className="absolute inset-x-0 bottom-4 flex justify-center">
                                <div className="bg-wenza-card/90 backdrop-blur-sm px-6 py-1.5 rounded-lg shadow-sm">
                                    <span className="font-bold text-sm text-wenza-brown">
                                        {category.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogCategories;
