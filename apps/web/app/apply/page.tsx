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
  cn,
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
  Send,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';
import {
  leadSubmissionSchema,
  type LeadSubmission,
  useRequest,
  useMutationRequest,
} from '@wenza/api-client';
import type { Course } from '@wenza/api-client/types';

type Step = 1 | 2 | 3 | 4;

const STEPS = [
  { id: 1, title: 'Personal', icon: User },
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

  const { data: courses } = useRequest<Course[]>('courses');
  const { trigger, isMutating } = useMutationRequest<
    { reference_code: string },
    LeadSubmission
  >('leads');

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
      const course = courses.find((c) => c.slug === courseSlug);
      if (course) setValue('course_id', course.id);
    }
  }, [courses, courseSlug, setValue]);

  const handleNext = async () => {
    const fields = getFieldsForStep(step);
    const ok = await validateStep(fields);
    if (ok) {
      setStep((s) => (s + 1) as Step);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setStep((s) => (s - 1) as Step);
    window.scrollTo(0, 0);
  };

  const getFieldsForStep = (s: Step): (keyof LeadSubmission)[] => {
    switch (s) {
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
      setServerError(
        err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.'
      );
    }
  };

  const selectedCourse = React.useMemo(
    () => courses?.find((c) => c.id === courseId),
    [courses, courseId]
  );

  return (
    <main className="min-h-screen bg-bg-page py-12 md:py-20">
      <div className="container mx-auto max-w-3xl px-6 md:px-20">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href={courseSlug ? `/courses/${courseSlug}` : '/courses'}
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            <ChevronLeft size={16} />
            <span>Back</span>
          </Link>
          <div className="text-sm font-medium text-text-muted">
            Step <span className="text-text-heading">{step}</span> of 4
          </div>
        </div>

        <div className="mb-12 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Enrolment
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            Apply for the next cohort
          </h1>
          <p className="max-w-xl text-base text-text-muted md:text-lg">
            Tell us a little about you and we’ll get back within a few business days.
          </p>
        </div>

        {/* Stepper */}
        <div
          className="mb-12"
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={4}
        >
          <div className="relative hidden md:block">
            <div className="absolute left-0 right-0 top-5 h-px bg-border" />
            <div
              className="absolute left-0 top-5 h-px bg-primary transition-all duration-500"
              style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
            />
            <ol className="relative flex justify-between">
              {STEPS.map((s) => {
                const done = step > s.id;
                const active = step === s.id;
                const Icon = s.icon;
                return (
                  <li key={s.id} className="flex flex-col items-center gap-3">
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full border bg-bg-page transition-colors',
                        done && 'border-primary bg-primary text-white',
                        active && 'border-primary bg-bg-card text-primary',
                        !done && !active && 'border-border text-text-muted'
                      )}
                    >
                      {done ? (
                        <Check size={18} strokeWidth={2.5} />
                      ) : (
                        <Icon size={18} />
                      )}
                    </div>
                    <span
                      className={cn(
                        'text-xs font-semibold uppercase tracking-wider',
                        active || done ? 'text-text-heading' : 'text-text-muted'
                      )}
                    >
                      {s.title}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
          {/* Mobile bar */}
          <div className="md:hidden">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-text-heading">
              {STEPS[step - 1].title}
            </p>
          </div>
        </div>

        <div className="sr-only" aria-live="polite">
          Step {step} of 4: {STEPS[step - 1].title}
        </div>

        <Card className="p-6 md:p-10">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1 */}
            {step === 1 && (
              <section className="space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-text-heading">
                    Personal details
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">
                    How can we reach you?
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    label="Full name"
                    name="full_name"
                    error={errors.full_name?.message}
                  >
                    <Input
                      {...register('full_name')}
                      id="full_name"
                      placeholder="e.g. Adewale Bakare"
                      autoFocus
                    />
                  </FormField>
                  <FormField
                    label="Email address"
                    name="email"
                    error={errors.email?.message}
                  >
                    <Input
                      {...register('email')}
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </FormField>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    label="Phone number"
                    name="phone"
                    error={errors.phone?.message}
                  >
                    <Input
                      {...register('phone')}
                      id="phone"
                      placeholder="08012345678"
                    />
                  </FormField>
                  <FormField label="Age" name="age" error={errors.age?.message}>
                    <Input
                      {...register('age', { valueAsNumber: true })}
                      id="age"
                      type="text"
                      placeholder="25"
                      onKeyPress={(e) => {
                        if (e.which < 48 || e.which > 57) e.preventDefault();
                      }}
                    />
                  </FormField>
                </div>

                {age && age < 18 && (
                  <div className="flex gap-3 rounded-card border border-primary/20 bg-primary/5 p-5">
                    <AlertCircle
                      className="mt-0.5 shrink-0 text-primary"
                      size={20}
                    />
                    <div className="space-y-3">
                      <p className="text-sm leading-relaxed text-text-body">
                        You are under 18. We require confirmation that you have
                        permission from a parent or guardian to enrol.
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
                              className="mt-0.5"
                            />
                          )}
                        />
                        <label
                          htmlFor="guardian_consent"
                          className="cursor-pointer select-none text-sm text-text-body"
                        >
                          I confirm I have guardian consent to apply
                        </label>
                      </div>
                      {errors.guardian_consent && (
                        <p className="text-xs text-error">
                          {errors.guardian_consent.message}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <section className="space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-text-heading">
                    Your background
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">
                    Helps us tailor your learning path.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    label="Employment status"
                    name="employment_status"
                    error={errors.employment_status?.message}
                  >
                    <Controller
                      name="employment_status"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger
                            id="employment_status"
                            error={!!errors.employment_status}
                          >
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
                  <FormField
                    label="Highest education"
                    name="education_level"
                    error={errors.education_level?.message}
                  >
                    <Controller
                      name="education_level"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger
                            id="education_level"
                            error={!!errors.education_level}
                          >
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
                    placeholder="Tell us about your professional goals and how this programme helps you achieve them…"
                    className="min-h-[160px] resize-none"
                  />
                </FormField>
              </section>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <section className="space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-text-heading">
                    Choose your programme
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">
                    Pick the track you want to start with.
                  </p>
                </div>
                <FormField
                  label="Selected programme"
                  name="course_id"
                  error={errors.course_id?.message}
                >
                  <Controller
                    name="course_id"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={(val) =>
                          field.onChange(val ? parseInt(val) : undefined)
                        }
                        value={field.value?.toString() || ''}
                      >
                        <SelectTrigger
                          id="course_id"
                          error={!!errors.course_id}
                        >
                          <SelectValue placeholder="Select a programme" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses?.map((course) => (
                            <SelectItem
                              key={course.id}
                              value={course.id.toString()}
                            >
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>

                <div className="flex items-start justify-between gap-4 rounded-card border border-border bg-bg-card p-5">
                  <div className="space-y-1">
                    <p className="font-semibold text-text-heading">
                      Apply for scholarship
                    </p>
                    <p className="text-sm text-text-muted">
                      Check this if you require financial assistance.
                    </p>
                  </div>
                  <Controller
                    name="wants_scholarship"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1 h-5 w-5"
                      />
                    )}
                  />
                </div>
              </section>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <section className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-text-heading">
                    Review &amp; submit
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">
                    Quick check before we send it through.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <ReviewItem label="Name" value={watch('full_name')} />
                  <ReviewItem label="Email" value={watch('email')} />
                  <ReviewItem
                    label="Programme"
                    value={selectedCourse?.title || 'General application'}
                  />
                  <ReviewItem
                    label="Scholarship"
                    value={wantsScholarship ? 'Yes' : 'No'}
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                    Security check
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Turnstile
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={(token) =>
                        setValue('turnstile_token', token, { shouldValidate: true })
                      }
                    />
                  </div>
                  {errors.turnstile_token && (
                    <p className="text-sm font-medium text-error">
                      {errors.turnstile_token.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <div className="flex items-start gap-3 rounded-card border border-error/30 bg-error/5 p-4 text-sm font-medium text-error">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    <span>{serverError}</span>
                  </div>
                )}
              </section>
            )}

            {/* Nav */}
            <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 md:flex-row">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleBack}
                  className="md:w-32"
                  disabled={isMutating}
                >
                  <ChevronLeft size={18} className="mr-1" />
                  Back
                </Button>
              )}

              {step < 4 ? (
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  onClick={handleNext}
                  className="flex-1"
                >
                  Continue
                  <ChevronRight size={18} className="ml-1" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  disabled={isMutating || !isValid}
                >
                  {isMutating ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit application
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </Card>

        <p className="mx-auto mt-10 max-w-md text-center text-xs leading-relaxed text-text-muted">
          By submitting this application, you agree to our{' '}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          . Your personal information will be handled in accordance with our privacy
          practices.
        </p>
      </div>
    </main>
  );
}

function ReviewItem({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) {
  return (
    <div className="rounded-card border border-border bg-bg-card p-4">
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
        {label}
      </p>
      <p className="truncate text-sm font-medium text-text-heading">
        {value || 'N/A'}
      </p>
    </div>
  );
}
