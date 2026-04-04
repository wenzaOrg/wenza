import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-wenza-dark pt-14 pb-7 text-wenza-border">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="font-bold text-[22px] text-white">Wenza</Link>
            <p className="text-sm text-wenza-border leading-relaxed">
              Nigeria&apos;s tech learning platform. Master programming, web dev, mobile apps, and data science with expert mentorship and community.
            </p>
            <div className="flex items-center gap-3 text-wenza-gold mt-2">
              <Link href="#" className="hover:text-white transition-colors"><FaFacebook size={18} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><FaTwitter size={18} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><FaInstagram size={18} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><FaLinkedin size={18} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><FaYoutube size={18} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><FaTiktok size={18} /></Link>
            </div>
            <a href="mailto:hello@wenza.ng" className="text-sm hover:text-wenza-gold transition-colors mt-2">
              hello@wenza.ng
            </a>
          </div>

          {/* Col 2: Learn */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white mb-2">Learn</h4>
            {[
              { label: 'All Courses', href: '/courses' },
              { label: 'Python', href: '/courses?q=Python' },
              { label: 'JavaScript', href: '/courses?q=JavaScript' },
              { label: 'React & Next.js', href: '/courses?q=React' },
              { label: 'Mobile Development', href: '/courses?category=Mobile' },
              { label: 'Data Science', href: '/courses?category=Data Science' },
              { label: 'AI & Machine Learning', href: '/courses?category=AI' },
              { label: 'Free Courses', href: '/courses?price=Free' }
            ].map(item => (
              <Link key={item.label} href={item.href} className="text-sm hover:text-wenza-gold transition-colors">{item.label}</Link>
            ))}
          </div>

          {/* Col 3: Platform */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white mb-2">Platform</h4>
            {[
              { label: 'Live Mentorship', href: '/mentorship' },
              { label: 'Community & Forums', href: '/community' },
              { label: 'Study Groups', href: '/community' },
              { label: 'Certificates', href: '/dashboard' },
              { label: 'Career Support', href: '/dashboard' },
              { label: 'Student Dashboard', href: '/dashboard' }
            ].map(item => (
              <Link key={item.label} href={item.href} className="text-sm hover:text-wenza-gold transition-colors">{item.label}</Link>
            ))}
          </div>

          {/* Col 4: Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white mb-2">Company</h4>
            {[
              { label: 'About Wenza', href: '/about' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Contact Us', href: '/contact' },
              { label: 'Careers', href: '/contact' },
              { label: 'Blog', href: '/blog' },
              { label: 'Privacy Policy', href: '/' },
              { label: 'Terms of Service', href: '/' }
            ].map(item => (
              <Link key={item.label} href={item.href} className="text-sm hover:text-wenza-gold transition-colors">{item.label}</Link>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-wenza-border/20 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
          Copyright © Wenza 2026
        </div>
      </div>
    </footer>
  );
}

export default Footer;
