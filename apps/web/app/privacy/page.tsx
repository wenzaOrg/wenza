import { Metadata } from 'next';
import { ContentPageLayout } from '../../components/content-page-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Wenza collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <ContentPageLayout title="PRIVACY NOTICE">
      <div className="space-y-12 text-text-body">
        <section className="space-y-4">
          <p className="font-bold text-text-heading">Last updated April 20, 2026</p>
          <p>
            This Privacy Notice for Wenza (“we,” “us,” or “our”), describes how and why we might access, collect, store, use, and/or share (“process”) your personal information when you use our services (“Services”), including when you visit our website at https://wenza.com or apply for our programmes.
          </p>
          <p>
            Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at admissions@wenza.com.
          </p>
        </section>

        <section id="summary" className="rounded-2xl border border-white/5 bg-white/5 p-8 transition-all hover:border-brand-primary/20">
          <h2 className="mb-6 text-2xl font-bold text-text-heading">SUMMARY OF KEY POINTS</h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
            <p><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
            <p><strong>Do we collect any information from third parties?</strong> We may collect information from public databases, marketing partners, and other outside sources.</p>
            <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process your information only when we have a valid legal reason to do so.</p>
            <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties, such as payment processors (Paystack) or infrastructure providers.</p>
          </div>
        </section>

        <section id="toc" className="space-y-4">
          <h2 className="text-xl font-bold text-text-heading">TABLE OF CONTENTS</h2>
          <nav className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {[
              '1. WHAT INFORMATION DO WE COLLECT?',
              '2. HOW DO WE PROCESS YOUR INFORMATION?',
              '3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
              '4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
              '5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?',
              '6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?',
              '7. HOW LONG DO WE KEEP YOUR INFORMATION?',
              '8. DO WE COLLECT INFORMATION FROM MINORS?',
              '9. WHAT ARE YOUR PRIVACY RIGHTS?',
              '10. CONTROLS FOR DO-NOT-TRACK FEATURES',
              '11. DO WE MAKE UPDATES TO THIS NOTICE?',
              '12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
              '13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?',
            ].map((item, index) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                className="text-sm font-medium text-brand-primary hover:underline hover:text-brand-primary/80 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </section>

        <section id="section-1" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">1. WHAT INFORMATION DO WE COLLECT?</h2>
          <h3 className="text-xl font-bold text-text-heading">Personal information you disclose to us</h3>
          <p>
            We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
          </p>
          <h3 className="text-xl font-bold text-text-heading">Information automatically collected</h3>
          <p>
            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Services.
          </p>
        </section>

        <section id="section-2" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p>
            We process your personal information for a variety of reasons, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate account creation and authentication and otherwise manage user accounts.</li>
            <li>To deliver and facilitate delivery of services to the user.</li>
            <li>To respond to user inquiries/offer support to users.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfil and manage your orders/applications.</li>
            <li>To request feedback.</li>
            <li>To send you marketing and promotional communications.</li>
            <li>To protect our Services and for fraud prevention.</li>
          </ul>
        </section>

        <section id="section-3" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
          <p>
            We may share your personal information in specific situations, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Infrastructure Providers:</strong> We use Vercel and AWS for hosting and service delivery.</li>
            <li><strong>Payment Processors:</strong> We use Paystack for processing tuition payments.</li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.</li>
          </ul>
        </section>

        <section id="section-6" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
          <p>
            Our servers are located in various locations worldwide. Please be aware that your information may be transferred to, stored by, and processed by us and our third-party partners. If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.
          </p>
        </section>

        <section id="section-7" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
          </p>
        </section>

        <section id="section-8" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p>
            We do not knowingly collect data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services.
          </p>
        </section>

        <section id="section-12" className="space-y-4 border-t border-white/5 pt-8">
          <h2 className="text-2xl font-bold text-text-heading">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <p>
            If you have questions or comments about this notice, you may contact us by email at <span className="text-brand-primary">admissions@wenza.com</span> or by post at:
          </p>
          <div className="rounded-xl bg-white/5 p-6 font-medium text-text-heading">
            <p>Wenza Academy</p>
            <p>Lagos, Nigeria</p>
          </div>
        </section>
      </div>
    </ContentPageLayout>
  );
}
