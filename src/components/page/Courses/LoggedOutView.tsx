"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import SearchHero from './SearchHero';
import CategoryGrid from './CategoryGrid';
import CourseGrid from './CourseGrid';
import { MOCK_COURSES } from './mockData';

const LoggedOutView = () => {
    const searchParams = useSearchParams();

    const q = searchParams.get('q')?.toLowerCase() || '';
    const category = searchParams.get('category')?.toLowerCase() || '';
    const level = searchParams.get('level')?.toLowerCase() || '';
    const price = searchParams.get('priceType')?.toLowerCase() || '';
    const duration = searchParams.get('durationFormat')?.toLowerCase() || '';
    const format = searchParams.get('format')?.toLowerCase() || '';

    const isSearching = Boolean(q || category || level || price || duration || format);

    let filteredCourses = MOCK_COURSES;
    if (isSearching) {
        filteredCourses = MOCK_COURSES.filter(course => {
            const matchQ = q === '' || course.title.toLowerCase().includes(q) || course.description.toLowerCase().includes(q);
            const courseCategorySlug = course.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const matchCategory = category === '' || courseCategorySlug.includes(category) || course.category.toLowerCase().includes(category);
            const matchLevel = level === '' || course.level.toLowerCase() === level;
            const matchPrice = price === '' || course.priceType.toLowerCase() === price;
            const matchDuration = duration === '' || course.durationFormat.toLowerCase() === duration;
            const matchFormat = format === '' || course.format.toLowerCase() === format;
            
            return matchQ && matchCategory && matchLevel && matchPrice && matchDuration && matchFormat;
        });
    }

    return (
        <div className="w-full bg-wenza-bg flex flex-col min-h-screen pb-20">
            <SearchHero key={searchParams.toString()} />
            
            {isSearching ? (
                <>
                    <CourseGrid 
                        title={`Search Results (${filteredCourses.length})`} 
                        courses={filteredCourses}
                        bgStyle="bg-wenza-bg" 
                    />
                    {filteredCourses.length === 0 && (
                        <div className="text-center py-20 text-wenza-muted">
                            <p className="text-lg">No courses found matching your criteria.</p>
                            <button 
                                onClick={() => window.location.href = '/courses'} 
                                className="mt-4 text-wenza-primary font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <CategoryGrid />

                    <CourseGrid 
                        title="Recommended for you" 
                        seeAllLink="/courses/recommended" 
                        bgStyle="bg-wenza-bg" 
                    />
                    
                    <CourseGrid 
                        title="The course in personal development" 
                        seeAllLink="/courses/personal-development" 
                        bgStyle="bg-white" 
                    />
                </>
            )}

            <CourseGrid 
                title="Student are viewing" 
                seeAllLink="/courses/trending" 
                bgStyle="bg-wenza-page" 
            />
        </div>
    );
};

export default LoggedOutView;
