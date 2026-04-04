/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';

export default function CourseHeroBanner({ course }: { course: any }) {
    return (
        <section className="relative w-full h-[400px] md:h-[500px]">
             <div className="absolute inset-0 z-0">
                <Image 
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-wenza-brown/40 mix-blend-multiply" />
            </div>
            
            {/* Optional Overlay Text can go here */}
        </section>
    );
}
