'use client';

import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Turnstile } from '@marsidev/react-turnstile';
import { Mail, MessageSquare, ExternalLink, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { 
  Button, 
  Card, 
  Input, 
  FormField, 
  Textarea, 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue
} from '@wenza/ui';
import { contactMessageSchema, type ContactMessageSubmission, useMutationRequest } from '@wenza/api-client';
import { ContentPageLayout } from '../../components/content-page-layout';

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [referenceCode, setReferenceCode] = React.useState('');
  const [serverError, setServerError] = React.useState<string | null>(null);

  const { trigger, isMutating } = useMutationRequest<{ reference_code: string }, ContactMessageSubmission>('contact-messages');

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactMessageSubmission>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      full_name: '',
      email: '',
      subject: undefined,
      message: '',
      turnstile_token: '',
    },
  });

  const full_name = watch('full_name');
  const message = watch('message');

  const onSubmit = async (data: ContactMessageSubmission) => {
    setServerError(null);
    try {
      const res = await trigger(data);
      if (res?.data?.reference_code) {
        setReferenceCode(res.data.reference_code);
        setIsSuccess(true);
        window.scrollTo(0, 0);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setServerError(message);
    }
  };

  return (
    <ContentPageLayout title="Get in touch">
      <div className="space-y-16">
        {/* Sub-heading */}
        <section>
          <p className="text-xl text-text-body font-medium leading-relaxed -mt-8">
            Questions about Wenza? We’d love to hear from you.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="p-8 border border-border bg-bg-card shadow-card flex flex-col gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-heading mb-2">Admissions & general enquiries</h3>
              <a 
                href="mailto:admissions@wenza.com" 
                className="text-primary font-bold hover:underline inline-flex items-center gap-2 group"
              >
                admissions@wenza.com
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="mt-4 text-text-body">
                For applications, scholarships, press, partnerships, and anything else.
              </p>
            </div>
          </Card>

          <Card className="p-8 border border-border bg-bg-card shadow-card flex flex-col gap-4">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-heading mb-2">Student support</h3>
              <a 
                href="mailto:support@wenza.com" 
                className="text-secondary font-bold hover:underline inline-flex items-center gap-2 group"
              >
                support@wenza.com
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="mt-4 text-text-body">
                Already enrolled? Your cohort’s support channel for technical and programme questions.
              </p>
            </div>
          </Card>
        </section>

        {/* Form Section */}
        <section id="contact-form">
          {isSuccess ? (
            <div className="bg-success/5 border border-success/20 rounded-card p-10 text-center animate-in zoom-in-95 duration-500">
              <div className="mx-auto h-16 w-16 bg-success text-white rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-heading mb-4">Message Sent</h3>
              <p className="text-lg text-text-body leading-relaxed max-w-lg mx-auto">
                Thanks, <span className="font-bold text-text-heading">{full_name}</span>. We’ve received your message and will reply within 2 business days.
              </p>
              <div className="mt-8 p-4 bg-white/50 rounded-lg inline-block border border-border">
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Your Reference</p>
                <p className="text-xl font-mono font-bold text-primary">{referenceCode}</p>
              </div>
              <div className="mt-10">
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="rounded-button border-primary text-primary"
                >
                  Send another message
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {serverError && (
                <div className="flex items-center gap-3 p-4 rounded-xl border border-error/20 bg-error/5 text-error text-sm font-medium animate-in shake duration-500">
                  <AlertCircle size={20} />
                  {serverError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Full Name" name="full_name" error={errors.full_name?.message}>
                    <Input 
                      {...register('full_name')} 
                      id="full_name"
                      placeholder="e.g. Abimbola Bolaji" 
                      className="bg-bg-card border-border h-12"
                    />
                  </FormField>
                  <FormField label="Email Address" name="email" error={errors.email?.message}>
                    <Input 
                      {...register('email')} 
                      id="email"
                      type="email" 
                      placeholder="abi@example.com" 
                      className="bg-bg-card border-border h-12"
                    />
                  </FormField>
                </div>

                <FormField label="Subject" name="subject" error={errors.subject?.message}>
                  <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id="subject" className="bg-bg-card border-border h-12" error={!!errors.subject}>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="application_question">Question about applying</SelectItem>
                          <SelectItem value="scholarship_question">Question about scholarships</SelectItem>
                          <SelectItem value="press_partnerships">Press or partnerships</SelectItem>
                          <SelectItem value="other">Something else</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>

                <FormField 
                  label="Message" 
                  name="message" 
                  error={errors.message?.message}
                  helperText={`${message?.length || 0} / 2000 characters (min 20)`}
                >
                  <Textarea 
                    {...register('message')}
                    id="message"
                    placeholder="How can we help you?" 
                    className="bg-bg-card border-border min-h-[160px] resize-none pt-4"
                  />
                </FormField>

                <div className="space-y-4">
                  <Turnstile 
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} 
                    onSuccess={(token) => setValue('turnstile_token', token, { shouldValidate: true })}
                    options={{ theme: 'light' }}
                  />
                  {errors.turnstile_token && (
                    <p className="text-sm text-error font-medium">{errors.turnstile_token.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full md:w-auto px-12 h-14 text-base font-bold shadow-lg shadow-primary/10"
                  disabled={isMutating}
                >
                  {isMutating ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                  ) : (
                    'Send Message'
                  )}
                </Button>

                <p className="text-sm text-text-muted">
                  We aim to respond within 2 business days.
                </p>
              </form>
            </div>
          )}
        </section>
      </div>
    </ContentPageLayout>
  );
}
