"use client"
import React, { useState, useRef, useEffect } from 'react';

export interface ThemedDropdownProps {
    label?: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
    className?: string;
}

const ThemedDropdown: React.FC<ThemedDropdownProps> = ({
    label,
    options,
    value,
    onChange,
    placeholder = 'Select option',
    error,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`flex flex-col w-full relative ${className}`} ref={dropdownRef}>
            {label && (
                <label className="text-[14px] text-wenza-text mb-1.5 font-medium">
                    {label}
                </label>
            )}
            
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full h-11 border rounded-[8px] px-4 text-[15px] bg-wenza-card outline-none transition-all duration-200
                    flex items-center justify-between text-left
                    ${error
                        ? 'border-wenza-error focus:ring-4 focus:ring-wenza-error/10'
                        : 'border-wenza-border focus:ring-4 focus:ring-wenza-primary/10 focus:border-wenza-primary'
                    }
                    ${value ? 'text-wenza-brown' : 'text-wenza-muted'}
                `}
            >
                <span className="truncate">{value || placeholder}</span>
                <svg
                    className={`shrink-0 w-4 h-4 text-wenza-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {error && <span className="text-[12px] text-wenza-error mt-1">{error}</span>}

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-wenza-border rounded-[8px] shadow-wenza overflow-hidden z-20">
                    <ul className="py-1 max-h-[240px] overflow-y-auto">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                                className={`
                                    px-4 py-2.5 text-[14px] cursor-pointer transition-colors
                                    ${value === option
                                        ? 'bg-wenza-bg text-wenza-primary font-medium'
                                        : 'text-wenza-text hover:bg-wenza-bg'
                                    }
                                `}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ThemedDropdown;
