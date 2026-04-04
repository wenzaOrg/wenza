"use client";

import React from 'react';
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="grow flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
