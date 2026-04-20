import * as React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Users, 
  Calendar, 
  BookText, 
  ChevronRight,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Card, Button } from '@wenza/ui';

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ThankYouPage({ searchParams }: Props) {
  const reference = typeof searchParams.reference === 'string' ? searchParams.reference : 'LEAD-XXXXXX';

  return (
    <main className="min-h-screen bg-bg-page flex flex-col">
      {/* Hero Section */}
      <section className="bg-bg-deep-brown text-white pt-24 pb-16 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        <div className="container px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success/20 rounded-full mb-8 animate-in zoom-in-50 duration-700">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Application Received</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Thank you for applying to Wenza Academy. Your journey towards tech mastery starts here.
          </p>
          
          <div className="inline-flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Reference Code</span>
            <span className="text-3xl font-mono font-bold tracking-widest text-primary">{reference}</span>
          </div>
          
          <p className="mt-8 text-white/50 font-medium">
            We’ll be in touch within 2 business days.
          </p>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-24 container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-text-heading mb-12 text-center md:text-left">
            While you wait...
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <EngagementCard 
              icon={<Users className="w-6 h-6" />}
              title="Join our WhatsApp community"
              description="Connect with fellow applicants and get instant updates."
              href={process.env.NEXT_PUBLIC_WHATSAPP_URL!}
              cta="Join Group"
            />
            <EngagementCard 
              icon={<Calendar className="w-6 h-6" />}
              title="Book a free info session"
              description="Got questions? Chat with our admissions team live."
              href={process.env.NEXT_PUBLIC_CALENDLY_URL!}
              cta="Schedule Call"
            />
            <EngagementCard 
              icon={<BookText className="w-6 h-6" />}
              title="Read student stories"
              description="See how Wenza transformed careers for others like you."
              href="/testimonials"
              cta="Read Stories"
              isInternal
            />
          </div>

          <div className="mt-20 p-10 bg-bg-card rounded-[2rem] border border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-text-heading mb-2">Have questions?</h3>
              <p className="text-text-body/60">Our team is ready to help you with anything you need.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" className="gap-2">
                <Mail className="w-4 h-4" /> Email Admissions
              </Button>
              <Link href="/">
                <Button variant="ghost" className="gap-2">
                  Back to Homepage <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function EngagementCard({ 
  icon, 
  title, 
  description, 
  href, 
  cta, 
  isInternal = false 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  href: string,
  cta: string,
  isInternal?: boolean
}) {
  const CardContent = (
    <Card className="p-8 h-full flex flex-col hover:border-primary/30 transition-all hover:shadow-card-hover group">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-text-heading mb-3">{title}</h3>
      <p className="text-sm text-text-body/70 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <div className="flex items-center gap-2 text-primary font-bold text-sm">
        {cta} <ChevronRight className="w-4 h-4" />
      </div>
    </Card>
  );

  if (isInternal) {
    return (
      <Link href={href} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {CardContent}
    </a>
  );
}
