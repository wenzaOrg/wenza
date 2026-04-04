"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import ThemedButton from '@/components/common/ThemedButton';
import Hamburger from '../Hamburger';
import WenzaLogo from '@/assets/img/wenza-logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/courses", label: "Courses" },
        { href: "/mentorship", label: "Mentorship" },
        { href: "/blog", label: "Blog" },
        { href: "/pricing", label: "Pricing" },
        { href: "/about", label: "About" },
    ];

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full h-[64px] bg-white border-b border-wenza-border z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-16 h-full flex items-center justify-between">
                
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                    <Image src={WenzaLogo} alt="Wenza Logo" className="h-8 w-auto" />
                    <span className="font-bold text-2xl text-wenza-brown hidden sm:block">Wenza</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[15px] font-medium transition-colors ${
                                    isActive 
                                    ? "text-wenza-primary border-b-2 border-wenza-primary py-5" 
                                    : "text-wenza-text hover:text-wenza-primary py-5"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/auth" className="text-wenza-primary font-medium hover:text-wenza-primary-hover">
                        Log In
                    </Link>
                    <ThemedButton 
                        variant="primary" 
                        size="md" 
                        className="h-10 px-5 rounded-[8px]"
                        onClick={() => router.push('/auth?mode=signup')}
                    >
                        Start Learning
                    </ThemedButton>
                </div>

                {/* Mobile Hamburger */}
                <div className="flex flex-row md:hidden items-center gap-4">
                     <Hamburger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 top-[64px] z-40 md:hidden bg-wenza-bg transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                }`}
            >
                <div className="flex flex-col h-full bg-wenza-bg p-6 overflow-y-auto">
                    <div className="flex flex-col gap-0 flex-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={`text-lg font-medium py-3 border-b border-wenza-border ${
                                        isActive ? "text-wenza-primary" : "text-wenza-text"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                        <Link 
                            href="/auth" 
                            onClick={closeMenu}
                            className="text-center text-wenza-primary font-bold text-lg py-2"
                        >
                            Log In
                        </Link>
                        <ThemedButton 
                            variant="primary" 
                            size="lg"
                            fullWidth
                            className="rounded-[8px]"
                            onClick={() => {
                                closeMenu();
                                router.push('/auth?mode=signup');
                            }}
                        >
                            Start Learning
                        </ThemedButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
