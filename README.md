# wenza

> **Wenza Frontend** — Next.js 14 monorepo serving the Wenza marketing site, student LMS, certificate verification portal, and scholarship funnel.

This is the TypeScript frontend for [Wenza](https://wenza.com). It consumes the Laravel API at `api.wenza.com/api/v1` and ships four distinct subdomain experiences from a single codebase.

For project vision, brand, and the backend repo, see the [root README](../README.md).
For the API this frontend consumes, see [`wenza-api`](../wenza-api/README.md).

---

## Table of Contents

1. [Stack](#1-stack)
2. [Local Setup](#2-local-setup)
3. [Monorepo Structure](#3-monorepo-structure)
4. [Design Tokens](#4-design-tokens)
5. [Typography](#5-typography)
6. [Component Conventions](#6-component-conventions)
7. [The `useRequest` Data Layer](#7-the-userequest-data-layer)
8. [API Response Contract](#8-api-response-contract)
9. [Auth Flow](#9-auth-flow)
10. [Subdomain Routing](#10-subdomain-routing)
11. [Sitemap](#11-sitemap)
12. [Course Detail Pages](#12-course-detail-pages)
13. [Certificate Portal](#13-certificate-portal)
14. [Component Inventory](#14-component-inventory)
15. [Accessibility](#15-accessibility)
16. [SEO](#16-seo)
17. [Testing](#17-testing)
18. [Deployment](#18-deployment)
19. [Environment Variables](#19-environment-variables)
20. [Conventions & Code Style](#20-conventions--code-style)

---

## 1. Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, Server Components) |
| Language | TypeScript (strict mode) |
| Monorepo | Turborepo + pnpm workspaces |
| Styling | Tailwind CSS + CSS variables |
| UI Primitives | shadcn/ui (Radix under the hood) |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Data Fetching | SWR via custom `useRequest` hook + Axios |
| State | Redux Toolkit + redux-persist (auth + global UI state only) |
| Notifications | sonner |
| Icons | Lucide React |
| Testing | Vitest + React Testing Library + Playwright |
| Linting | ESLint + Prettier |
| Deployment | Vercel |

---

## 2. Local Setup

### Prerequisites

- Node.js 20+
- pnpm 9+
- The Laravel API running locally at `http://127.0.0.1:8000` (see [`../wenza-api/README.md`](../wenza-api/README.md))

### Steps

```bash
# Clone
git clone https://github.com/<org>/wenza.git
cd wenza

# Install
pnpm install

# Environment
cp .env.example .env.local
# Edit .env.local — point NEXT_PUBLIC_API_URL at http://127.0.0.1:8000/api/v1

# Run all four apps in parallel
pnpm dev
```

After `pnpm dev`, the four apps are available at:

| App | Port | URL |
|---|---|---|
| `web` (marketing) | 3000 | http://localhost:3000 |
| `app` (LMS) | 3001 | http://localhost:3001 |
| `certificates` | 3002 | http://localhost:3002 |
| `scholarship` | 3003 | http://localhost:3003 |

### Run a Single App

```bash
pnpm --filter=web dev
pnpm --filter=app dev
```

---

## 3. Monorepo Structure

```
wenza/
├── apps/
│   ├── web/                            # wenza.com — marketing
│   │   ├── app/
│   │   │   ├── (marketing)/
│   │   │   ├── courses/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   └── layout.tsx
│   │   ├── content/                    # MDX course content
│   │   │   └── courses/
│   │   │       ├── software-development.mdx
│   │   │       └── ...
│   │   └── package.json
│   ├── app/                            # app.wenza.com — LMS
│   ├── certificates/                   # certificates.wenza.com
│   └── scholarship/                    # scholarship.wenza.com
├── packages/
│   ├── ui/                             # shared shadcn components + design tokens
│   │   ├── components/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── course-card.tsx
│   │   │   ├── testimonial-marquee.tsx
│   │   │   └── ...
│   │   ├── styles/
│   │   │   └── tokens.css              # ★ canonical design tokens
│   │   └── tailwind/
│   │       └── preset.ts               # shared Tailwind preset
│   ├── api-client/                     # typed API client + useRequest hooks
│   │   ├── base-request.ts
│   │   ├── use-request.ts
│   │   ├── use-mutation-request.ts
│   │   └── types/
│   │       ├── envelope.ts
│   │       ├── course.ts
│   │       ├── user.ts
│   │       └── ...
│   ├── store/                          # Redux store (shared across apps)
│   │   ├── slices/
│   │   │   ├── auth-slice.ts
│   │   │   └── ui-slice.ts
│   │   └── index.ts
│   └── config/                         # shared eslint, tsconfig, prettier
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

> **Why a monorepo?** Four apps share the same auth state, design tokens, components, and API client. Duplicating any of that across four Next.js projects would be a maintenance nightmare. Turborepo gives us a single `pnpm dev` that runs all four with shared cache.

---

## 4. Design Tokens

The design system is **non-negotiable**. Every colour, radius, and shadow comes from this table. Never introduce off-token values.

### 4.1 CSS Variables

Defined once in `packages/ui/styles/tokens.css` and imported into each app's `globals.css`:

```css
:root {
  /* Brand */
  --color-primary: #B05010;
  --color-primary-hover: #8B3E0D;
  --color-secondary: #A05020;
  --color-accent-gold: #C8882B;
  --color-gold: #D0A050;

  /* Surfaces */
  --color-bg-page: #FDF6ED;
  --color-bg-card: #FFF9F2;
  --color-bg-dark: #1A1008;
  --color-bg-deep-brown: #3D2010;

  /* Text */
  --color-text-heading: #3D2010;
  --color-text-body: #6B4025;
  --color-text-muted: #8C7A68;
  --color-text-on-dark: #FFFFFF;

  /* Lines */
  --color-border: #E8D5C0;

  /* Status */
  --color-success: #2D8B4E;
  --color-error: #C43D2E;

  /* Radii */
  --radius-card: 12px;
  --radius-button: 8px;
  --radius-pill: 100px;

  /* Shadow */
  --shadow-card: 0 4px 16px rgba(26, 16, 8, 0.08);

  /* Typography */
  --font-heading: 'Urbanist', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```

### 4.2 Tailwind Preset

`packages/ui/tailwind/preset.ts` exposes these as Tailwind utilities:

```ts
import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        secondary: 'var(--color-secondary)',
        gold: 'var(--color-gold)',
        'accent-gold': 'var(--color-accent-gold)',
        bg: {
          page: 'var(--color-bg-page)',
          card: 'var(--color-bg-card)',
          dark: 'var(--color-bg-dark)',
          'deep-brown': 'var(--color-bg-deep-brown)',
        },
        text: {
          heading: 'var(--color-text-heading)',
          body: 'var(--color-text-body)',
          muted: 'var(--color-text-muted)',
          'on-dark': 'var(--color-text-on-dark)',
        },
        border: 'var(--color-border)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        button: 'var(--radius-button)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
} satisfies Partial<Config>;
```

Each app's `tailwind.config.ts` extends this preset.

### 4.3 Token Reference

| Token | Value | Tailwind Class | Usage |
|---|---|---|---|
| Primary | `#B05010` | `bg-primary text-primary` | CTAs, links, active states |
| Primary Hover | `#8B3E0D` | `hover:bg-primary-hover` | Button hover/pressed |
| Secondary | `#A05020` | `bg-secondary` | Secondary buttons, category tags |
| Accent Gold | `#C8882B` | `bg-accent-gold` | Premium badges, notifications |
| Gold | `#D0A050` | `text-gold` | Stars, mentor borders |
| Page BG | `#FDF6ED` | `bg-bg-page` | Main background |
| Card BG | `#FFF9F2` | `bg-bg-card` | Cards, inputs |
| Dark BG | `#1A1008` | `bg-bg-dark` | Footer, dashboard nav |
| Deep Brown | `#3D2010` | `bg-bg-deep-brown text-text-heading` | Headings, dark sections |
| Body Text | `#6B4025` | `text-text-body` | Paragraphs |
| Border | `#E8D5C0` | `border-border` | Dividers |
| Muted | `#8C7A68` | `text-text-muted` | Captions, metadata |
| Success | `#2D8B4E` | `bg-success` | Free badges, success states |
| Error | `#C43D2E` | `text-error` | Errors |
| Card Radius | `12px` | `rounded-card` | Cards |
| Button Radius | `8px` | `rounded-button` | Buttons |
| Pill Radius | `100px` | `rounded-pill` | Tags, badges |
| Shadow | `0 4px 16px rgba(26,16,8,0.08)` | `shadow-card` | Cards |

### 4.4 Currency

All prices in **Naira (₦)** by default. Show USD as a secondary line on globally-targeted pages. Use a shared `formatCurrency` helper:

```ts
// packages/ui/lib/format.ts
export const formatNaira = (kobo: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(kobo);

// → "₦250,000"
```

---

## 5. Typography

Two fonts loaded via `next/font/google` for automatic optimisation:

```ts
// packages/ui/fonts.ts
import { Urbanist, DM_Sans } from 'next/font/google';

export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
});

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});
```

Apply in root layout:

```tsx
<body className={`${urbanist.variable} ${dmSans.variable} font-body bg-bg-page text-text-body`}>
```

### 5.1 Scale

| Role | Font | Desktop | Mobile | Weight |
|---|---|---|---|---|
| Display / Hero | Urbanist | 64px | 40px | 800 |
| H1 | Urbanist | 48px | 32px | 700 |
| H2 | Urbanist | 36px | 28px | 700 |
| H3 | Urbanist | 28px | 22px | 600 |
| H4 | Urbanist | 22px | 18px | 600 |
| Body Large | DM Sans | 18px | 16px | 400 |
| Body | DM Sans | 16px | 15px | 400 |
| Body Small | DM Sans | 14px | 13px | 400 |
| Caption | DM Sans | 12px | 12px | 500 |

---

## 6. Component Conventions

### 6.1 Buttons

```tsx
// Primary
<Button className="rounded-button bg-primary text-white hover:bg-primary-hover">
  Apply Now
</Button>

// Secondary
<Button variant="outline" className="rounded-button border-primary text-primary">
  Learn More
</Button>
```

### 6.2 Cards

```tsx
<Card className="rounded-card bg-bg-card shadow-card border border-border p-6">
  ...
</Card>
```

### 6.3 Pills / Tags

```tsx
<span className="rounded-pill bg-secondary/10 text-secondary px-3 py-1 text-xs font-medium">
  Cybersecurity
</span>
```

### 6.4 Inputs

```tsx
<input
  className="rounded-button bg-bg-card border border-border px-4 py-2 text-text-body
             focus:outline-none focus:ring-2 focus:ring-primary/30"
/>
```

All interactive elements meet **WCAG AA** contrast on the warm page background.

---

## 7. The `useRequest` Data Layer

The frontend uses a custom SWR-based hook for all API interaction. The hook lives in `packages/api-client/use-request.ts` and is the **only** way components should fetch data.

### 7.1 Why a custom hook?

The hook handles:
- Auto-attaching the Sanctum token from Redux
- Auto-prefixing `/api/v1/` to URLs
- Unwrapping the API envelope (`response.data.data`)
- Detecting paginated responses and exposing pagination state
- Cursor-style `onLoadMore` / `onLoadPrevious` for infinite lists
- Auto-logout on `Unauthenticated` errors
- Surfacing errors via toast notifications

### 7.2 Basic Usage

```tsx
'use client';
import { useRequest } from '@wenza/api-client';
import type { Course } from '@wenza/api-client/types';

export function CourseList() {
  const { data, isLoading, total } = useRequest<Course[]>('courses');

  if (isLoading) return <Skeleton />;

  return (
    <>
      <p className="text-text-muted">{total} courses available</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}
```

### 7.3 Pagination

```tsx
const {
  data,
  isLoading,
  current_page,
  last_page,
  total,
  onLoadMore,
  onLoadPrevious,
} = useRequest<Course[]>('courses', {
  params: { per_page: 12 },
});
```

### 7.4 Filtering

```tsx
const { data, onChangeParams } = useRequest<Course[]>('courses', {
  params: { category: 'engineering' },
});

// Update filter
<Select onValueChange={(v) => onChangeParams({ category: v })} />
```

### 7.5 Single Resource

```tsx
const { data: course } = useRequest<Course>(`courses/${slug}`);
```

### 7.6 Mutations

```tsx
'use client';
import { useMutationRequest } from '@wenza/api-client';
import { toast } from 'sonner';

export function EnrollButton({ cohortId }: { cohortId: number }) {
  const { trigger, isMutating } = useMutationRequest('enrollments', 'post');

  const onEnroll = async () => {
    try {
      const res = await trigger({ cohort_id: cohortId });
      toast.success(res.message);
      // res.data is the new enrollment
    } catch (e) {
      // catchError already showed a toast
    }
  };

  return (
    <Button onClick={onEnroll} disabled={isMutating}>
      {isMutating ? 'Enrolling...' : 'Enroll Now'}
    </Button>
  );
}
```

### 7.7 Refresh / Revalidate

```tsx
const { data, onRefresh } = useRequest<Course[]>('courses');

// Manually refresh after a mutation
await onRefresh();

// Or globally invalidate everything
import { onReloadData } from '@wenza/api-client';
await onReloadData();
```

### 7.8 Hook Configuration Options

```ts
useRequest('courses', {
  method: 'get',                // default
  node: 'data',                 // path to unwrap from response
  initialValue: [],             // value before first load
  refreshInterval: 0,           // polling interval ms
  revalidateOnFocus: true,
  shouldRetryOnError: false,
  keepPreviousData: true,       // smooth pagination transitions
  keepPaginatedData: false,     // append to existing data on load more (infinite scroll)
  showError: false,             // auto-toast errors
  goBackOnError: false,         // router.back() on error
  params: {},                   // query params
});
```

---

## 8. API Response Contract

The Laravel API conforms to a strict envelope. The `useRequest` hook depends on this exact shape — if the backend deviates, the frontend breaks.

### 8.1 Success

```json
{
  "status": "success",
  "message": "Course retrieved",
  "data": { /* resource */ }
}
```

The hook surfaces `data` directly. So `useRequest<Course>('courses/foo')` gives you `data: Course`.

### 8.2 Paginated Collection

```json
{
  "status": "success",
  "message": "Records retrieved",
  "data": {
    "records": [ /* items */ ],
    "current_page": 1,
    "last_page": 5,
    "per_page": 15,
    "total": 73,
    "next_page_url": "...",
    "prev_page_url": null,
    "links": [ ... ]
  }
}
```

The hook detects `data.records` and surfaces:
- `data` → the array of records
- `current_page`, `last_page`, `per_page`, `total`, `from`, `to`, `next_page_url`, `prev_page_url`, `links` → directly on the response

### 8.3 Error

```json
{
  "status": "error",
  "message": "What went wrong",
  "errors": { "email": ["Required"] }
}
```

401 errors with "Unauthenticated" in the message trigger automatic logout.

### 8.4 Type Definitions

```ts
// packages/api-client/types/envelope.ts
export interface SuccessEnvelope<T> {
  status: 'success';
  message: string;
  data: T;
}

export interface PaginatedData<T> {
  records: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  from: number;
  to: number;
  total: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  path: string;
  links: Array<{ url: string | null; label: string; active: boolean }>;
}

export interface ErrorEnvelope {
  status: 'error';
  message: string;
  errors?: Record<string, string[]>;
}
```

---

## 9. Auth Flow

### 9.1 Redux Slice

```ts
// packages/store/slices/auth-slice.ts
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isAuthenticated: false },
  reducers: {
    setAuth: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});
```

The store is persisted to `localStorage` via `redux-persist` so the token survives reloads.

### 9.2 Login

```tsx
const { trigger } = useMutationRequest('auth/login', 'post');
const dispatch = useDispatch();
const router = useRouter();

const onSubmit = async (values: LoginForm) => {
  const res = await trigger(values);
  dispatch(setAuth({ user: res.data.user, token: res.data.token }));
  router.push('/dashboard');
};
```

### 9.3 Protected Routes

```tsx
// apps/app/middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
```

For client-side guards, use a simple wrapper:

```tsx
'use client';
export function RequireAuth({ children }: { children: ReactNode }) {
  const isAuth = useSelector((s: RootState) => s.auth.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) router.push('/login');
  }, [isAuth]);

  if (!isAuth) return null;
  return <>{children}</>;
}
```

### 9.4 Cross-Subdomain SSO

Set the auth cookie with `domain: '.wenza.com'` so all four subdomains share it. In production, the token Redux state is also rehydrated from the same `localStorage` key on each subdomain.

---

## 10. Subdomain Routing

In production, each app deploys to its own Vercel project with a custom domain. In development, they run on different ports (3000–3003).

### 10.1 Vercel Project Setup

| Vercel Project | Domain | Build Command |
|---|---|---|
| `wenza-marketing` | `wenza.com` | `pnpm --filter=web build` |
| `wenza-app` | `app.wenza.com` | `pnpm --filter=app build` |
| `wenza-certificates` | `certificates.wenza.com` | `pnpm --filter=certificates build` |
| `wenza-scholarship` | `scholarship.wenza.com` | `pnpm --filter=scholarship build` |

Each project points to the same monorepo and uses Turborepo's remote cache for fast builds.

### 10.2 Cross-App Links

Use the env var URLs, not hardcoded paths:

```tsx
<Link href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`}>Go to Dashboard</Link>
```

---

## 11. Sitemap

### 11.1 Marketing Site (`wenza.com`) — `apps/web`

| Route | Purpose |
|---|---|
| `/` | Hero, value prop, featured courses, testimonials, CTA |
| `/courses` | Grid of all 16 programmes, filterable by category |
| `/courses/[slug]` | Course detail page |
| `/about` | Mission, story, team, partnerships |
| `/testimonials` | Aggregated student stories |
| `/scholarship` | Scholarship overview + link to portal |
| `/contact` | Support channels, office locations |
| `/apply` | Primary enrollment form |
| `/blog` | Optional content marketing |
| `/legal/terms`, `/legal/privacy` | Legal |

### 11.2 LMS (`app.wenza.com`) — `apps/app`

| Route | Purpose |
|---|---|
| `/login`, `/signup` | Auth |
| `/dashboard` | Enrolments, progress, upcoming sessions |
| `/courses/[slug]/learn` | Course player (video + content + exercises) |
| `/courses/[slug]/community` | Cohort discussion |
| `/assignments` | Submitted + pending |
| `/calendar` | Live class schedule |
| `/mentors` | Booking & messages |
| `/certificates` | Earned certificates |
| `/jobs` | Internal job board |
| `/profile` | Account, password, payment history |

### 11.3 Certificates (`certificates.wenza.com`) — `apps/certificates`

| Route | Purpose |
|---|---|
| `/` | Verification landing — Certificate ID input |
| `/verify/[id]` | Public verification result |
| `/dashboard` | Graduate login → download all certificates |
| `/dp-generator` | Canvas-based "Wenza Graduate" DP generator |

### 11.4 Scholarship (`scholarship.wenza.com`) — `apps/scholarship`

| Route | Purpose |
|---|---|
| `/` | Scholarship pitch, eligibility, FAQs |
| `/apply` | Application form |
| `/status/[ref]` | Status lookup |

---

## 12. Course Detail Pages

The `/courses/[slug]` page is the **single most important conversion surface** on the marketing site. Every page must include these sections in order:

1. **Hero** — Course title (Urbanist 64px), one-line value prop, duration pill, format pill, price + scholarship badge, primary CTA "Apply Now"
2. **Overview** — 2–3 paragraph description, who it's for, prerequisites
3. **What You'll Learn** — Bulleted outcomes (6–10 items, each with a check icon in `text-success`)
4. **Curriculum** — Accordion of modules. Each module shows lessons + projects. Use the shared `CurriculumAccordion` component
5. **Tools & Technologies** — Logo grid (e.g., for Backend Dev: Node.js, Express, PostgreSQL, MongoDB, Git, Docker)
6. **Career Outcomes** — `SalaryTable` with Nigeria + Global columns
7. **Mentors** — `MentorCard` grid for lead instructors
8. **Schedule & Pricing** — `PricingCard` with cohort dates, full price, scholarship price, payment plans
9. **FAQ** — `FAQAccordion`
10. **Final CTA** — Full-bleed deep-brown section with primary CTA + "Talk to an advisor" link

Course content is authored in MDX at `apps/web/content/courses/[slug].mdx`. The page reads the MDX + fetches dynamic data (cohorts, prices) from the API.

### 12.1 16 Course Slugs

```
software-development
backend-development
frontend-development
devops-engineering
data-science
data-analytics
ai-automation
product-design
graphics-design
content-creation
product-management
project-management
virtual-assistant
digital-marketing
cybersecurity
[reserved]    ← Cloud Engineering or Mobile Development
```

---

## 13. Certificate Portal

### 13.1 Verification Page (`/verify/[id]`)

Server-rendered with ISR (revalidate every 60 seconds for the cache, but the underlying API caches for 5 minutes):

```tsx
// apps/certificates/app/verify/[id]/page.tsx
export const revalidate = 60;

export default async function VerifyPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify/${params.id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return <InvalidCertificate id={params.id} />;
  }

  const { data } = await res.json();

  return <ValidCertificate certificate={data} />;
}
```

The valid state shows a green check (`text-success`), holder name, course title, issuance date, and a Wenza watermark. The invalid state shows a red error and a CTA to contact support.

### 13.2 DP Generator

Client-side `<canvas>` (or `fabric.js`) tool that lets graduates upload a photo and overlay a branded "Wenza Graduate — [Course]" frame. Output is a 1080×1080 PNG ready for Instagram/LinkedIn. No backend involvement.

---

## 14. Component Inventory

All shared in `packages/ui/components/`. Per-app components live in `apps/{app}/components/`.

### 14.1 Marketing Components
- `Navbar` (transparent on hero, solid on scroll)
- `Footer` (multi-column, dark BG `#1A1008`)
- `Hero` (with subtle Framer Motion accent)
- `CourseCard` (image, category pill, title, value prop, CTA)
- `CourseGrid` (responsive: 1 / 2 / 3 / 4 cols)
- `TestimonialCard`
- `TestimonialMarquee` (infinite-scroll using Framer Motion — reuse the `WhatChanges` pattern)
- `PartnerLogoCloud`
- `FAQAccordion`
- `PricingCard` (with scholarship variant)
- `StatsBar` (uptime, students taught, certificates issued)
- `CTASection` (full-bleed deep-brown bg with primary CTA)
- `MentorCard`
- `SalaryTable`
- `CurriculumAccordion`

### 14.2 LMS Components
- `DashboardSidebar`
- `CourseProgressRing`
- `LessonPlayer` (video + transcript + notes)
- `AssignmentSubmitForm`
- `LiveSessionCard` (with "Join Session" button in `bg-success`)
- `ChatPanel`
- `CalendarView`
- `CertificateCard` (with download + share)

### 14.3 Form Components
- `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`
- `FormField` wrapper with label + error message
- `SubmitButton` with loading state
- `FileUpload` with drag-and-drop

---

## 15. Accessibility

- All interactive elements reachable by keyboard
- Visible focus rings (use `--color-primary` at 30% alpha: `focus:ring-2 focus:ring-primary/30`)
- `aria-label` on icon-only buttons
- Form fields have associated `<label>` elements
- Error messages announced via `aria-live="polite"`
- Colour contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- Skip-to-content link in navbar
- `prefers-reduced-motion` respected for all Framer Motion animations:

```tsx
const shouldReduceMotion = useReducedMotion();
<motion.div animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }} />
```

---

## 16. SEO

Every page exports `metadata`:

```tsx
// apps/web/app/courses/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const course = await getCourse(params.slug);
  return {
    title: `${course.title} Course | Wenza`,
    description: course.description,
    openGraph: {
      title: `${course.title} Course | Wenza`,
      description: course.description,
      images: [`/og/${course.slug}.png`],
      url: `https://wenza.com/courses/${course.slug}`,
      siteName: 'Wenza',
    },
    twitter: { card: 'summary_large_image' },
  };
}
```

OG images follow the established preference: simple white background with centred Wenza logo and course title.

Also generate `sitemap.xml` and `robots.txt` for the marketing site.

---

## 17. Testing

### 17.1 Stack

- **Vitest** for utilities and hooks
- **React Testing Library** for components
- **Playwright** for E2E flows

### 17.2 Running Tests

```bash
pnpm test                  # Vitest unit tests
pnpm test:e2e              # Playwright E2E
pnpm test:coverage         # With coverage
```

### 17.3 Critical E2E Flows

Playwright should cover:
1. Visitor lands on `/`, browses courses, opens a course detail page
2. Visitor signs up, verifies email, logs in
3. Authenticated user enrols in a cohort, completes Paystack checkout (mocked)
4. Authenticated user marks lessons complete and reaches 100% progress
5. Visitor verifies a known-valid certificate ID
6. Visitor verifies a known-invalid certificate ID

---

## 18. Deployment

### 18.1 Vercel

Each app is its own Vercel project. All four point to this monorepo with a different `--filter` build command.

```bash
# Vercel build command per project
pnpm install --frozen-lockfile && pnpm --filter=web build
pnpm install --frozen-lockfile && pnpm --filter=app build
pnpm install --frozen-lockfile && pnpm --filter=certificates build
pnpm install --frozen-lockfile && pnpm --filter=scholarship build
```

Set the **Root Directory** in each Vercel project to the corresponding app folder (e.g., `apps/web`).

### 18.2 Environment Variables

Set the same env vars across all four Vercel projects (they share the same API).

### 18.3 Turborepo Remote Cache

Connect Vercel to Turborepo's remote cache to avoid rebuilding unchanged packages:

```bash
npx turbo login
npx turbo link
```

### 18.4 CI/CD

```yaml
# .github/workflows/ci.yml
name: CI
on: [pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'pnpm' }
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm typecheck
      - run: pnpm test
      - run: pnpm build
```

Vercel auto-deploys on merge to `main`.

---

## 19. Environment Variables

```env
# .env.local (development)
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api/v1
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3001
NEXT_PUBLIC_CERT_URL=http://localhost:3002
NEXT_PUBLIC_SCHOLARSHIP_URL=http://localhost:3003

NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_...
NEXT_PUBLIC_SENTRY_DSN=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=wenza.com
```

```env
# Production
NEXT_PUBLIC_API_URL=https://api.wenza.com/api/v1
NEXT_PUBLIC_SITE_URL=https://wenza.com
NEXT_PUBLIC_APP_URL=https://app.wenza.com
NEXT_PUBLIC_CERT_URL=https://certificates.wenza.com
NEXT_PUBLIC_SCHOLARSHIP_URL=https://scholarship.wenza.com

NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_live_...
NEXT_PUBLIC_SENTRY_DSN=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=wenza.com
```

`packages/api-client/base-request.ts` consumes `NEXT_PUBLIC_API_URL` via `@/config/constants`. The base URL resolves to whatever's in this env var; do not hardcode it elsewhere.

---

## 20. Conventions & Code Style

- **TypeScript strict mode** — no `any` without an `eslint-disable-next-line` comment + reason
- **Functional components only** — no class components
- **Server Components by default** — opt into `"use client"` only when needed (state, effects, hooks, browser APIs)
- **Co-locate** components with the page that owns them; promote to `packages/ui` only when used by 2+ apps
- **Tailwind utility classes** for styling — no CSS modules, no styled-components
- **kebab-case** filenames (`course-card.tsx`, not `CourseCard.tsx`)
- **PascalCase** component names
- **camelCase** for variables, functions, hooks
- **UK English** in user-facing copy
- **Always use `useRequest` / `useMutationRequest`** — never `fetch` or raw Axios in components
- **Always use design tokens** — never `bg-[#B05010]`; use `bg-primary`
- **Always test the happy path** — every form, every CTA, every navigation

### 20.1 Pull Request Checklist

Before opening a PR:

- [ ] `pnpm lint` passes
- [ ] `pnpm typecheck` passes
- [ ] `pnpm test` passes
- [ ] Visual changes screenshot in PR description
- [ ] Mobile viewport tested (Chrome DevTools, ≤ 375px width)
- [ ] Keyboard navigation works
- [ ] No off-token colours, radii, or shadows
- [ ] No hardcoded API URLs
- [ ] No `console.log` left in code

---

## Appendix: Common Commands

```bash
# Add a shadcn component
pnpm --filter=ui dlx shadcn-ui@latest add dialog

# Add a dependency to a specific app
pnpm --filter=web add date-fns

# Add a dev dependency to the workspace root
pnpm add -Dw eslint-plugin-foo

# Run a single Vitest file
pnpm --filter=web test course-card

# Generate a fresh Playwright report
pnpm --filter=app exec playwright test --ui

# Bust the SWR cache from anywhere
import { onReloadData } from '@wenza/api-client';
await onReloadData();

# Build everything
pnpm build

# Build one app
pnpm --filter=app build
```

---

For the project vision and brand, see [`../README.md`](../README.md).
For the Laravel API this frontend consumes, see [`../wenza-api/README.md`](../wenza-api/README.md).