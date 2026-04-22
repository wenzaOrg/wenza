'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import Link from 'next/link';

interface CookieConsentProps {
  mainSiteUrl?: string;
}

export function CookieConsent({ mainSiteUrl = 'https://wenza.com' }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('wenza-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('wenza-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('wenza-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 z-50 md:left-auto md:right-8 md:max-w-md"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-page/80 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-brand-primary/30">
            {/* Background Decorative Element */}
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-primary/5 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand-secondary/5 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Cookie className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-text-heading">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="ml-auto text-text-muted transition-colors hover:text-text-body"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-sm leading-relaxed text-text-body">
                We use cookies to enhance your browsing experience, serve personalised content, and analyse our traffic. By clicking “Accept”, you consent to our use of cookies.
                <Link
                  href={`${mainSiteUrl}/cookies`}
                  className="ml-1 font-medium text-brand-primary hover:underline"
                >
                  Learn more about our Cookie Policy.
                </Link>
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={handleAccept}
                  className="flex-1 rounded-xl bg-brand-primary px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-primary/20 transition-all hover:bg-brand-primary/90 hover:shadow-brand-primary/30 active:scale-95"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-center text-sm font-semibold text-text-body transition-all hover:bg-white/10 hover:text-text-heading active:scale-95"
                >
                  Reject Non-Essential
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
