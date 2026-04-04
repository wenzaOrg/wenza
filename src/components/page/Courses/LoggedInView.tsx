import React from 'react';
import WelcomeBack from './WelcomeBack';
import CategoryGrid from './CategoryGrid';
import CourseGrid from './CourseGrid';
import MentorList from './MentorList';

const LoggedInView = () => {
    return (
        <div className="w-full bg-wenza-bg flex flex-col min-h-screen pb-20">
            <WelcomeBack />
            
            <CategoryGrid />
            
            <CourseGrid 
                title="Recommended for you" 
                seeAllLink="/courses/recommended" 
                bgStyle="bg-wenza-bg" 
            />
            
            <MentorList />
            
            <CourseGrid 
                title="Student are viewing" 
                seeAllLink="/courses/trending" 
                bgStyle="bg-wenza-page" 
            />
        </div>
    );
};

export default LoggedInView;
