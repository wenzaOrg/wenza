import React from 'react';
import Link from 'next/link';
import { FaLaptopCode, FaServer, FaDatabase, FaRobot, FaMobileAlt, FaCloud, FaPaintBrush, FaLock } from 'react-icons/fa';

const categories = [
    { title: "Frontend", icon: <FaLaptopCode />, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Backend", icon: <FaServer />, color: "text-green-500", bg: "bg-green-50" },
    { title: "Data Science", icon: <FaDatabase />, color: "text-purple-500", bg: "bg-purple-50" },
    { title: "AI & ML", icon: <FaRobot />, color: "text-orange-500", bg: "bg-orange-50" },
    { title: "Mobile Dev", icon: <FaMobileAlt />, color: "text-teal-500", bg: "bg-teal-50" },
    { title: "Cloud", icon: <FaCloud />, color: "text-indigo-500", bg: "bg-indigo-50" },
    { title: "UI/UX", icon: <FaPaintBrush />, color: "text-pink-500", bg: "bg-pink-50" },
    { title: "Security", icon: <FaLock />, color: "text-red-500", bg: "bg-red-50" }
];

const CategoryGrid = () => {
    return (
        <section className="bg-wenza-page py-16 w-full font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <h2 className="text-2xl font-bold text-wenza-brown font-lora mb-10">
                    Choice favourite course from top category
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <Link 
                            key={idx} 
                            href={`/courses?category=${cat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                            className="bg-wenza-card rounded-[16px] p-6 shadow-wenza border border-transparent hover:border-wenza-primary transition-all flex flex-col items-center group"
                        >
                            <div className={`w-14 h-14 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-[18px] font-bold text-wenza-brown font-lora mb-3 text-center">
                                {cat.title}
                            </h3>
                            <p className="text-center text-wenza-muted text-[13px] leading-relaxed line-clamp-3">
                                Master {cat.title.toLowerCase()} concepts with hands-on projects designed by senior developers.
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
