import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock, FaLayerGroup } from 'react-icons/fa';

interface CourseCardProps {
    id: string | number;
    image: string;
    category: string;
    duration: string;
    title: string;
    description: string;
    mentorName: string;
    mentorAvatar?: string;
    price: string;
    oldPrice?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
    id,
    image,
    category,
    duration,
    title,
    description,
    mentorName,
    mentorAvatar,
    price,
    oldPrice
}) => {
    return (
        <Link href={`/courses/${id}`} className="bg-wenza-card rounded-[20px] p-5 shadow-wenza border border-transparent hover:border-wenza-primary transition-all duration-300 flex flex-col group h-full">
            {/* Image Container */}
            <div className="relative w-full aspect-video rounded-[12px] overflow-hidden mb-4">
                <Image 
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Meta tags */}
            <div className="flex justify-between items-center mb-3 text-wenza-muted text-[11px] font-bold uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                    <FaLayerGroup className="text-[12px]" />
                    <span>{category}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <FaRegClock className="text-[13px]" />
                    <span>{duration}</span>
                </div>
            </div>

            {/* Text Content */}
            <h3 className="text-[18px] font-bold text-wenza-brown font-lora leading-snug mb-2 line-clamp-2">
                {title}
            </h3>
            
            <p className="text-[13px] text-wenza-muted leading-relaxed line-clamp-2 mb-6 flex-1">
                {description}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-wenza-border/50">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-wenza-border bg-wenza-primary flex items-center justify-center font-bold text-white text-[10px]">
                        {mentorAvatar ? (
                            <Image src={mentorAvatar} alt={mentorName} fill sizes="32px" className="object-cover" />
                        ) : (
                            mentorName.charAt(0)
                        )}
                    </div>
                    <div>
                        <p className="text-[13px] font-bold text-wenza-brown">{mentorName}</p>
                        <p className="text-[10px] text-wenza-primary tracking-wide">Wenza Team</p>
                    </div>
                </div>

                <div className="flex items-end gap-2 text-right">
                    {oldPrice && (
                        <span className="text-[13px] text-wenza-muted line-through font-medium mb-[2px]">
                            {oldPrice}
                        </span>
                    )}
                    <span className="text-[18px] font-black text-[#3AC6BE]">
                        {price}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;
