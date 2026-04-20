import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BaseRequest } from '@wenza/api-client';
import { Course, Envelope } from '@wenza/api-client/types';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CourseDetailClient from './course-detail-client';

interface Props {
  params: {
    slug: string;
  };
}

async function getCourse(slug: string): Promise<Course | null> {
  try {
    const response = await BaseRequest.get<Envelope<Course>>(`/courses/${slug}`);
    return response.data.data;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = await getCourse(params.slug);

  if (!course) {
    return {
      title: 'Course Not Found | Wenza Academy',
    };
  }

  const description = course.description.slice(0, 160) + '...';

  return {
    title: `${course.title} | Wenza Academy`,
    description,
    openGraph: {
      title: course.title,
      description,
      images: [
        {
          url: course.thumbnail_url || '/og-course-default.png',
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
  };
}

export default async function CoursePage({ params }: Props) {
  const course = await getCourse(params.slug);

  if (!course) {
    notFound();
  }

  // Schema.org Course JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'Wenza Academy',
      sameAs: 'https://wenza.org',
    },
    courseCode: course.slug,
    educationalLevel: 'Professional',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetailClient 
        course={course} 
        aboutMdx={<MDXRemote source={course.about_mdx} />} 
      />
    </>
  );
}
