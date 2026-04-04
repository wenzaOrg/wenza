import React from 'react';
import Link from 'next/link';
import CourseCard from './CourseCard';
import { MOCK_COURSES } from './mockData';

interface CourseGridProps {
    title: string;
    seeAllLink?: string;
    courses?: typeof MOCK_COURSES;
    bgStyle?: "bg-white" | "bg-wenza-bg" | "bg-wenza-page";
    columns?: 3 | 4;
}

const CourseGrid: React.FC<CourseGridProps> = ({ 
    title, 
    seeAllLink, 
    courses = MOCK_COURSES,
    bgStyle = "bg-wenza-bg",
    columns = 4
}) => {
    return (
        <section className={`w-full py-[72px] px-6 md:px-16 font-sans ${bgStyle}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-wenza-brown font-lora">{title}</h2>
                    {seeAllLink && (
                        <Link href={seeAllLink} className="text-sm font-bold text-wenza-primary hover:text-wenza-primary-hover transition-colors">
                            See all
                        </Link>
                    )}
                </div>
                
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
                    {courses.map(course => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseGrid;
