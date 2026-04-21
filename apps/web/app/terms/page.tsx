import { Metadata } from 'next';
import { ContentPageLayout } from '../../components/content-page-layout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Wenza’s Terms of Service governing use of the Wenza education platform and services.',
};

export default function TermsPage() {
  return (
    <ContentPageLayout title="TERMS AND CONDITIONS">
      <div className="space-y-12 text-text-body">
        <section className="space-y-4">
          <p className="font-bold text-text-heading">Last updated April 20, 2026</p>
          <h2 className="text-2xl font-bold text-text-heading underline decoration-brand-primary/30 underline-offset-4">AGREEMENT TO OUR LEGAL TERMS</h2>
          <p>
            We are Wenza (“Company,” “we,” “us,” or “our”), a company registered in Nigeria at Lagos, Nigeria.
          </p>
          <p>
            We operate the website https://wenza.com (the “Site”), as well as any other related products and services that refer or link to these legal terms (the “Legal Terms”) (collectively, the “Services”).
          </p>
          <p>
            Wenza operates an online technology education platform. We deliver cohort-based programmes across software development, data science, design, digital marketing, cybersecurity, and related fields to students across Africa and the diaspora. Our Services include the Wenza website, programme application systems, scholarship administration, and any related learning platforms.
          </p>
          <p>
            You can contact us by email at admissions@wenza.com or by mail to Lagos, Nigeria.
          </p>
          <p>
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and Wenza, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
        </section>

        <nav className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-brand-primary/20">
          <h3 className="mb-6 text-xl font-bold text-text-heading">TABLE OF CONTENTS</h3>
          <ul className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
            {[
              '1. OUR SERVICES',
              '2. INTELLECTUAL PROPERTY RIGHTS',
              '3. USER REPRESENTATIONS',
              '4. USER REGISTRATION',
              '5. PRODUCTS',
              '6. PURCHASES AND PAYMENT',
              '7. REFUNDS POLICY',
              '8. PROHIBITED ACTIVITIES',
              '9. USER GENERATED CONTRIBUTIONS',
              '10. CONTRIBUTION LICENCE',
              '11. GUIDELINES FOR REVIEWS',
              '12. THIRD-PARTY WEBSITES AND CONTENT',
              '13. SERVICES MANAGEMENT',
              '14. PRIVACY POLICY',
              '15. COPYRIGHT INFRINGEMENTS',
              '16. TERM AND TERMINATION',
              '17. MODIFICATIONS AND INTERRUPTIONS',
              '18. GOVERNING LAW',
              '19. DISPUTE RESOLUTION',
              '20. CORRECTIONS',
              '21. DISCLAIMER',
              '22. LIMITATIONS OF LIABILITY',
              '23. INDEMNIFICATION',
              '24. USER DATA',
              '25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
              '26. MISCELLANEOUS',
              '27. CONTACT US',
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`#section-${index + 1}`}
                  className="font-medium text-brand-primary hover:underline hover:text-brand-primary/80 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="section-1" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">1. OUR SERVICES</h2>
          <p>
            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
          </p>
        </section>

        <section id="section-2" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">2. INTELLECTUAL PROPERTY RIGHTS</h2>
          <p>
            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the “Content”), as well as the trademarks, service marks, and logos contained therein (the “Marks”).
          </p>
        </section>

        <section id="section-6" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">6. PURCHASES AND PAYMENT</h2>
          <p>We accept the following forms of payment:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mastercard</li>
            <li>Visa</li>
            <li>Paystack</li>
          </ul>
          <p>
            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. All payments shall be in Nigerian Naira.
          </p>
        </section>

        <section id="section-7" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">7. REFUNDS POLICY</h2>
          <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-6">
            <p className="font-semibold text-text-heading">All sales are final and no refund will be issued.</p>
          </div>
        </section>

        <section id="section-18" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">18. GOVERNING LAW</h2>
          <p>
            These Legal Terms shall be governed by and defined following the laws of Nigeria. Wenza and yourself irrevocably consent that the courts of Nigeria shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
          </p>
        </section>

        <section id="section-21" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">21. DISCLAIMER</h2>
          <p className="text-sm italic">
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.
          </p>
        </section>

        <section id="section-27" className="space-y-4 border-t border-white/5 pt-8">
          <h2 className="text-2xl font-bold text-text-heading">27. CONTACT US</h2>
          <p>
            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
          </p>
          <div className="rounded-xl bg-white/5 p-6 font-medium text-text-heading">
            <p>Wenza Academy</p>
            <p>Lagos, Nigeria</p>
            <p className="mt-2 text-brand-primary">admissions@wenza.com</p>
          </div>
        </section>
      </div>
    </ContentPageLayout>
  );
}
