import { Metadata } from 'next';
import { ContentPageLayout } from '../../components/content-page-layout';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How Wenza uses cookies and similar technologies on our website.',
};

export default function CookiesPage() {
  return (
    <ContentPageLayout title="COOKIE POLICY">
      <div className="space-y-12 text-text-body">
        <section className="space-y-4">
          <p className="font-bold text-text-heading">Last updated April 20, 2026</p>
          <p>
            This Cookie Policy explains how Wenza (“Company,” “we,” “us,” and “our”) uses cookies and similar technologies to recognise you when you visit our website at https://wenza.com (“Website”). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          <p>
            In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
          </p>
        </section>

        <section id="what-are-cookies" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, Wenza) are called “first-party cookies.” Cookies set by parties other than the website owner are called “third-party cookies.” Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
          </p>
        </section>

        <section id="why-cookies" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">Why do we use cookies?</h2>
          <p>
            We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as “essential” or “strictly necessary” cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
          </p>
        </section>

        <section id="control-browser" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">How can I control cookies on my browser?</h2>
          <p>
            As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser’s help menu for more information. The following is information about how to manage cookies on the most popular browsers:
          </p>
          <ul className="grid grid-cols-2 gap-2 font-medium text-brand-primary md:grid-cols-3">
            <li>Chrome</li>
            <li>Internet Explorer</li>
            <li>Firefox</li>
            <li>Safari</li>
            <li>Edge</li>
            <li>Opera</li>
          </ul>
        </section>

        <section id="update" className="space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">How often will you update this Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
        </section>

        <section id="contact" className="space-y-4 border-t border-white/5 pt-8">
          <h2 className="text-2xl font-bold text-text-heading">Where can I get further information?</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us at:
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
