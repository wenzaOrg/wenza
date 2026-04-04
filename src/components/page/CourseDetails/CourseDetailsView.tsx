/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import CourseHeroBanner from './CourseHeroBanner';
import CourseBodyLayout from './CourseBodyLayout';
import CourseGrid from '@/components/page/Courses/CourseGrid';
import { MOCK_COURSES } from '@/components/page/Courses/mockData';

export default function CourseDetailsView({ course }: { course: any }) {
    return (
        <div className="w-full bg-wenza-bg flex flex-col min-h-screen pt-[64px] pb-20 font-sans">
            <CourseHeroBanner course={course} />
            <CourseBodyLayout course={course} />
            
            <div className="mt-20 pt-16 bg-white border-t border-wenza-border/30">
                <div className="max-w-7xl mx-auto mb-8 px-6 md:px-16">
                    <h2 className="text-2xl font-bold text-wenza-brown font-lora">Marketing Articles</h2>
                </div>
                {/* Repurposing CourseGrid since it fits the design visually for Related Articles */}
                <CourseGrid 
                    title="" 
                    bgStyle="bg-white" 
                    courses={MOCK_COURSES.slice(0, 4)}
                    columns={4}
                />
            </div>
        </div>
    );
}
