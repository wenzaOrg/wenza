"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CheckoutLayout from '@/components/page/Checkout/CheckoutLayout';

export default function CheckoutPage() {
    const router = useRouter();
    // Simulate auth state. In reality, check your global store or JWT token here.
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        // Mock API call to check auth status
        setTimeout(() => {
            const hasToken = true; // Hardcoded true for design preview. Set to false to test redirect!
            if (!hasToken) {
                router.push('/auth');
            } else {
                setIsAuthenticated(true);
            }
        }, 300); // Artificial delay to prevent aggressive flashing
    }, [router]);

    if (isAuthenticated === null) {
        return (
            <div className="w-full min-h-[60vh] flex items-center justify-center bg-wenza-page pt-[64px]">
                <div className="w-10 h-10 border-4 border-wenza-bg border-t-wenza-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    // Only render if logged in
    return <CheckoutLayout />;
}
