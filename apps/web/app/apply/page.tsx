'use client';

import * as React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Turnstile } from '@marsidev/react-turnstile';
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
  Checkbox,
  cn
} from '@wenza/ui';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Loader2,
  ShieldCheck,
  User,
  GraduationCap,
  BookOpen,
  Send
} from 'lucide-react';
import Link from 'next/link';
import { leadSubmissionSchema, type LeadSubmission, useRequest, useMutationRequest } from '@wenza/api-client';
import type { Course } from '@wenza/api-client/types';

type Step = 1 | 2 | 3 | 4;

const STEPS = [
  { id: 1, title: 'Personal Details', icon: User },
  { id: 2, title: 'Background', icon: GraduationCap },
  { id: 3, title: 'Programme', icon: BookOpen },
  { id: 4, title: 'Review', icon: ShieldCheck },
] as const;

export default function ApplyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get('course');
  const [step, setStep] = React.useState<Step>(1);
  const [serverError, setServerError] = React.useState<string | null>(null);

  // Fetch all courses for the dropdown
  const { data: courses } = useRequest<Course[]>('courses');
  const { trigger, isMutating } = useMutationRequest<{ reference_code: string }, LeadSubmission>('leads');

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    trigger: validateStep,
    formState: { errors, isValid },
  } = useForm<LeadSubmission>({
    resolver: zodResolver(leadSubmissionSchema),
    mode: 'onChange',
    defaultValues: {
      full_name: '',
      email: '',
      phone: '',
      age: undefined,
      employment_status: 'unemployed',
      education_level: 'ssce',
      goals: '',
      course_id: undefined,
      wants_scholarship: false,
      guardian_consent: false,
      turnstile_token: '',
    },
  });

  const courseId = watch('course_id');
  const wantsScholarship = watch('wants_scholarship');
  const goals = watch('goals');
  const age = watch('age');

  React.useEffect(() => {
    if (courses && courseSlug) {
      const course = courses.find(c => c.slug === courseSlug);
      if (course) {
        setValue('course_id', course.id);
      }
    }
  }, [courses, courseSlug, setValue]);

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStep(step);
    const isStepValid = await validateStep(fieldsToValidate);

    if (isStepValid) {
      setStep((s) => (s + 1) as Step);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setStep((s) => (s - 1) as Step);
    window.scrollTo(0, 0);
  };

  const getFieldsForStep = (currentStep: Step): (keyof LeadSubmission)[] => {
    switch (currentStep) {
      case 1: return ['full_name', 'email', 'phone', 'age', 'guardian_consent'];
      case 2: return ['employment_status', 'education_level', 'goals'];
      case 3: return ['course_id', 'wants_scholarship'];
      case 4: return ['turnstile_token'];
      default: return [];
    }
  };

  const onSubmit = async (data: LeadSubmission) => {
    setServerError(null);
    try {
      const res = await trigger(data);
      if (res?.data?.reference_code) {
        router.push(`/thank-you?reference=${res.data.reference_code}`);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setServerError(message);
    }
  };

  const selectedCourse = React.useMemo(() => courses?.find(c => c.id === courseId), [courses, courseId]);

  return (
    <main className="min-h-screen bg-bg-dark py-12 md:py-24">
      <div className="container max-w-2xl px-4">
        {/* Navigation / Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <Link
            href={courseSlug ? `/courses/${courseSlug}` : '/courses'}
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft size={16} />
            <span>Abandon Application</span>
          </Link>
          <div className="text-white/40 text-sm font-medium">
            Step {step} of 4
          </div>
        </div>

        <div className="space-y-4 mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Apply for Enrolment
          </h1>
          <p className="text-white/50 text-base md:text-lg">
            Join the next cohort of world-class creators.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={4}>
          <div className="hidden md:flex justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-brand-primary -translate-y-1/2 z-0 transition-all duration-500 ease-in-out"
              style={{ width: `${(step - 1) * 33.33}%` }}
            />
            {STEPS.map((s) => (
              <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                  step >= s.id ? "bg-brand-primary text-white" : "bg-bg-dark border-2 border-white/10 text-white/20"
                )}>
                  {step > s.id ? <Check size={20} strokeWidth={3} /> : <s.icon size={20} />}
                </div>
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-wider transition-colors duration-500",
                  step >= s.id ? "text-white" : "text-white/20"
                )}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
          {/* Mobile indicator handled by the "Step X of 4" above */}
        </div>

        {/* Form Live Region */}
        <div className="sr-only" aria-live="polite">
          Step {step} of 4: {STEPS[step - 1].title}
        </div>

        <Card className="p-6 md:p-10 border-white/10 bg-white/[0.02] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <form className="space-y-8 relative z-10" onSubmit={handleSubmit(onSubmit)}>

            {/* Step 1: Personal Details */}
            {step === 1 && (
              <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-bold text-white mb-6">Personal Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Full Name" name="full_name" error={errors.full_name?.message}>
                    <Input
                      {...register('full_name')}
                      id="full_name"
                      placeholder="e.g. John Doe"
                      className="bg-white/5 border-white/10 h-12"
                      autoFocus
                    />
                  </FormField>
                  <FormField label="Email Address" name="email" error={errors.email?.message}>
                    <Input
                      {...register('email')}
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/10 h-12"
                    />
                  </FormField>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Phone Number" name="phone" error={errors.phone?.message}>
                    <Input
                      {...register('phone')}
                      id="phone"
                      placeholder="08012345678"
                      className="bg-white/5 border-white/10 h-12"
                    />
                  </FormField>
                  <FormField label="Age" name="age" error={errors.age?.message}>
                    <Input
                      {...register('age', { valueAsNumber: true })}
                      id="age"
                      type="text"
                      placeholder="25"
                      className="bg-white/5 border-white/10 h-12"
                      onKeyPress={(e) => {
                        const charCode = e.which;
                        if (charCode < 48 || charCode > 57) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </FormField>
                </div>

                {age && age < 18 && (
                  <div className="p-5 rounded-xl border border-warning/20 bg-warning/5 animate-in zoom-in-95 duration-300">
                    <p className="text-sm text-warning mb-4 leading-relaxed font-medium">
                      You are under 18. We require confirmation that you have permission from a parent or guardian to enrol.
                    </p>
                    <div className="flex items-start gap-3">
                      <Controller
                        name="guardian_consent"
                        control={control}
                        render={({ field }) => (
                          <Checkbox
                            id="guardian_consent"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                          />
                        )}
                      />
                      <label htmlFor="guardian_consent" className="text-sm text-white/70 cursor-pointer select-none">
                        I confirm I have guardian consent to apply
                      </label>
                    </div>
                    {errors.guardian_consent && (
                      <p className="text-xs text-error mt-2">{errors.guardian_consent.message}</p>
                    )}
                  </div>
                )}
              </section>
            )}

            {/* Step 2: Background */}
            {step === 2 && (
              <section className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-bold text-white mb-6">Your Background</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Employment Status" name="employment_status" error={errors.employment_status?.message}>
                    <Controller
                      name="employment_status"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="employment_status" className="bg-white/5 border-white/10 h-12" error={!!errors.employment_status}>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="employed">Employed</SelectItem>
                            <SelectItem value="self_employed">Self-employed</SelectItem>
                            <SelectItem value="unemployed">Unemployed</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormField>
                  <FormField label="Highest Education" name="education_level" error={errors.education_level?.message}>
                    <Controller
                      name="education_level"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="education_level" className="bg-white/5 border-white/10 h-12" error={!!errors.education_level}>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ssce">SSCE</SelectItem>
                            <SelectItem value="ond">OND</SelectItem>
                            <SelectItem value="hnd">HND</SelectItem>
                            <SelectItem value="bachelors">Bachelor’s Degree</SelectItem>
                            <SelectItem value="masters">Master’s Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormField>
                </div>
                <FormField
                  label="What do you hope to achieve?"
                  name="goals"
                  error={errors.goals?.message}
                  helperText={`${goals?.length || 0} / 2000 characters`}
                >
                  <Textarea
                    {...register('goals')}
                    id="goals"
                    placeholder="Tell us about your professional goals and how this programme helps you achieve them..."
                    className="bg-white/5 border-white/10 min-h-[160px] resize-none pt-4"
                  />
                </FormField>
              </section>
            )}

            {/* Step 3: Programme Choice */}
            {step === 3 && (
              <section className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-bold text-white mb-6">Choose Your Path</h2>
                <FormField label="Selected Programme" name="course_id" error={errors.course_id?.message}>
                  <Controller
                    name="course_id"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={(val) => field.onChange(val ? parseInt(val) : undefined)}
                        value={field.value?.toString() || ""}
                      >
                        <SelectTrigger id="course_id" className="bg-white/5 border-white/10 h-14" error={!!errors.course_id}>
                          <SelectValue placeholder="Select a programme" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses?.map(course => (
                            <SelectItem key={course.id} value={course.id.toString()}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>

                <div className="flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
                  <div className="space-y-1">
                    <p className="text-white font-bold">Apply for Scholarship</p>
                    <p className="text-xs text-white/40">Check this if you require financial assistance.</p>
                  </div>
                  <Controller
                    name="wants_scholarship"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-6 w-6"
                      />
                    )}
                  />
                </div>
              </section>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <section className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <h2 className="text-xl font-bold text-white mb-6">Final Review</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ReviewItem label="Name" value={watch('full_name')} />
                  <ReviewItem label="Email" value={watch('email')} />
                  <ReviewItem label="Programme" value={selectedCourse?.title || 'General Application'} />
                  <ReviewItem label="Scholarship" value={wantsScholarship ? 'Yes' : 'No'} />
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest">Security Check</p>
                  <div className="flex justify-center md:justify-start">
                    <Turnstile
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={(token) => setValue('turnstile_token', token, { shouldValidate: true })}
                      options={{ theme: 'dark' }}
                    />
                  </div>
                  {errors.turnstile_token && (
                    <p className="text-sm text-error font-medium">{errors.turnstile_token.message}</p>
                  )}
                </div>

                {serverError && (
                  <div className="p-4 rounded-xl border border-error/20 bg-error/5 text-error text-sm font-medium animate-in shake duration-500">
                    {serverError}
                  </div>
                )}
              </section>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col-reverse md:flex-row gap-4 pt-8">
              {step > 1 && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleBack}
                  className="flex-1 h-14 text-base"
                  disabled={isMutating}
                >
                  Back
                </Button>
              )}

              {step < 4 ? (
                <Button
                  type="button"
                  variant="primary"
                  onClick={handleNext}
                  className={cn("flex-1 h-14 text-base", step === 1 && "w-full")}
                >
                  Continue <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1 h-14 text-base font-bold shadow-xl shadow-brand-primary/20"
                  disabled={isMutating || !isValid}
                >
                  {isMutating ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
                  ) : (
                    <><Send className="mr-2 h-5 w-5" /> Submit Application</>
                  )}
                </Button>
              )}
            </div>
          </form>
        </Card>

        {/* Footer info */}
        <p className="text-center text-white/20 text-xs mt-12 leading-relaxed max-w-md mx-auto">
          By submitting this application, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-primary transition-colors">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline hover:text-primary transition-colors">
            Privacy Policy
          </Link>.
          Your personal information will be handled in accordance with our privacy practices.
        </p>
      </div>
    </main>
  );
}

function ReviewItem({ label, value }: { label: string, value: string | undefined }) {
  return (
    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm text-white font-medium truncate">{value || 'N/A'}</p>
    </div>
  );
}
