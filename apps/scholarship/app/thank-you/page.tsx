import * as React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Users, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Card, Button } from '@wenza/ui';

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ScholarshipThankYouPage({ searchParams }: Props) {
  const reference = typeof searchParams.reference === 'string' ? searchParams.reference : 'SCH-XXXXXX';

  return (
    <main className="min-h-screen bg-bg-page flex flex-col py-20 px-4">
      <div className="container max-w-4xl mx-auto flex-grow flex flex-col items-center justify-center">
        
        <div className="text-center space-y-8 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-success/10 rounded-3xl mb-4">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-black text-text-heading tracking-tight leading-none">
            Application Received!
          </h1>
          
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-medium">
            Your scholarship application has been successfully submitted. We review applications based on merit and financial need.
          </p>

          <div className="inline-flex flex-col items-center p-8 bg-bg-card rounded-[2.5rem] border-2 border-primary/20 shadow-[0_20px_50px_rgba(var(--primary-rgb),0.1)]">
             <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-3">Application Reference</span>
             <span className="text-4xl md:text-5xl font-mono font-black tracking-[0.2em] text-text-heading">{reference}</span>
          </div>

          <p className="text-text-muted font-black uppercase tracking-widest text-sm pt-4">
            Estimated Review Time: <span className="text-text-heading">4 Weeks</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-300 ease-out fill-mode-both">
           <Link href="https://wenza.com/courses" className="block group">
              <Card className="p-8 border-border bg-bg-card hover:border-primary/50 transition-all shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 h-full flex flex-col">
                 <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <ShieldCheck size={28} />
                 </div>
                 <h3 className="text-xl font-black text-text-heading mb-2">Explore Programmes</h3>
                 <p className="text-text-muted text-sm leading-relaxed mb-6 font-medium flex-grow">Browse our range of technical courses and find your perfect fit while you wait.</p>
                 <div className="flex items-center gap-2 text-primary font-black text-sm">
                   View Courses <ArrowRight size={18} />
                 </div>
              </Card>
           </Link>

           <a href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://chat.whatsapp.com/G5K5kX8V"} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="p-8 border-border bg-bg-card hover:border-success/50 transition-all shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 h-full flex flex-col">
                 <div className="w-14 h-14 bg-success/10 rounded-2xl flex items-center justify-center text-success mb-6 group-hover:bg-success group-hover:text-white transition-colors shrink-0">
                    <Users size={28} />
                 </div>
                 <h3 className="text-xl font-black text-text-heading mb-2">Join Community</h3>
                 <p className="text-text-muted text-sm leading-relaxed mb-6 font-medium flex-grow">Connect with fellow learners and get the latest updates in our community group.</p>
                 <div className="flex items-center gap-2 text-success font-black text-sm">
                   Join WhatsApp <ArrowRight size={18} />
                 </div>
              </Card>
           </a>
        </div>

        <div className="mt-20 text-center animate-in fade-in duration-1000 delay-700 fill-mode-both">
          <Link href="https://wenza.com">
            <Button variant="ghost" className="h-14 px-8 text-lg font-black hover:bg-bg-card transition-all">
               Return to Wenza Homepage <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

      </div>
    </main>
  );
}
