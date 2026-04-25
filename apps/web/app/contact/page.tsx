'use client';

import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Turnstile } from '@marsidev/react-turnstile';
import {
  Mail,
  MessageSquare,
  ExternalLink,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Phone,
  MapPin,
} from 'lucide-react';
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
  SelectValue,
} from '@wenza/ui';
import {
  contactMessageSchema,
  type ContactMessageSubmission,
  useMutationRequest,
} from '@wenza/api-client';

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [referenceCode, setReferenceCode] = React.useState('');
  const [serverError, setServerError] = React.useState<string | null>(null);

  const { trigger, isMutating } = useMutationRequest<
    { reference_code: string },
    ContactMessageSubmission
  >('contact-messages');

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
    <div className="flex flex-col">
      {/* 1. HERO — light banner with breadcrumb (Figma pattern) */}
      <section className="relative bg-bg-card border-b border-border py-20 md:py-24 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[10%] -left-[8%] w-[35%] h-[60%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute top-[10%] right-[-5%] w-[28%] h-[50%] bg-gold/15 blur-[100px] rounded-full" />
        </div>
        <div className="container mx-auto relative text-center max-w-3xl">
          <div className="text-sm font-medium text-text-muted mb-4">
            <span>Home</span> <span className="mx-2 text-primary">//</span>{' '}
            <span className="text-primary">Contact</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-heading mb-5 leading-[1.1]">
            Get in <span className="text-primary">touch</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-body leading-relaxed">
            Questions about Wenza? We&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO + FORM — 2-column layout */}
      <section className="bg-bg-page py-16 md:py-24 px-6 md:px-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT — Info cards (Figma's overlapping side card pattern) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                  Reach us
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading mb-4">
                  Multiple ways to connect
                </h2>
                <p className="text-text-body leading-relaxed">
                  Whether you&rsquo;re applying, exploring scholarships, or
                  just curious about a programme — pick the channel that fits.
                </p>
              </div>

              <Card className="p-6 border border-border bg-bg-card shadow-card">
                <div className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-heading mb-1">
                      Admissions &amp; general enquiries
                    </h3>
                    <a
                      href="mailto:admissions@wenza.com"
                      className="text-primary font-bold hover:underline inline-flex items-center gap-2 group text-sm"
                    >
                      admissions@wenza.com
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                    <p className="mt-2 text-sm text-text-body leading-relaxed">
                      Applications, scholarships, press, partnerships.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border bg-bg-card shadow-card">
                <div className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-heading mb-1">
                      Student support
                    </h3>
                    <a
                      href="mailto:support@wenza.com"
                      className="text-secondary font-bold hover:underline inline-flex items-center gap-2 group text-sm"
                    >
                      support@wenza.com
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                    <p className="mt-2 text-sm text-text-body leading-relaxed">
                      Already enrolled? Technical and programme questions.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border bg-bg-card shadow-card">
                <div className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-heading mb-1">
                      Headquartered in Lagos
                    </h3>
                    <p className="text-sm text-text-body leading-relaxed">
                      Team members across Nigeria and the diaspora — Mon to Fri,
                      9am – 6pm WAT.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* RIGHT — Form */}
            <div className="lg:col-span-7">
              {isSuccess ? (
                <div className="bg-bg-card border border-success/20 rounded-card p-10 text-center shadow-card">
                  <div className="mx-auto h-16 w-16 bg-success text-white rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading mb-4">
                    Message Sent
                  </h3>
                  <p className="text-lg text-text-body leading-relaxed max-w-lg mx-auto">
                    Thanks,{' '}
                    <span className="font-bold text-text-heading">{full_name}</span>.
                    We&rsquo;ve received your message and will reply within 2
                    business days.
                  </p>
                  <div className="mt-8 p-4 bg-bg-page rounded-lg inline-block border border-border">
                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">
                      Your Reference
                    </p>
                    <p className="text-xl font-mono font-bold text-primary">
                      {referenceCode}
                    </p>
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
                <Card className="p-8 border border-border bg-bg-card shadow-card">
                  <h2 className="font-heading text-2xl font-bold text-text-heading mb-2">
                    Send a message
                  </h2>
                  <p className="text-text-body mb-8">
                    We aim to respond within 2 business days.
                  </p>

                  {serverError && (
                    <div className="flex items-center gap-3 p-4 mb-6 rounded-xl border border-error/20 bg-error/5 text-error text-sm font-medium">
                      <AlertCircle size={20} />
                      {serverError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField
                        label="Full Name"
                        name="full_name"
                        error={errors.full_name?.message}
                      >
                        <Input
                          {...register('full_name')}
                          id="full_name"
                          placeholder="e.g. Abimbola Bolaji"
                          className="bg-bg-page border-border h-12"
                        />
                      </FormField>
                      <FormField
                        label="Email Address"
                        name="email"
                        error={errors.email?.message}
                      >
                        <Input
                          {...register('email')}
                          id="email"
                          type="email"
                          placeholder="abi@example.com"
                          className="bg-bg-page border-border h-12"
                        />
                      </FormField>
                    </div>

                    <FormField
                      label="Subject"
                      name="subject"
                      error={errors.subject?.message}
                    >
                      <Controller
                        name="subject"
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger
                              id="subject"
                              className="bg-bg-page border-border h-12"
                              error={!!errors.subject}
                            >
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="application_question">
                                Question about applying
                              </SelectItem>
                              <SelectItem value="scholarship_question">
                                Question about scholarships
                              </SelectItem>
                              <SelectItem value="press_partnerships">
                                Press or partnerships
                              </SelectItem>
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
                        className="bg-bg-page border-border min-h-[160px] resize-none pt-4"
                      />
                    </FormField>

                    <div className="space-y-2">
                      <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        onSuccess={(token) =>
                          setValue('turnstile_token', token, { shouldValidate: true })
                        }
                        options={{ theme: 'light' }}
                      />
                      {errors.turnstile_token && (
                        <p className="text-sm text-error font-medium">
                          {errors.turnstile_token.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full md:w-auto px-12 h-12 text-base font-bold shadow-md"
                      disabled={isMutating}
                    >
                      {isMutating ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
