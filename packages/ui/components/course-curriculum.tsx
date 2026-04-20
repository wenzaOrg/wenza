'use client';

import * as React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';
import { Card } from './card';
import { cn } from '../lib/utils';

export interface CurriculumItem {
  week: number;
  title: string;
  topics: string[];
}

interface CourseCurriculumProps {
  curriculum: CurriculumItem[];
  className?: string;
}

export const CourseCurriculum: React.FC<CourseCurriculumProps> = ({
  curriculum,
  className,
}) => {
  if (!curriculum || curriculum.length === 0) return null;

  return (
    <Card className={cn('overflow-hidden', className)}>
      <Accordion type="single" collapsible className="w-full">
        {curriculum.map((item, index) => (
          <AccordionItem key={index} value={`week-${item.week}`} className="border-border/10 px-6">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-6 text-left">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {item.week}
                </span>
                <span className="text-lg font-bold text-text-heading">
                  {item.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-8 pl-16">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {item.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start gap-2 text-text-body/80 text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                    {topic}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};
