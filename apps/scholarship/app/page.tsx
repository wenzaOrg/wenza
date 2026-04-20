import { Button, Card } from '@wenza/ui';
import { ArrowRight, CheckCircle2, GraduationCap, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ScholarshipHome() {
  const mainUrl = 'https://wenza.com';

  return (
    <main className="min-h-screen bg-bg-page relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-accent-gold/5 blur-[100px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 pt-32 pb-24 relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
           <Sparkles className="w-4 h-4 text-primary" />
           <span className="text-primary font-black text-xs uppercase tracking-widest">Wenza Merit Programme 2026</span>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h1 className="text-5xl md:text-8xl font-heading font-black text-text-heading tracking-tight leading-[0.9]">
            Education is a <span className="text-primary">Right</span>,<br/>Not a Privilege.
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto leading-relaxed font-medium">
             Our scholarship programme empowers the next generation of tech leaders by removing financial barriers. We cover up to <span className="text-text-heading font-bold italic underline decoration-primary/30 text-decoration-skip-ink-none">90% of programme fees</span>.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/apply">
              <Button variant="primary" size="lg" className="h-16 px-10 text-xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all">
                 Apply for Scholarship <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link href={`${mainUrl}/courses`}>
               <Button variant="ghost" size="lg" className="h-16 px-10 text-xl font-black hover:bg-bg-card transition-all">
                  Explore Programmes
               </Button>
            </Link>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8 w-full animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
           <Card className="p-10 border-border bg-bg-card/50 backdrop-blur-lg hover:border-primary/30 transition-all group overflow-hidden h-full flex flex-col">
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />
             <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform shrink-0">
                <CheckCircle2 size={32} />
             </div>
             <h3 className="text-2xl font-black text-text-heading mb-4 leading-tight">Merit Based</h3>
             <p className="text-text-muted leading-relaxed font-medium flex-grow">Awarded to candidates who demonstrate exceptional passion, curiosity, and potential in their chosen tech track.</p>
           </Card>

           <Card className="p-10 border-border bg-bg-card/50 backdrop-blur-lg hover:border-accent-gold/30 transition-all group overflow-hidden h-full flex flex-col">
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full group-hover:bg-accent-gold/10 transition-colors" />
             <div className="w-14 h-14 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-accent-gold mb-8 group-hover:scale-110 transition-transform shrink-0">
                <GraduationCap size={32} />
             </div>
             <h3 className="text-2xl font-black text-text-heading mb-4 leading-tight">Global Access</h3>
             <p className="text-text-muted leading-relaxed font-medium flex-grow">Available to applicants worldwide. We prioritise talent from underrepresented regions and communities.</p>
           </Card>

           <Card className="p-10 border-border bg-bg-card/50 backdrop-blur-lg hover:border-primary/30 transition-all group overflow-hidden h-full flex flex-col">
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />
             <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform shrink-0">
                <Zap size={32} />
             </div>
             <h3 className="text-2xl font-black text-text-heading mb-4 leading-tight">Instant Impact</h3>
             <p className="text-text-muted leading-relaxed font-medium flex-grow">Get a decision within 4 weeks. Once accepted, you start learning in the next available cohort immediately.</p>
           </Card>
        </div>

        {/* Footer Text */}
        <div className="mt-24 text-center space-y-4 opacity-40 animate-in fade-in duration-1000 delay-1000 fill-mode-both">
           <p className="font-black text-sm uppercase tracking-[0.3em] text-text-muted">Applications for Phoenix 2026 are now open</p>
           <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <span className="font-bold">Trusted by 2,000+ Students</span>
              <span className="font-bold">98% Success Rate</span>
           </div>
        </div>

      </div>
    </main>
  );
}
