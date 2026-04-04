"use client";

import ThemedButton from '@/components/common/ThemedButton';
import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const CookieConsent = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('wenza-cookie-consent', 'accepted');
        setIsClosed(true);
    };

    const handleReject = () => {
        localStorage.setItem('wenza-cookie-consent', 'rejected');
        setIsClosed(true);
    };

    const handleClose = () => {
        setIsClosed(true);
    };

    if (!isMounted) return null;
    if (isClosed) return null;
    
    const consent = localStorage.getItem('wenza-cookie-consent');
    if (consent) return null;

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-wenza-card rounded-2xl md:rounded-[24px] shadow-2xl border border-wenza-border p-6 md:p-8 md:py-6 md:pt-14 z-50 flex flex-col gap-6 font-sans animate-fade-in">
            <button
                onClick={handleClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-wenza-muted hover:text-wenza-brown transition-colors"
                aria-label="Close cookie consent"
            >
                <IoCloseOutline size={28} />
            </button>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
                <div className="flex-1 pr-8">
                    <h3 className="text-xl md:text-[24px] font-bold text-wenza-brown font-lora mb-3 md:mb-4">
                        Your Privacy on Wenza
                    </h3>
                    <p className="text-[14px] md:text-[15px] font-medium text-wenza-text leading-relaxed max-w-3xl opacity-90">
                        By clicking &quot;Accept All&quot;, you agree to the storing of cookies on your device. We use cookies to enhance your learning experience, ensure smooth offline downloads, and analyze platform usage so we can keep delivering the best tech education for Nigerian developers.
                    </p>
                </div>

                <div className="flex flex-row items-center gap-3 md:gap-4 shrink-0 mt-2 md:mt-0">
                    <ThemedButton
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-6 py-2.5 md:px-8 md:py-3 shadow-md"
                    >
                        Accept all
                    </ThemedButton>
                    <ThemedButton
                        onClick={handleReject}
                        variant='outline'
                        className="flex-1 md:flex-none px-6 py-2.5 md:px-8 md:py-3 bg-white"
                    >
                        Reject
                    </ThemedButton>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
