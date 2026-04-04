"use client";

import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';

function AuthContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isLogin = searchParams.get('mode') !== 'signup';
  
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = (login: boolean) => {
    router.replace(login ? '/auth' : '/auth?mode=signup', { scroll: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="w-full h-dvh flex flex-col md:flex-row bg-white overflow-hidden">
       
          {/* LEFT SIDE: Pattern & Branding */}
          <div className="hidden md:flex w-full md:w-[45%] h-full relative bg-linear-to-br from-wenza-brown via-wenza-bdark to-[#1a0f08] p-12 lg:p-16 flex-col justify-end overflow-hidden group">
            {/* Custom UI Pattern (Dots & Glow) */}
            <div className="absolute inset-0 opacity-15 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white_2px,transparent_2px)] bg-size-[32px_32px]"></div>
            </div>
            
            {/* Abstract Decorative Shapes */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-wenza-primary blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-wenza-gold blur-[100px] opacity-20 group-hover:opacity-10 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col mt-auto max-w-[480px]">
              <div className="w-16 h-1 bg-wenza-gold mb-6 rounded-full"></div>
              <h2 className="text-[36px] font-bold text-white font-lora leading-[1.1] tracking-tight mb-4">
                {isLogin ? "Welcome back to Wenza." : "Start your journey today."}
              </h2>
              <p className="text-[16px] text-white/80 leading-relaxed font-medium">
                Nigeria&apos;s affordable e-learning marketplace. Master programming, web dev, mobile apps, and data science with expert mentorship.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Form Context */}
          <div className="w-full md:w-[55%] h-full overflow-y-auto bg-white px-8 py-12 md:pt-20 pb-16 flex flex-col items-center relative">
            
            <div className="absolute top-6 left-6 md:top-8 md:flex">
              <Link href="/" className="flex items-center gap-2 text-[14px] font-bold text-wenza-muted hover:text-wenza-brown transition-colors">
                <FaArrowLeft /> Back to Home
              </Link>
            </div>

            <div className="w-full max-w-[400px] flex flex-col mt-8 md:mt-0">
              <div className="text-center mb-8">
                <h1 className="text-[24px] font-bold text-wenza-brown mb-2 font-lora">
                  Welcome to Wenza..!
                </h1>
                <p className="text-[14px] text-wenza-muted">
                  Log in to continue your tech education journey.
                </p>
              </div>

              {/* Pill Toggle Switch */}
              <div className="w-full max-w-[320px] mx-auto flex p-1.5 bg-[#F5F1EB] rounded-[100px] mb-10 relative shadow-inner">
                 <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-wenza-primary rounded-[100px] shadow-sm transition-all duration-300 ease-in-out ${isLogin ? 'left-1.5' : 'left-[calc(50%+4.5px)]'}`} />
                 <button 
                   className={`flex-1 flex items-center justify-center h-10 text-[14px] font-bold z-10 transition-colors rounded-[100px] ${isLogin ? 'text-white' : 'text-wenza-muted hover:text-wenza-brown'}`}
                   onClick={() => toggleMode(true)}
                 >
                   Login
                 </button>
                 <button 
                   className={`flex-1 flex items-center justify-center h-10 text-[14px] font-bold z-10 transition-colors rounded-[100px] ${!isLogin ? 'text-white' : 'text-wenza-muted hover:text-wenza-brown'}`}
                   onClick={() => toggleMode(false)}
                 >
                   Register
                 </button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                 
                 {!isLogin && (
                   <div className="flex flex-col gap-2 animate-fade-in">
                     <label htmlFor="name" className="text-[13px] font-semibold text-wenza-brown tracking-wide">Full Name</label>
                     <input 
                       id="name"
                       type="text" 
                       className="w-full h-12 border border-wenza-border rounded-[12px] px-5 focus:outline-none focus:border-wenza-primary focus:ring-2 focus:ring-wenza-primary/20 transition-all text-[14px]" 
                       placeholder="Enter your full name"
                       required
                     />
                   </div>
                 )}

                 <div className="flex flex-col gap-2">
                   <label htmlFor="email" className="text-[13px] font-semibold text-wenza-brown tracking-wide">Email Address</label>
                   <input 
                     id="email"
                     type="email" 
                     className="w-full h-12 border border-wenza-border rounded-[12px] px-5 focus:outline-none focus:border-wenza-primary focus:ring-2 focus:ring-wenza-primary/20 transition-all text-[14px]" 
                     placeholder="hello@example.com"
                     required
                   />
                 </div>

                 <div className="flex flex-col gap-2">
                   <label htmlFor="password" className="text-[13px] font-semibold text-wenza-brown tracking-wide">Password</label>
                   <div className="relative">
                     <input 
                       id="password"
                       type={showPassword ? "text" : "password"} 
                       className="w-full h-12 border border-wenza-border rounded-[12px] pl-5 pr-12 focus:outline-none focus:border-wenza-primary focus:ring-2 focus:ring-wenza-primary/20 transition-all text-[14px]" 
                       placeholder="Enter your password"
                       required
                     />
                     <button
                       type="button"
                       onClick={() => setShowPassword(!showPassword)}
                       className="absolute right-4 top-1/2 -translate-y-1/2 text-wenza-muted hover:text-wenza-brown transition-colors focus:outline-none"
                     >
                       {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                     </button>
                   </div>
                 </div>

                 <div className="flex items-center justify-between mt-1">
                   {isLogin ? (
                     <>
                       <label className="flex items-center gap-2 cursor-pointer group">
                         <input type="checkbox" className="w-4 h-4 cursor-pointer rounded-[4px] border-wenza-border accent-wenza-primary text-wenza-primary focus:ring-wenza-primary" />
                         <span className="text-[13px] text-wenza-muted group-hover:text-wenza-text transition-colors ml-2">Remember me</span>
                       </label>
                       <Link href="#" className="text-[13px] font-medium text-wenza-muted hover:text-wenza-primary transition-colors">
                         Forgot Password?
                       </Link>
                     </>
                   ) : (
                     <p className="text-[12px] text-wenza-muted tracking-tight">
                       By registering, you accept our <Link href="#" className="text-wenza-primary hover:underline">Terms</Link> and <Link href="#" className="text-wenza-primary hover:underline">Privacy Policy</Link>.
                     </p>
                   )}
                 </div>

                 <button 
                   type="submit" 
                   className="w-full h-[52px] bg-wenza-primary hover:bg-wenza-primary-hover text-white font-bold rounded-[12px] transition-all hover:shadow-[0_8px_20px_rgba(176,80,16,0.3)] mt-4 text-[15px] hover:-translate-y-0.5 active:translate-y-0"
                 >
                   {isLogin ? 'Login' : 'Register Now'}
                 </button>

              </form>
              
              <div className="w-full flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-wenza-border"></div>
                <span className="text-[12px] text-wenza-muted uppercase tracking-wider font-semibold">Or continue with</span>
                <div className="flex-1 h-px bg-wenza-border"></div>
              </div>

              <div className="flex gap-4">
                 <button className="flex-1 h-[48px] border border-wenza-border rounded-[12px] bg-white hover:bg-[#F5F1EB] text-wenza-brown font-semibold flex items-center justify-center gap-3 transition-colors text-[14px]">
                   <FaGoogle className="text-[#DB4437] text-lg" /> Google
                 </button>
                 <button className="flex-1 h-[48px] border border-wenza-border rounded-[12px] bg-white hover:bg-[#F5F1EB] text-wenza-brown font-semibold flex items-center justify-center gap-3 transition-colors text-[14px]">
                   <FaGithub className="text-[#333] text-lg" /> GitHub
                 </button>
              </div>

            </div>
          </div>

    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen flex justify-center items-center bg-wenza-page">Loading Auth...</div>}>
      <AuthContent />
    </Suspense>
  )
}
