import { notFound } from 'next/navigation';
import { MOCK_COURSES } from '@/components/page/Courses/mockData';
import CourseDetailsView from '@/components/page/CourseDetails/CourseDetailsView';

export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const courseId = parseInt(resolvedParams.id, 10);
    const course = MOCK_COURSES.find(c => c.id === courseId);

    if (!course) {
        notFound();
    }

    return <CourseDetailsView course={course} />;
}
