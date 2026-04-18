'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useMutationRequest } from '@wenza/api-client';
import { setAuth } from '@wenza/store';
import type { User } from '@wenza/api-client/types';
import { toast } from 'sonner';
import { useState } from 'react';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginForm = z.infer<typeof loginSchema>;

interface LoginResponseData {
  user: User;
  token: string;
}

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { trigger } = useMutationRequest<LoginResponseData, LoginForm>('auth/login', 'post');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginForm) => {
    setIsSubmitting(true);
    try {
      const res = await trigger(values);
      dispatch(setAuth({ user: res.data.user, token: res.data.token }));
      toast.success('Welcome back!');
      router.push('/dashboard');
    } catch {
      // toast is already shown by useMutationRequest via parseNetworkError
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-card border border-border bg-bg-card p-8 shadow-card">
          {/* Brand */}
          <div className="mb-8 text-center">
            <h1 className="font-heading text-2xl font-bold text-text-heading">
              Sign in to Wenza
            </h1>
            <p className="mt-1 text-sm text-text-muted">
              Enter your credentials to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="login-email"
                className="mb-1.5 block text-sm font-medium text-text-heading"
              >
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                {...register('email')}
                className="w-full rounded-button border border-border bg-bg-page px-4 py-2.5 text-text-body outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-error" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="login-password"
                className="mb-1.5 block text-sm font-medium text-text-heading"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                {...register('password')}
                className="w-full rounded-button border border-border bg-bg-page px-4 py-2.5 text-text-body outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-error" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              id="login-submit"
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-button bg-primary py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-text-muted">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="font-medium text-primary hover:underline">
              Apply now — it&apos;s free
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
