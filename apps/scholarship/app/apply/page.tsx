'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Turnstile } from '@marsidev/react-turnstile';
import {
  Button,
  Card,
  Input,
  FormField,
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
  User,
  MapPin,
  BookOpen,
  Send,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';
import {
  scholarshipApplicationSchema,
  type ScholarshipApplicationValues,
  useRequest,
  useMutationRequest,
} from '@wenza/api-client';
import type { Course, Cohort } from '@wenza/api-client/types';

type Step = 1 | 2 | 3 | 4;

const STEPS = [
  { id: 1, title: 'Personal', icon: User },
  { id: 2, title: 'Location', icon: MapPin },
  { id: 3, title: 'Programme', icon: BookOpen },
  { id: 4, title: 'Security', icon: ShieldCheck },
] as const;

export default function ScholarshipApplyPage() {
  const router = useRouter();
  const [step, setStep] = React.useState<Step>(1);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const mainUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://wenza.com';

  const { data: courses } = useRequest<Course[]>('courses');
  const { trigger, isMutating } = useMutationRequest<
    { reference_code: string },
    ScholarshipApplicationValues
  >('scholarship-applications');

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    trigger: validateStep,
    formState: { errors, isValid, isLoading },
  } = useForm<ScholarshipApplicationValues>({
    resolver: zodResolver(scholarshipApplicationSchema),
    mode: 'onChange',
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      gender: 'male',
      country: '',
      state_or_city: '',
      current_status: 'student',
      education_level: 'high_school',
      course_id: undefined,
      cohort_id: undefined,
      learning_mode: 'online',
      prior_tech_experience: 'none',
      wants_scholarship: true,
      wants_job_placement: false,
      turnstile_token: '',
    },
  });

  const courseId = watch('course_id');
  const cohortId = watch('cohort_id');

  const { data: cohorts } = useRequest<Cohort[]>(
    courseId ? `cohorts?course_id=${courseId}` : null
  );

  const handleNext = async () => {
    const ok = await validateStep(getFieldsForStep(step));
    if (ok) {
      setStep((s) => (s + 1) as Step);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setStep((s) => (s - 1) as Step);
    window.scrollTo(0, 0);
  };

  const getFieldsForStep = (
    s: Step
  ): (keyof ScholarshipApplicationValues)[] => {
    switch (s) {
      case 1: return ['first_name', 'last_name', 'email', 'phone', 'gender'];
      case 2: return ['country', 'state_or_city', 'current_status', 'education_level'];
      case 3: return ['course_id', 'cohort_id', 'learning_mode', 'prior_tech_experience', 'wants_job_placement'];
      case 4: return ['turnstile_token'];
      default: return [];
    }
  };

  const onSubmit = async (data: ScholarshipApplicationValues) => {
    setServerError(null);
    try {
      const res = await trigger(data);
      if (res?.data?.reference_code) {
        router.push(`/thank-you?reference=${res.data.reference_code}`);
      }
    } catch (err: unknown) {
      setServerError(
        err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.'
      );
    }
  };

  const selectedCourse = React.useMemo(
    () => courses?.find((c) => c.id === courseId),
    [courses, courseId]
  );
  const selectedCohort = React.useMemo(
    () => cohorts?.find((c) => c.id === cohortId),
    [cohorts, cohortId]
  );

  if (isLoading) return null;

  return (
    <main className="min-h-screen bg-bg-page py-12 md:py-20">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href={mainUrl}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <span className="font-heading">Wenza.</span>
          </Link>
          <div className="text-sm font-medium text-text-muted">
            Step <span className="text-text-heading">{step}</span> of 4
          </div>
        </div>

        <div className="mb-12 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Scholarship · 2026
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            Scholarship application
          </h1>
          <p className="max-w-xl text-base text-text-muted md:text-lg">
            Complete the form to start your journey. It takes about five minutes.
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
                    Tell us who you are.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    label="First name"
                    name="first_name"
                    error={errors.first_name?.message}
                  >
                    <Input
                      {...register('first_name')}
                      id="first_name"
                      placeholder="e.g. Adewale"
                      autoFocus
                    />
                  </FormField>
                  <FormField
                    label="Last name"
                    name="last_name"
                    error={errors.last_name?.message}
                  >
                    <Input
                      {...register('last_name')}
                      id="last_name"
                      placeholder="e.g. Bakare"
                    />
                  </FormField>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
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
                  <FormField
                    label="Phone number"
                    name="phone"
                    error={errors.phone?.message}
                  >
                    <Input
                      {...register('phone')}
                      id="phone"
                      placeholder="+234 800 000 0000"
                    />
                  </FormField>
                </div>
                <FormField
                  label="Gender"
                  name="gender"
                  error={errors.gender?.message}
                >
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value ?? ''}
                      >
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="prefer_not_to_say">
                            Prefer not to say
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>
              </section>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <section className="space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-text-heading">
                    Location &amp; background
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">
                    Where are you based and what have you done?
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    label="Country"
                    name="country"
                    error={errors.country?.message}
                  >
                    <Input
                      {...register('country')}
                      id="country"
                      placeholder="e.g. Nigeria"
                    />
                  </FormField>
                  <FormField
                    label="State or city"
                    name="state_or_city"
                    error={errors.state_or_city?.message}
                  >
                    <Input
                      {...register('state_or_city')}
                      id="state_or_city"
                      placeholder="e.g. Lagos"
                    />
                  </FormField>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    label="Current status"
                    name="current_status"
                    error={errors.current_status?.message}
                  >
                    <Controller
                      name="current_status"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ?? ''}
                        >
                          <SelectTrigger id="current_status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="nysc">NYSC</SelectItem>
                            <SelectItem value="employed">Employed</SelectItem>
                            <SelectItem value="self_employed">Self-employed</SelectItem>
                            <SelectItem value="unemployed">Unemployed</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormField>
                  <FormField
                    label="Education level"
                    name="education_level"
                    error={errors.education_level?.message}
                  >
                    <Controller
                      name="education_level"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ?? ''}
                        >
                          <SelectTrigger id="education_level">
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high_school">High School (SSCE)</SelectItem>
                            <SelectItem value="degree">Bachelor’s Degree</SelectItem>
                            <SelectItem value="hnd">HND</SelectItem>
                            <SelectItem value="ond">OND</SelectItem>
                            <SelectItem value="masters">Master’s Degree</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="mphil_phd">MPhil/PhD</SelectItem>
                            <SelectItem value="nce">NCE</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormField>
                </div>
              </section>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <section className="space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-text-heading">
                    Programme &amp; learning
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">
                    Pick your track and how you’d like to learn.
                  </p>
                </div>
                <FormField
                  label="Programme"
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
                        value={
                          field.value != null ? field.value.toString() : ''
                        }
                      >
                        <SelectTrigger id="course_id">
                          <SelectValue placeholder="Select a programme" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
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

                <FormField
                  label="Intake cycle"
                  name="cohort_id"
                  error={errors.cohort_id?.message}
                >
                  <Controller
                    name="cohort_id"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={(val) =>
                          field.onChange(val ? parseInt(val) : undefined)
                        }
                        value={
                          field.value != null ? field.value.toString() : ''
                        }
                        disabled={!courseId}
                      >
                        <SelectTrigger id="cohort_id">
                          <SelectValue
                            placeholder={
                              courseId
                                ? 'Select intake'
                                : 'Select a programme first'
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {cohorts?.map((cohort) => (
                            <SelectItem
                              key={cohort.id}
                              value={cohort.id.toString()}
                            >
                              {cohort.name} (Starts {cohort.start_date})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    label="Learning mode"
                    name="learning_mode"
                    error={errors.learning_mode?.message}
                  >
                    <Controller
                      name="learning_mode"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ?? ''}
                        >
                          <SelectTrigger id="learning_mode">
                            <SelectValue placeholder="Select mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="online">Online</SelectItem>
                            <SelectItem value="physical">Physical</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormField>
                  <FormField
                    label="Prior tech experience"
                    name="prior_tech_experience"
                    error={errors.prior_tech_experience?.message}
                  >
                    <Controller
                      name="prior_tech_experience"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ?? ''}
                        >
                          <SelectTrigger id="prior_tech_experience">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No experience</SelectItem>
                            <SelectItem value="some">Some (Intermediate)</SelectItem>
                            <SelectItem value="experienced">
                              Experienced (Advanced)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormField>
                </div>

                <div className="flex items-start justify-between gap-4 rounded-card border border-border bg-bg-card p-5">
                  <div className="space-y-1">
                    <p className="font-semibold text-text-heading">
                      Job placement interest
                    </p>
                    <p className="text-sm text-text-muted">
                      Check if you’d like us to help you find a job after
                      graduation.
                    </p>
                  </div>
                  <Controller
                    name="wants_job_placement"
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
                  <ReviewItem
                    label="Applicant"
                    value={`${watch('first_name')} ${watch('last_name')}`.trim()}
                  />
                  <ReviewItem label="Email" value={watch('email')} />
                  <ReviewItem
                    label="Programme"
                    value={selectedCourse?.title}
                  />
                  <ReviewItem
                    label="Intake"
                    value={selectedCohort?.name}
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                    Security verification
                  </p>
                  <div className="flex min-h-[65px] justify-center md:justify-start">
                    {siteKey ? (
                      <Turnstile
                        siteKey={siteKey}
                        onSuccess={(token) =>
                          setValue('turnstile_token', token, {
                            shouldValidate: true,
                          })
                        }
                      />
                    ) : (
                      <p className="text-sm font-medium text-error">
                        Turnstile site key is not configured. Check
                        NEXT_PUBLIC_TURNSTILE_SITE_KEY in your .env.
                      </p>
                    )}
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
                  Next step
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
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Finish application
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </Card>

        <p className="mx-auto mt-10 max-w-md text-center text-xs leading-relaxed text-text-muted">
          By submitting this scholarship application, you agree to our{' '}
          <Link
            href={`${mainUrl}/terms`}
            className="text-primary hover:underline"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href={`${mainUrl}/privacy`}
            className="text-primary hover:underline"
          >
            Privacy Policy
          </Link>
          . Your personal information will be handled in accordance with our
          privacy practices.
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
        {value || 'Not provided'}
      </p>
    </div>
  );
}
