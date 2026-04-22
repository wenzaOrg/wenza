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
  cn
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
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { scholarshipApplicationSchema, type ScholarshipApplicationValues, useRequest, useMutationRequest } from '@wenza/api-client';
import type { Course, Cohort } from '@wenza/api-client/types';

type Step = 1 | 2 | 3 | 4;

const STEPS = [
  { id: 1, title: 'Personal', icon: User },
  { id: 2, title: 'Location', icon: MapPin },
  { id: 3, title: 'Programme', icon: BookOpen },
  { id: 4, title: 'Security', icon: Sparkles },
] as const;

export default function ScholarshipApplyPage() {
  const router = useRouter();
  const [step, setStep] = React.useState<Step>(1);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const { data: courses } = useRequest<Course[]>('courses');
  const { trigger, isMutating } = useMutationRequest<{ reference_code: string }, ScholarshipApplicationValues>('scholarship-applications');

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
  
  // Fetch cohorts for selected course
  const { data: cohorts } = useRequest<Cohort[]>(
    courseId ? `cohorts?course_id=${courseId}` : null
  );

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

  const getFieldsForStep = (currentStep: Step): (keyof ScholarshipApplicationValues)[] => {
    switch (currentStep) {
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
      const message = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setServerError(message);
    }
  };

  const selectedCourse = React.useMemo(() => courses?.find(c => c.id === courseId), [courses, courseId]);
  const selectedCohort = React.useMemo(() => cohorts?.find(c => c.id === cohortId), [cohorts, cohortId]);

  if (isLoading) return null;

  return (
    <main className="min-h-screen bg-bg-page py-12 md:py-20 lg:py-24">
      <div className="container max-w-3xl px-4 mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 scale-in-center">
          <div className="text-center md:text-left space-y-2">
            <Link 
              href="https://wenza.com" 
              className="inline-flex items-center gap-2 text-primary font-bold text-xl mb-4"
            >
              Wenza.
            </Link>
            <h1 className="text-3xl md:text-5xl font-heading font-black text-text-heading tracking-tight leading-none">
              Scholarship Application
            </h1>
            <p className="text-text-muted text-lg font-medium opacity-80">
              Complete the form to start your journey.
            </p>
          </div>
          <div className="bg-bg-card border border-border px-6 py-3 rounded-2xl shadow-card">
            <span className="text-primary font-black text-2xl">Step {step}</span>
            <span className="text-text-muted font-bold"> / 4</span>
          </div>
        </div>

        {/* Progress Bar with Rich Visuals */}
        <div className="mb-16 relative" aria-label="Application Progress">
           <div className="hidden md:flex justify-between relative px-2">
            <div className="absolute top-5 left-0 w-full h-[2px] bg-border z-0" />
            <div 
              className="absolute top-5 left-0 h-[2px] bg-primary z-0 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" 
              style={{ width: `${(step - 1) * 33.33}%` }}
            />
            {STEPS.map((s) => (
              <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 transform",
                  step >= s.id ? "bg-primary text-white shadow-lg rotate-0" : "bg-bg-card border-2 border-border text-text-muted rotate-45"
                )}>
                  <div className={cn(step >= s.id ? "" : "-rotate-45")}>
                    {step > s.id ? <Check size={22} strokeWidth={3} /> : <s.icon size={20} />}
                  </div>
                </div>
                <span className={cn(
                  "text-[11px] font-black uppercase tracking-widest transition-all duration-500",
                  step >= s.id ? "text-primary translate-y-0" : "text-text-muted/50 translate-y-1"
                )}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Card className="p-8 md:p-12 border-border bg-bg-card/50 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          {/* Accent decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-1000" />
          
          <form className="space-y-10 relative z-10" onSubmit={handleSubmit(onSubmit)}>
            
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField label="First Name" name="first_name" error={errors.first_name?.message}>
                    <Input {...register('first_name')} id="first_name" placeholder="e.g. Adewale" className="h-14 text-lg font-medium" autoFocus />
                  </FormField>
                  <FormField label="Last Name" name="last_name" error={errors.last_name?.message}>
                    <Input {...register('last_name')} id="last_name" placeholder="e.g. Bakare" className="h-14 text-lg font-medium" />
                  </FormField>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField label="Email Address" name="email" error={errors.email?.message}>
                    <Input {...register('email')} id="email" type="email" placeholder="example@email.com" className="h-14 text-lg font-medium" />
                  </FormField>
                  <FormField label="Phone Number" name="phone" error={errors.phone?.message}>
                    <Input {...register('phone')} id="phone" placeholder="+234..." className="h-14 text-lg font-medium" />
                  </FormField>
                </div>
                <FormField label="Gender" name="gender" error={errors.gender?.message}>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value ?? ""}>
                        <SelectTrigger id="gender" className="h-14 text-lg font-medium">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>
              </section>
            )}

            {/* Step 2: Location & Background */}
            {step === 2 && (
              <section className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 ease-out">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField label="Country" name="country" error={errors.country?.message}>
                    <Input {...register('country')} id="country" placeholder="e.g. Nigeria" className="h-14 text-lg font-medium" />
                  </FormField>
                  <FormField label="State or City" name="state_or_city" error={errors.state_or_city?.message}>
                    <Input {...register('state_or_city')} id="state_or_city" placeholder="e.g. Lagos" className="h-14 text-lg font-medium" />
                  </FormField>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField label="Current Status" name="current_status" error={errors.current_status?.message}>
                    <Controller
                      name="current_status"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <SelectTrigger id="current_status" className="h-14 text-lg font-medium">
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
                  <FormField label="Education Level" name="education_level" error={errors.education_level?.message}>
                    <Controller
                      name="education_level"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <SelectTrigger id="education_level" className="h-14 text-lg font-medium">
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

            {/* Step 3: Programme & Learning */}
            {step === 3 && (
              <section className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 ease-out">
                <FormField label="Programme" name="course_id" error={errors.course_id?.message}>
                  <Controller
                    name="course_id"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={(val) => field.onChange(val ? parseInt(val) : undefined)} value={field.value != null ? field.value.toString() : ""}>
                        <SelectTrigger id="course_id" className="h-14 text-lg font-medium">
                          <SelectValue placeholder="Select a programme" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
                          {courses?.map(course => (
                            <SelectItem key={course.id} value={course.id.toString()}>{course.title}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>

                <FormField label="Intake Cycle" name="cohort_id" error={errors.cohort_id?.message}>
                  <Controller
                    name="cohort_id"
                    control={control}
                    render={({ field }) => (
                      <Select 
                        onValueChange={(val) => field.onChange(val ? parseInt(val) : undefined)} 
                        value={field.value != null ? field.value.toString() : ""} 
                        disabled={!courseId}
                      >
                        <SelectTrigger id="cohort_id" className="h-14 text-lg font-medium">
                          <SelectValue placeholder={courseId ? "Select intake" : "Select a programme first"} />
                        </SelectTrigger>
                        <SelectContent>
                          {cohorts?.map(cohort => (
                            <SelectItem key={cohort.id} value={cohort.id.toString()}>
                              {cohort.name} (Starts {cohort.start_date})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>

                <div className="grid md:grid-cols-2 gap-8">
                  <FormField label="Learning Mode" name="learning_mode" error={errors.learning_mode?.message}>
                    <Controller
                      name="learning_mode"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <SelectTrigger id="learning_mode" className="h-14 text-lg font-medium">
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
                  <FormField label="Prior Tech Experience" name="prior_tech_experience" error={errors.prior_tech_experience?.message}>
                    <Controller
                      name="prior_tech_experience"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <SelectTrigger id="prior_tech_experience" className="h-14 text-lg font-medium">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No experience</SelectItem>
                            <SelectItem value="some">Some (Intermediate)</SelectItem>
                            <SelectItem value="experienced">Experienced (Advanced)</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormField>
                </div>

                <div className="flex items-center justify-between p-6 rounded-3xl border border-primary/10 bg-primary/5">
                  <div className="space-y-1">
                    <p className="text-text-heading font-black text-lg">Job Placement Interest</p>
                    <p className="text-sm text-text-muted opacity-70">Check if you’d like us to help you find a job after graduation.</p>
                  </div>
                  <Controller
                    name="wants_job_placement"
                    control={control}
                    render={({ field }) => (
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                        className="h-8 w-8 rounded-xl ring-primary/20"
                      />
                    )}
                  />
                </div>
              </section>
            )}

            {/* Step 4: Final Review & Turnstile */}
            {step === 4 && (
              <section className="space-y-10 animate-in fade-in zoom-in-95 duration-700 ease-out">
                <div className="bg-bg-page/50 p-8 rounded-3xl border border-border shadow-inner">
                   <h2 className="text-xl font-black text-text-heading mb-6 flex items-center gap-3">
                     <div className="w-1.5 h-6 bg-primary rounded-full" />
                     Final Review
                   </h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <ReviewItem label="Applicant" value={`${watch('first_name')} ${watch('last_name')}`} />
                     <ReviewItem label="Email" value={watch('email')} />
                     <ReviewItem label="Programme" value={selectedCourse?.title || 'N/A'} />
                     <ReviewItem label="Intake" value={selectedCohort?.name || 'N/A'} />
                   </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xs font-black text-primary uppercase tracking-[0.2em] text-center md:text-left">Security Verification</p>
                  <div className="flex justify-center md:justify-start min-h-[65px]">
                    {siteKey ? (
                      <Turnstile 
                        siteKey={siteKey} 
                        onSuccess={(token) => setValue('turnstile_token', token, { shouldValidate: true })}
                      />
                    ) : (
                      <p className="text-sm text-error font-black">
                        Turnstile site key is not configured. Check NEXT_PUBLIC_TURNSTILE_SITE_KEY in your .env.
                      </p>
                    )}
                  </div>
                  {errors.turnstile_token && (
                    <p className="text-sm text-error font-black text-center md:text-left">{errors.turnstile_token.message}</p>
                  )}
                </div>

                {serverError && (
                  <div className="p-6 rounded-3xl border border-error/20 bg-error/5 text-error text-sm font-black animate-in shake duration-500">
                    {serverError}
                  </div>
                )}
              </section>
            )}

            {/* Navigation Controls */}
            <div className="flex flex-col-reverse md:flex-row gap-6 pt-12 border-t border-border mt-8">
              {step > 1 && (
                <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={handleBack}
                  className="flex-1 h-16 text-lg font-black hover:bg-bg-page transition-all"
                  disabled={isMutating}
                >
                  <ChevronLeft className="mr-2 h-6 w-6" /> Go Back
                </Button>
              )}
              
              {step < 4 ? (
                <Button 
                  type="button" 
                  variant="primary" 
                  onClick={handleNext}
                  className={cn("flex-1 h-16 text-lg font-black shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.02] active:scale-[0.98] transition-all", step === 1 && "w-full")}
                >
                  Next Step <ChevronRight className="ml-2 h-6 w-6" />
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="flex-1 h-16 text-lg font-black bg-primary hover:bg-primary-hover shadow-[0_8px_30px_rgba(var(--primary-rgb),0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                  disabled={isMutating || !isValid}
                >
                  {isMutating ? (
                    <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-6 w-6" /> Finish Application</>
                  )}
                </Button>
              )}
            </div>
          </form>
        </Card>

        <p className="text-center text-text-muted/40 text-xs mt-16 font-bold tracking-tight">
          By submitting this scholarship application, you agree to our{' '}
          <Link href={`${process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'http://localhost:3000'}/terms`} className="underline hover:text-primary transition-colors">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href={`${process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'http://localhost:3000'}/privacy`} className="underline hover:text-primary transition-colors">
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
    <div className="p-5 rounded-2xl border border-border/50 bg-white shadow-sm">
      <p className="text-[10px] font-black text-text-muted/60 uppercase tracking-widest mb-1.5">{label}</p>
      <p className="text-sm font-black text-text-heading truncate">{value || 'Not provided'}</p>
    </div>
  );
}
