# WENZA — Complete Multi-Page Figma Make Prompt Guide
## Build a Tech E-Learning Platform with Live Mentorship, Certificates & Community

---

## WHAT WENZA IS

**Wenza** is a Nigerian tech e-learning platform that teaches individuals tech skills. Wenza is **NOT** a marketplace — Wenza creates all of its own courses and content in-house.

**What Wenza offers:**
1. **Expert-built tech courses** — Created by Wenza's team. Structured, project-based courses covering programming, web development, mobile development, and data science/AI.
2. **Live 1-on-1 mentorship** — Learners book private sessions with Wenza's senior developers for code reviews, career advice, debugging help, or guided learning.
3. **Certificates of completion** — Verified digital certificates for every completed course.
4. **Developer community** — Forums, study groups, coding challenges, and peer code reviews.

**Topics covered:**
- Programming (Python, JavaScript, TypeScript, etc.)
- Web Development (Frontend, Backend, Full-Stack — React, Next.js, Node.js, etc.)
- Mobile App Development (Flutter, React Native)
- Data Science & AI/Machine Learning

**Who it's for:** Nigerian individuals who want to learn tech — career changers, university students, working professionals upskilling, and complete beginners.

**What makes Wenza different:**
- Wenza creates all its own courses (not a marketplace — no instructor uploads)
- Affordable Naira pricing
- Live 1-on-1 mentorship with senior developers
- Works offline / low data — designed for Nigerian network conditions
- Community features — study groups, forums, coding challenges

---

## PAGE STRUCTURE

| # | Page Name | Purpose |
|---|-----------|---------|
| 1 | **Home / Landing** | Hero, three pillars (courses + mentorship + community), categories, featured courses, mentors, testimonials, CTA |
| 2 | **Courses Listing** | Browse/search/filter all tech courses |
| 3 | **Course Detail** | Single course — syllabus, projects, mentorship info, reviews, enroll |
| 4 | **Mentorship** | Browse Wenza's mentors, how mentorship works, pricing |
| 5 | **Community** | Forums, study groups, coding challenges |
| 6 | **About Us** | Wenza's story, mission, team, stats |
| 7 | **Pricing** | Free / Per Course / Unlimited plans + mentorship add-ons |
| 8 | **Contact** | Contact form, support info |
| 9 | **Sign Up / Login** | Account creation and login |
| 10 | **Student Dashboard** | Enrolled courses, upcoming mentorship sessions, progress, certificates |
| 11 | **Design System** | Components, colors, fonts, tokens (internal reference) |

---

## HOW TO WORK IN FIGMA

### Option A: Using Figma Design (Recommended)
1. Duplicate the "E-Learning Site" community template into your drafts
2. Rename it "Wenza — Tech E-Learning Platform"
3. Create a new Figma page for each page listed above
4. Use the prompts below — one per page
5. After all pages are done, switch to Prototype mode and wire all navigation links between pages

### Option B: Using Figma Make
1. Create a separate Figma Make file per page (Make is single-page by default)
2. Name each: "Wenza — Home", "Wenza — Courses", "Wenza — Mentorship", etc.
3. Paste the matching prompt, review, adjust
4. When all pages are ready, copy frames from each Make file into one Figma Design file
5. Wire prototype connections in Prototype mode

### Rule: One prompt per page. Build each page separately, then connect them.

---

## BRAND CONTEXT — Paste at the Start of Your First Prompt

```
BRAND CONTEXT FOR ALL PAGES:

Brand: Wenza
What it is: A Nigerian tech e-learning platform. Wenza creates all of its own courses — it is NOT a marketplace. Wenza teaches programming, web development, mobile development, and data science/AI to Nigerian individuals.
Features: Expert-built courses, live 1-on-1 mentorship with senior developers, certificates of completion, and a developer community (forums, study groups, coding challenges).
Tagline: "Master Tech Skills. Build Real Projects. Get Mentored."
Logo: Africa continent silhouette with flowing circuit-line patterns in burnt orange, amber, and deep brown.
Currency: Nigerian Naira (₦)
Target audience: Nigerians who want to learn tech — beginners, career changers, university students, working professionals.
Key differentiators: Wenza creates all its own content (not a marketplace), affordable Naira pricing, live mentorship with senior devs, works offline / low data, developer community.

COLOR SYSTEM:
- Primary: #B05010 (burnt orange — buttons, links, CTAs)
- Primary Hover: #8B3E0D (darker orange)
- Secondary: #A05020 (deep burnt orange)
- Gold/Amber: #D0A050 (stars, badges, highlights)
- Dark Background: #1A1008 (footer, dark sections)
- Deep Brown: #3D2010 (headings, dark section BGs)
- Body Text: #6B4025 (paragraphs)
- Page Background: #FDF6ED (warm off-white)
- Card Background: #FFF9F2 (warm white)
- Border: #E8D5C0 (dividers, card borders)
- Muted Text: #8C7A68 (captions, placeholders)
- Success: #2D8B4E
- Error: #C43D2E
- White: #FFFFFF

TYPOGRAPHY:
- Headings: "Lora" Bold (serif)
- Body/UI: "DM Sans" Regular/Medium/SemiBold

DESIGN RULES:
- Card radius: 12px | Button radius: 8px | Pill/badge radius: 100px
- Card shadow: 0 4px 16px rgba(26,16,8,0.08)
- Min touch target: 44px on mobile
- All prices in ₦ (Naira)
- All courses say "Created by Wenza Team" — never individual instructor names
- No marketplace language (no "list your course", "set your price", "earn on Wenza")
- No exam prep content (no WAEC, JAMB, NECO)
```

---

## PAGE 1 — HOME / LANDING PAGE

```
Imagine you are a senior product designer building the homepage for Wenza, a Nigerian tech e-learning platform. Wenza is NOT a marketplace — it creates all of its own courses in-house. This is one page in a multipage website. The homepage must communicate three things: expert-built tech courses, live 1-on-1 mentorship, and a developer community.

Build the complete homepage with these sections top to bottom:

--- SECTION 1: NAVIGATION BAR (reused on every page) ---
Fixed top, 64px height, bg #FFFFFF, bottom border 1px #E8D5C0.
Left: "Wenza" in Lora Bold 24px #3D2010.
Center: nav links — "Home" (active, #B05010 with 2px bottom border), "Courses", "Mentorship", "Community", "Pricing", "About" — DM Sans Medium 15px #6B4025, 28px spacing, hover #B05010.
Right: "Log In" text link in outline style + "Start Learning" button bg #B05010 text #FFFFFF h:40px radius 8px hover #8B3E0D.
Mobile (<768px): hamburger menu, vertical dropdown bg #FDF6ED, 48px link height, full-width "Start Learning" button at bottom.

--- SECTION 2: HERO ---
Full-width, min-height 560px, bg gradient #1A1008 → #3D2010.
Left (55%):
- Badge: "🇳🇬 Nigeria's Tech Learning Platform" — pill, border #D0A050, text #D0A050, DM Sans 13px
- Headline: "Master Tech Skills. Build Real Projects. Get Mentored." — Lora Bold 48px #FFFFFF, max-width 540px
- Sub: "Learn programming, web development, mobile apps, data science, and AI with Wenza. Expert-created courses, live 1-on-1 mentorship, and a community of Nigerian developers who've got your back." — DM Sans 17px #E8D5C0, max-width 480px
- Three buttons row, 12px gaps:
  - "Explore Courses" — bg #B05010, text #FFFFFF, h:48px, radius 8px
  - "Book a Mentor" — outline, border #D0A050, text #D0A050
  - "Join Community" — outline, border #E8D5C0, text #E8D5C0
- Trust line: "10,000+ Learners • 200+ Courses • 50+ Mentors • Prices from ₦3,500" — DM Sans 14px #8C7A68
Right (45%): A code editor mockup showing a Python snippet — dark rounded rectangle with syntax-highlighted code. Small floating card at bottom-right: "Live Mentorship • In Session" with green dot indicator.
Mobile: stack vertically, headline 32px, buttons stacked full-width, code visual below.

--- SECTION 3: HOW WENZA WORKS — Three Pillars ---
Bg #FDF6ED, padding 72px.
Heading centered: "How Wenza Works" — Lora Bold 36px #3D2010.
Sub: "A complete tech learning experience — not just videos. Real mentors, real projects, real community." — DM Sans 16px #8C7A68.

3 large feature cards in a row, 24px gap:

Card 1 — Expert-Built Courses:
- Bg #FFF9F2, border #E8D5C0, radius 12px, pad 32px, centered
- Icon: code/laptop icon, 56px, circle bg #FDF6ED, icon #B05010
- Title: "Expert-Built Courses" — DM Sans SemiBold 20px #3D2010
- Description: "200+ courses created by Wenza's team of experienced Nigerian developers. From Python basics to advanced ML — structured, project-based, and always up to date." — DM Sans 15px #6B4025
- Link: "Browse Courses →" — DM Sans Medium 15px #B05010 — links to Courses Listing page
- Hover: border #B05010, lift 4px

Card 2 — Live Mentorship:
- Same card style
- Icon: headset/video-call icon
- Title: "Live 1-on-1 Mentorship"
- Description: "Book private sessions with Wenza's senior developers. Get code reviews, career advice, debug tricky problems, or get guided through your learning path. Real help from real engineers."
- Link: "Meet Our Mentors →" — links to Mentorship page

Card 3 — Developer Community:
- Same card style
- Icon: people/group icon
- Title: "Developer Community"
- Description: "Study groups, coding challenges, forums, and peer code reviews. Learn alongside thousands of Nigerian developers who understand your journey. You're never learning alone."
- Link: "Join the Community →" — links to Community page

Mobile: stack cards vertically.

--- SECTION 4: TECH CATEGORIES ---
Bg #FFFFFF, padding 72px.
Heading: "What You Can Learn" — Lora Bold 36px #3D2010, centered.
Sub: "From your first line of code to deploying production apps — Wenza covers the full tech stack." — DM Sans 16px #8C7A68.
4×2 grid, 20px gap. Cards: bg #FFF9F2, border #E8D5C0, radius 12px, pad 28px.
Each: icon (44px, circle bg #FDF6ED, icon #B05010) + category name (SemiBold 16px) + course count (13px #8C7A68).

THE 8 CATEGORIES:
1. Python Programming — "24 Courses" (🐍 icon)
2. JavaScript & TypeScript — "31 Courses" (⚡ icon)
3. Frontend Development — "28 Courses" (🎨 icon)
4. Backend Development — "22 Courses" (⚙️ icon)
5. Mobile App Development — "18 Courses" (📱 icon)
6. Data Science & Analytics — "20 Courses" (📊 icon)
7. AI & Machine Learning — "15 Courses" (🤖 icon)
8. Full-Stack Development — "19 Courses" (🔗 icon)

Hover: border #B05010, lift 4px. Mobile: 2 columns.
Each card links to Courses Listing page filtered by that category.

--- SECTION 5: FEATURED COURSES ---
Bg #FDF6ED, padding 72px.
Header row: "Popular Courses" (left, Lora Bold 36px) + "See All →" link (#B05010, links to Courses page).
3-col grid, 24px gap. 6 course cards:
Card: bg #FFF9F2, border #E8D5C0, radius 12px. Thumbnail (16:9, use a color matching the tech — green for Python, yellow for JS, etc.), category pill, title, course metadata, bottom: stars #D0A050 + rating + ₦ price.

IMPORTANT: Every course says "Wenza Team" as the creator — NOT individual instructor names. Wenza creates all its own content.

Thumbnail should also show two small badges:
- Top-left: level badge ("Beginner" / "Intermediate" / "Advanced") — bg rgba(0,0,0,0.5), text white, 10px
- Top-right: "Live Sessions" badge if the course includes live mentorship — bg #B05010, text white, 10px, with small white dot

Card content (inside body area):
- Category pill (bg #FDF6ED, text #B05010, 12px)
- Course title (DM Sans SemiBold 16px #3D2010, max 2 lines)
- Course metadata: "8 weeks • 42 lessons • 1,240 students" — DM Sans 13px #8C7A68
- Bottom row: star #D0A050 + rating + (reviews) on left, ₦ price on right

THE 6 COURSES:
1. "Python for Absolute Beginners" — Python — ★4.9 (312) — ₦3,500 — Beginner — 8 weeks — Live Sessions
2. "Complete JavaScript Masterclass" — JavaScript — ★4.8 (520) — ₦5,000 — Beginner — 12 weeks — Live Sessions
3. "React & Next.js — Build Modern Web Apps" — Frontend — ★4.7 (189) — ₦6,500 — Intermediate — 10 weeks — Live Sessions
4. "Data Science with Python & Pandas" — Data Science — ★4.8 (276) — ₦7,000 — Intermediate — 10 weeks — Live Sessions
5. "Flutter Mobile App Development" — Mobile Dev — ★4.6 (203) — ₦6,000 — Intermediate — 10 weeks — Live Sessions
6. "HTML & CSS — Your First Website" — Frontend — ★4.9 (445) — FREE (green #2D8B4E badge) — Beginner — 4 weeks — No live sessions

Each card links to Course Detail page. Hover: lift 4px, border #B05010. Mobile: single column.

--- SECTION 6: MEET OUR MENTORS ---
Bg #FFFFFF, padding 72px.
Header row: "Meet Our Mentors" (left) + "View All →" link (#B05010, links to Mentorship page).
4 mentor cards in row, 20px gap:
Card: bg #FFF9F2, border #E8D5C0, radius 12px, pad 28px, centered.
- Avatar circle (80px, 3px border #D0A050, dark brown background with white initials inside)
- Name: DM Sans SemiBold 17px #3D2010
- Role: DM Sans Medium 13px #B05010 (e.g., "Senior Software Engineer")
- Specialty: DM Sans 13px #8C7A68 (e.g., "Python, Django, Data Science")
- Rating: ★ + number in #D0A050 + "(sessions)" in #8C7A68
- "Book Session" button — outline, border #B05010, text #B05010, h:36px, full-width, radius 8px

IMPORTANT: These are Wenza's own team mentors, not freelance tutors. They work for Wenza.

THE 4 MENTORS:
1. Chidi Okonkwo — Senior Software Engineer — "Python, Django, Data Science" — ★4.9 (187 sessions)
2. Fatima Ibrahim — Lead Frontend Developer — "React, Next.js, TypeScript" — ★4.8 (142 sessions)
3. Emeka Nwankwo — ML Engineer — "Machine Learning, Python, TensorFlow" — ★4.9 (98 sessions)
4. Aisha Bello — Full-Stack Developer — "Node.js, React, MongoDB" — ★4.7 (164 sessions)

Each card links to Mentorship page. Hover: border #B05010, lift 4px. Mobile: 2-col grid or horizontal scroll.

--- SECTION 7: YOUR LEARNING JOURNEY ---
Bg #3D2010, padding 72px. All text light.
Heading: "Your Learning Journey" — Lora Bold 36px #FFFFFF, centered.
Sub: "From zero to job-ready in 3 steps" — DM Sans 16px #E8D5C0.

3 steps horizontal, connected by dashed line (#D0A050 at 30%):
Step 1: circle "1" (56px, bg #B05010, text white) — "Pick Your Path" — "Choose a course or learning track. Start with Python, JavaScript, or whatever excites you. Free courses available to try first."
Step 2: circle "2" — "Learn with Support" — "Work through projects. Book 1-on-1 mentorship when you're stuck. Join study groups to learn with others."
Step 3: circle "3" — "Build & Get Certified" — "Complete real projects for your portfolio. Earn Wenza certificates. Join our career support network."

Mobile: stack steps vertically.

--- SECTION 8: STATS BAR ---
Full-width bg #B05010, padding 40px.
5 stats in row, vertical dividers rgba(255,255,255,0.2):
"10,000+" Active Learners / "200+" Courses / "50+" Mentors / "85%" Completion Rate / "3,000+" Certificates Issued
Numbers: Lora Bold 36px #FFFFFF. Labels: DM Sans 13px rgba(255,255,255,0.8).
Mobile: scrollable row or 3+2 grid.

--- SECTION 9: TESTIMONIALS ---
Bg #FDF6ED, padding 72px.
Heading: "What Our Learners Say" — centered.
3 testimonial cards, 24px gap. Bg #FFFFFF, border #E8D5C0, radius 12px, pad 28px.
Quote mark #D0A050, text italic #6B4025, avatar (dark brown circle with white initials) + name + role + city, 5 stars.

1. "Wenza's Python course and the live mentorship sessions completely changed my career trajectory. I went from zero coding knowledge to landing my first developer role in Lagos within 5 months." — Blessing Okoro, Junior Developer, Lagos

2. "The community on Wenza is incredible. The study groups kept me accountable, and having a real mentor to ask questions during live sessions made all the difference. Worth every Naira." — Emeka Ugwu, Frontend Developer, Abuja

3. "I tried Udemy and Coursera but always dropped off. Wenza's live mentorship model is different — you can't hide. My mentor pushed me to actually build projects. Now I freelance full-time." — Hauwa Abdullahi, Freelance Developer, Kaduna

Mobile: stack vertically.

--- SECTION 10: CTA ---
Full-width, bg gradient #B05010 → #8B3E0D, padding 72px. Centered.
Heading: "Ready to Start Your Tech Journey?" — Lora Bold 36px #FFFFFF.
Sub: "Join 10,000+ Nigerians building careers in tech. Free courses available — no credit card needed." — DM Sans 17px rgba(255,255,255,0.85), max-width 480px.
Two buttons centered, 16px gap:
- "Start Learning Free" — bg #D0A050, text #3D2010, h:48px
- "Browse Courses" — bg #FFFFFF, text #B05010, h:48px
Mobile: buttons stack full-width.

--- SECTION 11: FOOTER (reused on every page) ---
Bg #1A1008, padding 56px top 28px bottom.
4 columns:
Col 1 — Brand: "Wenza" (Lora Bold 22px #FFFFFF) + "Nigeria's tech learning platform. Master programming, web dev, mobile apps, and data science with expert mentorship and community." (14px #E8D5C0) + socials (Facebook, X, Instagram, LinkedIn, YouTube) #D0A050 + "hello@wenza.ng"
Col 2 — "Learn": All Courses, Python, JavaScript, React & Next.js, Mobile Development, Data Science, AI & Machine Learning, Free Courses
Col 3 — "Platform": Live Mentorship, Community & Forums, Study Groups, Certificates, Career Support, Student Dashboard
Col 4 — "Company": About Wenza, Pricing, Contact Us, Careers, Blog, Privacy Policy, Terms of Service
Links: 14px #E8D5C0, hover #D0A050.
Bottom bar: "© 2026 Wenza. Made with ❤️ in Nigeria." left + "🇳🇬 Built for Nigerians, by Nigerians" right.
Mobile: columns stack, accordion-style.

RESPONSIVE BREAKPOINTS:
Desktop 1200px+: default layout
Tablet 768-1199px: 2-col grids, hero side-by-side reduced
Mobile <768px: single column, 32px headlines, stacked buttons full-width, hamburger nav, 48px touch targets
```

---

## PAGE 2 — COURSES LISTING PAGE

```
Build the Courses Listing page for Wenza. Same navbar ("Courses" active) and footer. This page shows all of Wenza's tech courses. Remember: Wenza creates all its own courses — this is NOT a marketplace. Every course is "by Wenza Team."

--- NAVIGATION BAR ---
Same as homepage. "Courses" link active (#B05010, 2px bottom border).

--- PAGE HEADER ---
Bg #3D2010, padding 48px.
Breadcrumb: "Home > Courses" — DM Sans 14px, "Home" linked #D0A050.
Heading: "All Courses" — Lora Bold 40px #FFFFFF.
Sub: "200+ expert-built tech courses. Learn at your pace with projects, live mentorship access, and certificates." — DM Sans 16px #E8D5C0.
Quick filter pills row (horizontally scrollable): "All", "Free", "Beginner", "Intermediate", "Advanced", "Python", "JavaScript", "Frontend", "Backend", "Mobile", "Data Science", "AI / ML" — pill buttons, bg transparent, border #D0A050, text #D0A050, active: bg #D0A050, text #3D2010.

--- SEARCH & FILTER BAR ---
Sticky below nav. Bg #FFFFFF, padding 16px 20px, border-bottom 1px #E8D5C0.
- Search input (400px, h:44px, bg #FFF9F2, border #E8D5C0, radius 8px, placeholder "Search courses...", focus border #B05010)
- Price dropdown: "All Prices" — Free, Under ₦5,000, ₦5,000-₦8,000, Above ₦8,000
- Level dropdown: "All Levels" — Beginner, Intermediate, Advanced
- Sort dropdown: "Most Popular", "Newest", "Price: Low to High", "Price: High to Low", "Highest Rated"
- Feature filter: checkbox "Live Mentorship Included", "Has Certificate", "Free"
Mobile: search full-width, filters behind "Filter" button → slide-up panel.

--- RESULTS AREA ---
Bg #FDF6ED, padding 40px top 72px bottom. Max-width 1200px.

Left sidebar (240px, desktop only):
- "Categories" — clickable list with counts:
  Python (24), JavaScript & TypeScript (31), Frontend Dev (28), Backend Dev (22), Mobile Dev (18), Data Science (20), AI & ML (15), Full-Stack (19)
- Active: left 3px border #B05010, text #B05010
- "Level" — checkboxes: Beginner, Intermediate, Advanced
- "Features" — checkboxes: Live Mentorship Included, Has Certificate, Free Course
- Each filter section collapsible

Right grid:
- Results count: "Showing 1-12 of 200+ courses"
- 3-column course card grid (2 on tablet, 1 on mobile), 20px gap
- Same card design as homepage: thumbnail with level badge + live sessions badge, category pill, title, "Wenza Team" creator, duration + lessons + students metadata, rating + ₦ price
- Show 12 cards with variety across all categories, mix of free and paid, range of prices (₦3,500 to ₦8,000), mix of levels
- Each card clickable → links to Course Detail page
- Bottom: pagination — numbered pages with active #B05010, prev/next buttons

Mobile: sidebar becomes filter overlay. Grid → single column.

--- FOOTER ---
Same global footer.
```

---

## PAGE 3 — COURSE DETAIL PAGE

```
Build a Course Detail page for Wenza. This shows when a learner clicks any course card. Same navbar and footer. This page must convince the learner to enroll. Remember: the course is created by Wenza, not by an individual instructor.

--- NAV ---
Same global nav. "Courses" subtly highlighted.

--- COURSE HEADER ---
Bg #3D2010, padding 48px.
Breadcrumb: "Home > Courses > Python for Absolute Beginners" — "Home" and "Courses" linked #D0A050.
Left (60%):
- Category pill: "Python" — border #D0A050, text #D0A050
- Level pill next to it: "Beginner" — border rgba(255,255,255,0.3), text #E8D5C0
- Title: "Python for Absolute Beginners" — Lora Bold 36px #FFFFFF
- Description: "Go from zero Python knowledge to building real applications. Covers fundamentals, data structures, OOP, APIs, and your first 5 projects. Includes live mentorship sessions with senior developers." — DM Sans 16px #E8D5C0
- Stats: "★ 4.9 (312 reviews) • 1,240 students • 8 weeks • 42 lessons" — 14px #8C7A68
- Creator: "Created by Wenza Team" — 15px #E8D5C0
- Two buttons: "Enroll Now — ₦3,500" (bg #B05010 text white h:48px) + "Preview Free Lessons" (outline #D0A050)
Right (40%): video preview placeholder 16:9, rounded 12px, with centered play button overlay (64px circle bg rgba(176,80,16,0.9), white play icon).
Mobile: stack, video on top, buttons full-width.

--- COURSE CONTENT — Tabbed Layout ---
Bg #FDF6ED, padding 48px top 72px bottom.

Left column (65%) — tabs:

TAB 1: "Overview" (default active)
- "What You'll Learn" — 2-column checklist grid with green checkmarks (#2D8B4E):
  ✓ Python fundamentals & syntax
  ✓ Data types, loops & functions
  ✓ Object-oriented programming
  ✓ File handling & API integration
  ✓ Build 5 real-world projects
  ✓ Version control with Git
- "What's Included" — icon list:
  • 42 structured lessons
  • 5 hands-on projects
  • 2 live mentorship sessions with a senior developer
  • Community study group access
  • Certificate of completion
  • Lifetime course access
- "Prerequisites" — "A laptop or desktop computer", "No prior coding experience needed", "Willingness to practice daily"
- "Who This Is For" — "Complete beginners wanting to learn programming", "Career changers moving into tech", "Students looking for practical, project-based learning"

TAB 2: "Curriculum"
- Expandable/collapsible sections (accordion):
  Module 1: Python Setup & First Program (4 lessons)
  Module 2: Variables, Data Types & Operators (6 lessons)
  Module 3: Control Flow & Loops (5 lessons)
  Module 4: Functions & Modules (5 lessons)
  Module 5: OOP & Classes (6 lessons)
  Module 6: File I/O & APIs (5 lessons)
  Module 7: Projects — Build 5 Real Apps (8 lessons)
  Module 8: Final Assessment & Certificate (3 lessons)
- Total: "42 lessons • 8 weeks of content • 5 projects"
- Lock icons on most, unlock icons on first 2 modules (free preview)

TAB 3: "Mentorship"
- Explanation: "This course includes 2 live 1-on-1 mentorship sessions with a senior Python developer from Wenza's team. Use them to get code reviews, ask questions, or get career guidance."
- "Need more mentorship? You can book additional sessions separately on our Mentorship page."
- Show 2 mentor cards (from Wenza's mentor team) that specialize in Python
- Link: "View all mentors →" — links to Mentorship page

TAB 4: "Reviews"
- Overall: "4.9" large + star bar distribution
- 3 sample reviews with Nigerian names, ratings, dates

Right column (35%) — Sticky sidebar:
- Card bg #FFFFFF, border #E8D5C0, radius 12px, pad 24px, sticky on scroll
- Price: "₦3,500" (Lora Bold 32px #B05010)
- "One-time payment • Lifetime access" — 14px #8C7A68
- "Enroll Now" button full-width bg #B05010 text white h:48px
- "Try Free Lessons First" button — outline style
- "30-Day Money-Back Guarantee" — small text with shield icon
- "This course includes:" icon list: "42 structured lessons", "8 weeks of content", "5 hands-on projects", "2 live mentorship sessions", "Certificate of completion", "Community study group", "Lifetime access", "Offline downloads"
- Divider
- "Need Extra Help?" mini-section:
  - "Book additional 1-on-1 mentorship sessions with a senior developer"
  - "Book a Mentor →" — link #B05010 — links to Mentorship page

Mobile: tabs → accordion, sidebar → fixed bottom bar (price + "Enroll" button).

--- FOOTER ---
Same.
```

---

## PAGE 4 — MENTORSHIP PAGE

```
Build the Mentorship page for Wenza. Same navbar ("Mentorship" active) and footer. This page shows Wenza's own team of mentors (NOT freelance tutors — these are Wenza employees/team members). Learners book 1-on-1 sessions with them.

--- PAGE HEADER ---
Bg gradient #1A1008 → #3D2010, padding 48px, centered.
Heading: "1-on-1 Live Mentorship" — Lora Bold 40px #FFFFFF.
Sub: "Get personal guidance from Wenza's senior developers. Code reviews, career advice, debugging help, or guided learning — whatever you need to level up." — DM Sans 16px #E8D5C0, max-width 560px.

--- OUR MENTORS ---
Bg #FDF6ED, padding 72px.
Heading: "Our Mentors" — centered.
Sub: "Experienced developers who've been where you are. They'll help you get where you want to go."
4 mentor cards in a grid, same design as homepage but with more detail:
Card: bg #FFF9F2, border #E8D5C0, radius 12px, pad 28px, centered.
- Avatar (80px circle, 3px border #D0A050, dark bg, white initials)
- Name, Role (#B05010), Specialty (#8C7A68)
- Rating: ★ + number + (sessions)
- "Book Session" button — bg #B05010, text white, h:36px, full-width

Same 4 mentors as homepage:
1. Chidi Okonkwo — Senior Software Engineer — Python, Django, Data Science — ★4.9 (187)
2. Fatima Ibrahim — Lead Frontend Developer — React, Next.js, TypeScript — ★4.8 (142)
3. Emeka Nwankwo — ML Engineer — Machine Learning, Python, TensorFlow — ★4.9 (98)
4. Aisha Bello — Full-Stack Developer — Node.js, React, MongoDB — ★4.7 (164)

--- HOW MENTORSHIP WORKS ---
Bg #FFFFFF, padding 72px.
Heading: "How It Works" — centered.
4 steps horizontal:
1. 🔍 "Pick a Mentor" — "Browse mentors by specialty and read reviews from other learners"
2. 📅 "Book a Time" — "Choose a 30 or 60-minute slot that works for your schedule"
3. 📹 "Join the Call" — "Connect via video call with screen sharing for code reviews"
4. 🚀 "Level Up" — "Get actionable feedback, resources, and a clear next step"
Cards: bg #FFF9F2, border #E8D5C0, radius 12px, pad 24px, centered.

--- MENTORSHIP PRICING ---
Bg #FDF6ED, padding 72px, centered.
Heading: "Mentorship Pricing" — centered.
3 pricing cards:

Card 1 — "Single Session":
- "₦5,000" — Lora Bold 44px #3D2010
- "60 minutes, 1-on-1"
- Features: Code review, Career advice, Debugging help, Learning guidance
- Button: outline

Card 2 — "4-Session Pack" (HIGHLIGHTED, border 2px #B05010):
- "BEST VALUE" badge
- "₦18,000" — Lora Bold 44px #B05010
- "Save ₦2,000"
- Features: Everything in Single, Priority booking, WhatsApp follow-up, Session notes
- Button: filled #B05010

Card 3 — "8-Session Pack":
- "₦32,000" — Lora Bold 44px #3D2010
- "Save ₦8,000"
- Features: Everything in 4-Pack, Dedicated mentor, Project reviews, Career roadmap
- Button: outline

Mobile: stack cards vertically.

--- FOOTER ---
Same.
```

---

## PAGE 5 — COMMUNITY PAGE

```
Build the Community page for Wenza. Same navbar ("Community" active) and footer. This is the page that shows Wenza's developer community features.

--- PAGE HEADER ---
Bg gradient #1A1008 → #3D2010, padding 48px, centered.
Heading: "Join the Wenza Developer Community" — Lora Bold 40px #FFFFFF.
Sub: "Learn alongside 10,000+ Nigerian developers. Study groups, coding challenges, forums, and peer code reviews — because learning alone is hard." — DM Sans 16px #E8D5C0, max-width 560px.

--- COMMUNITY FEATURES ---
Bg #FDF6ED, padding 72px.
3 large feature cards, 24px gap:

Card 1 — Forums:
- 💬 icon, 40px
- Title: "Discussion Forums"
- Desc: "Ask questions, share knowledge, and help others. Our forums cover every tech topic from Python basics to system design."
- Button: "Browse Forums"

Card 2 — Study Groups:
- 👥 icon
- Title: "Study Groups"
- Desc: "Join a study group matched to your course and level. Weekly meetups, accountability partners, and group projects."
- Button: "Find a Group"

Card 3 — Coding Challenges:
- ⚔️ icon
- Title: "Coding Challenges"
- Desc: "Weekly coding challenges to sharpen your skills. Compete with other learners, earn badges, and build your profile."
- Button: "Start a Challenge"

Cards: bg #FFF9F2, border #E8D5C0, radius 16px, pad 32px, centered.

--- COMMUNITY STATS ---
Bg #FFFFFF, padding 72px.
4 stat cards in a row:
"10,000+ Members" / "500+ Study Groups" / "2,000+ Forum Posts/Week" / "50+ Weekly Challenges"
Cards: bg #FFF9F2, border #E8D5C0, radius 12px, centered.

--- CTA ---
Bg gradient #B05010 → #8B3E0D, padding 72px, centered.
Heading: "Community is Free for All Learners" — white.
Sub: "Create your account and join today." — rgba(255,255,255,0.85).
Button: "Create Your Account" — bg #D0A050, text #3D2010

--- FOOTER ---
Same.
```

---

## PAGE 6 — ABOUT US PAGE

```
Build the About Us page for Wenza. Same navbar ("About" active) and footer. Focus on the fact that Wenza is a tech education platform that creates its own content — not a marketplace.

--- HERO ---
Bg gradient #1A1008 → #3D2010, padding 64px, centered.
Heading: "Built for Nigerian Developers. By Nigerian Developers." — Lora Bold 40px #FFFFFF.
Sub: "Wenza exists because every Nigerian deserves access to world-class tech education — at prices that make sense, with mentors who understand the journey." — DM Sans 18px #E8D5C0, max-width 600px.

--- OUR STORY ---
Bg #FDF6ED, padding 72px, two columns:
Left (50%): image placeholder — team photo, radius 12px.
Right (50%):
Title: "The Wenza Story" — Lora Bold 32px #3D2010.
"Wenza started in 2024 when a group of Nigerian software engineers saw a problem they'd all experienced: international platforms like Udemy and Coursera were expensive, their content wasn't tailored to the Nigerian tech ecosystem, and there was no real mentorship."
"So we built something different. Wenza isn't a marketplace — it's a curated learning platform. Every course is created by our team of experienced developers, designed with Nigerian learners in mind, and backed by live mentorship."
"Today, 10,000+ learners across Nigeria trust Wenza to build their tech careers."
Mobile: stack vertically.

--- WHAT SETS US APART ---
Bg #FFFFFF, padding 72px.
Heading: "What Sets Us Apart" — centered.
4 value cards in a row:
1. 💰 "Affordable in Naira" — "No dollar pricing. No exchange rate surprises. Quality tech education from ₦3,500."
2. 🎧 "Real Mentorship" — "Not just videos. Every paid course includes live 1-on-1 sessions with Wenza's senior developers."
3. 📱 "Built for Nigeria" — "Low-data mode, offline downloads, and optimized for the networks and devices Nigerians actually use."
4. 👥 "Community First" — "Study groups, forums, coding challenges, and peer reviews. You're never learning alone."
Cards: bg #FFF9F2, border #E8D5C0, radius 12px, centered.
Mobile: 2×2 then single column.

--- STATS BAR ---
Same as homepage.

--- FOOTER ---
Same.
```

---

## PAGE 7 — PRICING PAGE

```
Build the Pricing page for Wenza. Same navbar ("Pricing" active) and footer. Pricing covers courses and mentorship. There is NO instructor pricing — Wenza is not a marketplace.

--- HEADER ---
Bg #3D2010, padding 56px, centered.
Heading: "Simple, Transparent Pricing" — Lora Bold 40px #FFFFFF.
Sub: "Start free. Pay per course. Or go unlimited. All prices in Naira." — DM Sans 16px #E8D5C0.

--- PRICING CARDS ---
Bg #FDF6ED, padding 72px, centered.
3 cards, 24px gap, max-width 960px centered.

Card 1 — "Free":
- Bg #FFF9F2, border 1px #E8D5C0, radius 16px, pad 36px
- "₦0" — Lora Bold 44px #3D2010
- "Start learning today"
- ✅ Free courses (HTML, CSS, Git)
- ✅ Community forum access
- ✅ Study group participation
- ✅ Weekly coding challenges
- ❌ Paid courses
- ❌ Certificates
- ❌ Mentorship sessions
- Button: "Get Started Free" outline — links to Sign Up

Card 2 — "Per Course" (HIGHLIGHTED, border 2px #B05010):
- "MOST POPULAR" badge
- "From ₦3,500" — Lora Bold 44px #B05010
- "One-time payment, lifetime access"
- ✅ All Free features
- ✅ Premium structured courses
- ✅ Hands-on projects
- ✅ Certificate of completion
- ✅ 2 mentorship sessions included
- ✅ Offline downloads
- Button: "Browse Courses" filled #B05010 — links to Courses page

Card 3 — "Unlimited":
- "₦15,000/mo" — Lora Bold 44px #3D2010
- "Access everything, cancel anytime"
- ✅ All 200+ courses unlocked
- ✅ Unlimited certificates
- ✅ 4 mentorship sessions/month
- ✅ Priority community support
- ✅ Early access to new courses
- ✅ Career support & job board
- Button: "Start 7-Day Free Trial" outline

Mobile: stack vertically. Highlighted card stays prominent.

MENTORSHIP ADD-ON NOTE (below cards):
Bg #FFF9F2, border #E8D5C0, radius 12px, pad 24px, centered max-width 700px.
"🎧 Extra Mentorship Sessions" — DM Sans SemiBold 18px #3D2010
"Need more 1-on-1 time? Book additional mentorship packs: Single (₦5,000), 4-Pack (₦18,000), or 8-Pack (₦32,000)." — DM Sans 15px #6B4025
"View Mentorship Options →" link #B05010 — links to Mentorship page

--- FAQ SECTION ---
Bg #FFFFFF, padding 72px. Heading: "Common Questions" — centered.
6 FAQ accordion items:
1. "Is Wenza really free to start?" → "Yes. Create an account and access free courses in HTML, CSS, and Git immediately. No credit card required."
2. "How do I pay?" → "We accept debit cards via Paystack, bank transfer, and USSD. All payments are in Naira (₦)."
3. "Can I access courses offline?" → "Yes. Paid courses can be downloaded for offline viewing on the Wenza mobile app."
4. "What kind of certificates do you offer?" → "Each paid course includes a verifiable digital certificate of completion that you can share on LinkedIn or with employers."
5. "How does mentorship work?" → "Each paid course includes 2 live 1-on-1 sessions with a Wenza senior developer. You can also buy additional mentorship packs separately."
6. "What if I'm not satisfied?" → "All paid courses come with a 30-day money-back guarantee."

--- FOOTER ---
Same.
```

---

## PAGE 8 — CONTACT PAGE

```
Build the Contact page for Wenza. Same navbar and footer.

--- HEADER ---
Bg #3D2010, padding 48px, centered.
Heading: "Get in Touch" — Lora Bold 40px #FFFFFF.
Sub: "Questions about courses, mentorship, or your account? We typically respond within 24 hours." — DM Sans 16px #E8D5C0.

--- TWO-COLUMN LAYOUT ---
Bg #FDF6ED, padding 72px.

Left (55%): Contact Form
Card bg #FFFFFF, border #E8D5C0, radius 16px, pad 36px.
- "Send Us a Message" — DM Sans SemiBold 20px #3D2010
- "Full Name" input
- "Email Address" input
- "Subject" dropdown: "General Inquiry", "Course Help", "Mentorship Question", "Payment Issue", "Technical Problem", "Partnership"
- "Your Message" textarea
- "Send Message" button full-width bg #B05010
- "We respond within 24 hours — usually much faster." — 13px #8C7A68

Right (45%): Contact Info
3 stacked cards:
1. 📧 "Email Us" — "hello@wenza.ng" — "For general inquiries"
2. 📞 "WhatsApp" — "+234 800 WENZA" — "Mon-Fri 9am-6pm WAT"
3. 📍 "Location" — "Lagos, Nigeria" — "Remote-first team"
Cards: bg #FFF9F2, border #E8D5C0, radius 12px, pad 24px.

Mobile: stack left/right vertically.

--- FOOTER ---
Same.
```

---

## PAGE 9 — SIGN UP / LOGIN PAGE

```
Build Sign Up and Login page for Wenza. Simplified nav (logo + "Back to Home"). Simple sign-up — no learner/instructor choice since Wenza is not a marketplace.

--- SIMPLIFIED NAV ---
Bg #FFFFFF, h:64px, border-bottom 1px #E8D5C0. Left: "Wenza" Lora Bold 24px #3D2010. Right: "← Back to Home" #B05010.

--- AUTH SECTION ---
Bg #FDF6ED, full height, flex center. Padding 48px.
Card max-width 440px, bg #FFFFFF, radius 16px, shadow 0 16px 48px rgba(26,16,8,0.12), pad 40px.

SIGN UP STATE (default):
- "Wenza" centered (Lora Bold 22px #3D2010)
- Heading: "Start Your Tech Journey" — Lora Bold 24px #3D2010, centered
- Sub: "Join 10,000+ Nigerians learning tech on Wenza" — DM Sans 14px #8C7A68, centered
- Form fields (16px gap):
  - "Full Name" input (h:44px, bg #FFF9F2, border #E8D5C0, radius 8px, focus border #B05010)
  - "Email Address" input
  - "Create Password" input with show/hide eye toggle
- "Create Account" button full-width bg #B05010 text #FFFFFF h:48px radius 8px
- Divider: horizontal line with "or" text centered
- "Continue with Google" button — full-width, outline style
- "Already have an account? Log In" — switch link

LOGIN STATE:
- "Welcome Back" heading
- Email + Password fields
- "Forgot Password?" link #B05010
- "Log In" button
- Google login
- "New to Wenza? Sign Up"

Mobile: card fills full width, no side margins.

--- SIMPLIFIED FOOTER ---
"© 2026 Wenza" + Privacy + Terms, centered.
```

---

## PAGE 10 — STUDENT DASHBOARD

```
Build a Student Dashboard for Wenza. This is what learners see after logging in. Dashboard-style layout with sidebar nav. Shows enrolled courses, upcoming mentorship sessions, progress, and certificates.

--- DASHBOARD NAV ---
Bg #1A1008, h:64px.
Left: "Wenza" logo text (Lora Bold 22px #FFFFFF).
Center: search bar (320px, h:40px, bg rgba(255,255,255,0.1), border rgba(255,255,255,0.15), radius 20px, placeholder "Search courses...", text #FFFFFF).
Right: notification bell icon (#D0A050) with red dot, then avatar circle (36px, border 2px #D0A050, dark bg with white initials) + "Hi, Blessing" (DM Sans 14px #FFFFFF).

--- SIDEBAR (240px, desktop) ---
Bg #FFF9F2, border-right 1px #E8D5C0, full height.
Menu items (icon + label, 48px height):
- 📊 Dashboard (active — bg #FDF6ED, left 3px #B05010, text #B05010)
- 📚 My Courses
- 🎧 Mentorship Sessions
- 🏆 Certificates
- 💬 Community
- 👤 Profile & Settings
- 🚪 Log Out
Mobile: bottom tab bar with 5 main icons.

--- MAIN CONTENT ---
Bg #FDF6ED, padding 32px.

WELCOME BANNER:
Card bg gradient #B05010 → #8B3E0D, radius 12px, pad 28px.
"Welcome back, Blessing! 🎉" — Lora Bold 22px #FFFFFF.
"You have 1 mentorship session today at 4PM and 2 courses in progress." — DM Sans 15px rgba(255,255,255,0.85).
"Continue Learning" button bg #D0A050 text #3D2010 h:40px radius 8px.

STATS ROW — 4 mini cards, 16px gap:
1. "3" — "Enrolled Courses"
2. "5" — "Mentorship Sessions"
3. "24" — "Hours Learned"
4. "1" — "Certificates"
Each: bg #FFFFFF, border #E8D5C0, radius 12px, pad 20px, centered.

UPCOMING MENTORSHIP SESSION:
Heading: "Upcoming Mentorship" — DM Sans SemiBold 18px.
Card: bg #FFFFFF, border #E8D5C0, radius 12px, pad 20px.
- "Today, 4:00 PM WAT" — DM Sans SemiBold 15px #B05010
- "Python Code Review — 1 hour session" — 16px #3D2010
- Tutor: avatar (28px, dark bg, white initials "CO") + "with Chidi Okonkwo" — 14px #6B4025
- Two buttons: "Join Session" (bg #2D8B4E text white h:36px) + "Reschedule" (outline #E8D5C0, text #6B4025)

CONTINUE LEARNING:
Heading: "Continue Where You Left Off"
2 horizontal progress cards:
Card: bg #FFFFFF, border #E8D5C0, radius 12px, pad 20px, horizontal layout.
- Thumbnail (80x60px, rounded 8px, colored bg matching course)
- Title + "Wenza Team" + progress bar (h:6px, bg #E8D5C0, filled #B05010) + "65% complete"
- "Resume" button (bg #B05010 text white h:36px)

Courses:
1. "Python for Absolute Beginners" — 65% complete
2. "Complete JavaScript Masterclass" — 30% complete

RECOMMENDED:
Heading: "Recommended For You"
3 course cards in a row — same design as courses listing.

Mobile: everything single column. Stats 2×2 grid. Sidebar → bottom tab bar.

--- SIMPLIFIED FOOTER ---
"© 2026 Wenza" + Help Center + Terms, centered.
```

---

## PAGE 11 — DESIGN SYSTEM

```
Create a Design System reference page for the Wenza project. This is NOT user-facing — it's an internal designer reference for maintaining consistency.

Include:
- COLOR PALETTE: all 14 brand colors with swatches, hex codes, and usage notes
- TYPOGRAPHY: Lora (headings) and DM Sans (body) with all sizes, weights, line-heights
- BUTTONS: Primary, Outline, Gold, White, Success — default/hover/active/disabled states, 3 sizes (large 48px, medium 40px, small 36px)
- FORM ELEMENTS: inputs, dropdowns, textareas, checkboxes — default/focus/error/disabled
- CARDS: Course card, Mentor card, Category card, Testimonial card, Stat card, Session card, Progress card, Pricing card
- BADGES & TAGS: Category pills, Level badges (Beginner/Intermediate/Advanced), "FREE" badge, "Live Sessions" badge, "MOST POPULAR" badge, "BEST VALUE" badge, star ratings
- NAVIGATION: Desktop navbar, Mobile hamburger + dropdown, Dashboard sidebar, Dashboard top bar, Bottom tab bar (mobile dashboard), Breadcrumbs, Pagination
- ICONS: standard set at 24px, color #B05010 default
- SPACING: 4px base (4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80)
- FOOTER: full version and simplified version
- AVATAR: sizes (28px, 36px, 40px, 80px, 120px), dark brown bg with white initials, gold border style
- CODE BLOCK: syntax-highlighted code display component for course previews
```

---

## FINAL — PROTOTYPE CONNECTIONS MAP

After all pages are in one Figma Design file, wire these in Prototype mode:

```
GLOBAL NAVBAR LINKS (every public page):
Home → Homepage
Courses → Courses Listing
Mentorship → Mentorship page
Community → Community page
Pricing → Pricing page
About → About Us page
Log In → Login state of Sign Up/Login page
Start Learning → Sign Up state of Sign Up/Login page
Wenza logo → Homepage

HOMEPAGE:
"Explore Courses" → Courses Listing
"Book a Mentor" → Mentorship page
"Join Community" → Community page
Category cards → Courses Listing (filtered by that category)
Course cards → Course Detail page
Mentor cards → Mentorship page
"See All →" (courses) → Courses Listing
"View All →" (mentors) → Mentorship
"Start Learning Free" → Sign Up page
"Browse Courses" → Courses Listing

COURSES LISTING:
Course cards → Course Detail page
Category sidebar links → filter (same page, filtered state)
Filter pills → filter (same page)

COURSE DETAIL:
"Enroll Now" → Sign Up page (if not logged in) or Dashboard (if logged in)
"Preview Free Lessons" → opens video modal or expands curriculum
"Book a Mentor →" → Mentorship page
"View all mentors →" → Mentorship page
Tabs → switch between Overview/Curriculum/Mentorship/Reviews

MENTORSHIP:
"Book Session" buttons → Sign Up page (if not logged in) or booking flow
Mentor cards are informational (not clickable to individual profiles — Wenza mentors are a team)

COMMUNITY:
"Browse Forums" / "Find a Group" / "Start a Challenge" → Sign Up (if not logged in) or respective community section
"Create Your Account" → Sign Up page

PRICING:
"Get Started Free" → Sign Up page
"Browse Courses" → Courses Listing
"Start 7-Day Free Trial" → Sign Up page
"View Mentorship Options →" → Mentorship page

ABOUT:
No special links beyond global nav

CONTACT:
"Send Message" → shows success/confirmation state

SIGN UP / LOGIN:
After Sign Up → Dashboard
After Login → Dashboard
"← Back to Home" → Homepage
Forgot Password → forgot password flow

DASHBOARD:
"Continue Learning" / "Resume" → Course Detail page
"Join Session" → video call placeholder screen
Course cards → Course Detail page
Sidebar nav → respective dashboard sections
"Log Out" → Homepage

FOOTER LINKS (every public page):
All Courses / Python / JavaScript / etc. → Courses Listing
Live Mentorship → Mentorship page
Community & Forums / Study Groups → Community page
Certificates → Dashboard (certificates section)
About Wenza → About Us page
Pricing → Pricing page
Contact Us → Contact page

TRANSITIONS:
Page-to-page: "Smart Animate" or "Dissolve", 300ms ease
Modals: "Move In" from bottom, 250ms
Tab switching: "Instant" (no animation)
```

---

## DESIGN TOKENS REFERENCE

| Token | Value | Usage |
|---|---|---|
| Primary | `#B05010` | Buttons, links, CTAs, active states |
| Primary Hover | `#8B3E0D` | Button hover/pressed |
| Secondary | `#A05020` | Secondary accents |
| Gold | `#D0A050` | Stars, badges, highlights, mentor avatar borders |
| Dark BG | `#1A1008` | Footer, dashboard nav |
| Deep Brown | `#3D2010` | Headings, dark section BGs, page headers |
| Body Text | `#6B4025` | Paragraphs |
| Page BG | `#FDF6ED` | Main background |
| Card BG | `#FFF9F2` | Cards, inputs, sidebar |
| Border | `#E8D5C0` | Dividers, borders |
| Muted | `#8C7A68` | Captions, metadata |
| Success | `#2D8B4E` | Free badges, join session buttons, checkmarks |
| Error | `#C43D2E` | Errors |
| White | `#FFFFFF` | Text on dark |
| Heading Font | `Lora` Bold | Headings |
| Body Font | `DM Sans` | Body, UI, buttons |
| Card Radius | `12px` | Cards |
| Button Radius | `8px` | Buttons |
| Pill Radius | `100px` | Tags, badges |
| Shadow | `0 4px 16px rgba(26,16,8,0.08)` | Cards |
| Currency | `₦` | All prices |

---

## CHECKLIST BEFORE SUBMISSION

- [ ] All 10 user-facing pages built
- [ ] Design System page with all reusable components
- [ ] Navbar consistent across pages (active state changes per page)
- [ ] Footer consistent across all public pages (simplified for auth + dashboard)
- [ ] Prototype connections wired between ALL pages
- [ ] Mobile responsive frames/constraints for each page
- [ ] Three pillars visible on homepage: Courses + Mentorship + Community
- [ ] All text uses Lora (headings) + DM Sans (body)
- [ ] All colors match Wenza palette — zero leftover template colors
- [ ] All prices in ₦ (Naira)
- [ ] All courses say "Wenza Team" or "Created by Wenza" — NO individual instructor names on courses
- [ ] NO marketplace language anywhere (no "list your course", "set your price", "earn on Wenza", "become an instructor")
- [ ] NO exam prep content (no WAEC, JAMB, NECO)
- [ ] All course categories are tech-only: Python, JavaScript, Frontend, Backend, Mobile, Data Science, AI/ML, Full-Stack
- [ ] Mentors are presented as Wenza team members, not freelancers
- [ ] Touch targets minimum 44px on mobile
- [ ] Wenza logo placeholder in navbar and footer on every page
- [ ] Code editor visual in hero section (not generic student photos)
---

**Wenza E-Learning Platform — Figma Redesign Prompt**

---

> **Objective:** Rebrand the "E-Learning Site (Community)" Figma template by Shinobi (Tadashi Amano) into the **Wenza** e-learning platform — an Africa-focused online learning platform. Apply the Wenza brand identity across every page and component.

---

### 🎨 BRAND COLOR SYSTEM (extracted from Wenza logo)

Replace all existing template colors with these:

| Role | Hex Code | Usage |
|---|---|---|
| **Primary** | `#B05010` | CTAs, buttons, active states, links, primary accents |
| **Primary Hover/Dark** | `#8B3E0D` | Button hover states, pressed states |
| **Primary Light** | `#D0A050` | Highlights, badges, star ratings, tags, secondary accents |
| **Secondary** | `#A05020` | Secondary buttons, icons, progress bars, category tags |
| **Accent Gold/Amber** | `#C8882B` | Premium badges, featured course highlights, notification dots |
| **Dark Background** | `#1A1008` | Dark sections, footer, hero overlays, dark mode backgrounds |
| **Deep Brown** | `#3D2010` | Headings, navbar background, card headers, dark text |
| **Medium Brown** | `#6B4025` | Body text (on light backgrounds), subtitles |
| **Light Warm Bg** | `#FDF6ED` | Page background (warm off-white with slight warmth) |
| **Card Background** | `#FFF9F2` | Card surfaces, input fields |
| **Border/Divider** | `#E8D5C0` | Dividers, card borders, input borders |
| **Muted Text** | `#8C7A68` | Captions, timestamps, placeholder text |
| **White** | `#FFFFFF` | Text on dark backgrounds, card backgrounds in dark sections |
| **Success** | `#2D8B4E` | Completion states, success messages |
| **Error** | `#C43D2E` | Error states, required field indicators |

---

### 🖋 TYPOGRAPHY

- **Headings:** Use a bold serif or semi-serif typeface (e.g., **Playfair Display** or **Lora**) to evoke a premium, knowledge-rich feel
- **Body text:** Use a clean sans-serif (e.g., **Inter**, **DM Sans**, or **Plus Jakarta Sans**)
- **Logo text "Wenza":** Matches a serif/decorative style — replicate this feel in headings

---

### 🔄 GLOBAL CHANGES (Apply across ALL pages/frames)

1. **Logo:** Replace the template's existing logo with the Wenza logo (Africa silhouette with circuit-line patterns in burnt orange/amber/brown tones) everywhere it appears — navbar, footer, favicon, loading screens
2. **Brand Name:** Replace all instances of the original brand name with **"Wenza"**
3. **Tagline:** Use → *"Empowering Africa Through Knowledge"* or *"Learn. Grow. Lead."*
4. **All gradient backgrounds:** Replace with warm gradients using Wenza palette:
   - Hero gradient: `linear-gradient(135deg, #1A1008 0%, #3D2010 50%, #B05010 100%)`
   - Soft gradient: `linear-gradient(180deg, #FDF6ED 0%, #FFF9F2 100%)`
5. **Illustrations/Graphics:** Swap generic illustrations with imagery representing African learners, professionals, and tech education. Use warm-toned overlays on stock photos
6. **Icons:** Recolor all icons to `#B05010` (primary) or `#6B4025` (secondary)
7. **Buttons:**
   - Primary: `bg: #B05010`, `text: #FFFFFF`, `border-radius: 8px`
   - Secondary/Outline: `border: 2px solid #B05010`, `text: #B05010`
   - Hover: darken to `#8B3E0D`
8. **Cards:** `bg: #FFF9F2`, `border: 1px solid #E8D5C0`, `border-radius: 12px`, subtle warm shadow `0 4px 16px rgba(26, 16, 8, 0.08)`

---

### 📄 PAGE-BY-PAGE MODIFICATIONS

#### **Hero / Landing Section**
- Background: Dark warm gradient (`#1A1008 → #3D2010`) or use a high-quality image of African students/professionals with a dark overlay
- Headline: *"Unlock Your Potential with Wenza"* in `#FFFFFF`
- Subtext: *"Access world-class courses designed for Africa's next generation of leaders, creators, and innovators"* in `#D0A050`
- CTA Button: *"Start Learning"* → `bg: #B05010`, `text: #FFFFFF`
- Secondary CTA: *"Explore Courses"* → outline style with `#D0A050`
- Add subtle circuit-line decorative patterns (inspired by the logo) as background accents

#### **Course Categories Section**
- Category icons: Recolor to `#B05010` with `#FDF6ED` circular backgrounds
- Category names in `#3D2010`
- Suggested categories: Technology & AI, Business & Entrepreneurship, Creative Arts, Data Science, Languages, Health & Wellness, Agriculture & Sustainability, Leadership & Governance
- Hover state: card border changes to `#B05010`, subtle warm glow

#### **Featured/Popular Courses Section**
- Course cards: `bg: #FFF9F2`, `border: 1px solid #E8D5C0`
- Course thumbnail overlay on hover: semi-transparent `#B05010` with play icon
- Price tags: `bg: #D0A050`, `text: #3D2010`
- "Free" badge: `bg: #2D8B4E`, `text: #FFFFFF`
- Rating stars: `#D0A050` (amber/gold)
- Instructor name: `#6B4025`
- Sample courses:
  - "Introduction to Python Programming"
  - "African Business Strategy"
  - "UI/UX Design Fundamentals"
  - "Data Analytics for Beginners"
  - "Digital Marketing Mastery"
  - "Mobile App Development with Flutter"

#### **Statistics/Trust Section**
- Background: `#3D2010` (dark brown)
- Stats text: `#FFFFFF`
- Stat numbers: `#D0A050` (gold/amber)
- Sample stats: *"10,000+ Students"* · *"500+ Courses"* · *"50+ Expert Instructors"* · *"30+ African Countries"*

#### **Testimonials Section**
- Background: `#FDF6ED`
- Testimonial cards: `bg: #FFFFFF`, `border: 1px solid #E8D5C0`
- Quote marks: decorative, in `#D0A050`
- Use diverse African names and photos
- Star ratings: `#D0A050`

#### **Instructors/Team Section**
- Instructor cards with warm photo frames
- Name: `#3D2010`, Title: `#6B4025`
- Social icons: `#B05010`
- Circular avatar border: `3px solid #D0A050`

#### **Newsletter/CTA Section**
- Background: gradient `#B05010 → #8B3E0D`
- Headline: `#FFFFFF` — *"Stay Ahead. Subscribe to Wenza"*
- Input field: `bg: rgba(255,255,255,0.15)`, `border: 1px solid rgba(255,255,255,0.3)`, `placeholder text: rgba(255,255,255,0.6)`
- Subscribe button: `bg: #D0A050`, `text: #3D2010`

#### **Footer**
- Background: `#1A1008`
- Wenza logo (light version on dark)
- Link text: `#E8D5C0`, hover → `#D0A050`
- Social media icons: `#D0A050`
- Copyright: *"© 2026 Wenza. Empowering Africa Through Knowledge."*
- Footer columns: About, Courses, Resources, Support, Legal

#### **Navigation Bar**
- Background: `#FFFFFF` (light) or `#1A1008` (dark variant)
- Logo: Wenza logo (left-aligned)
- Nav links: `#3D2010`, hover → `#B05010` with underline accent
- "Sign Up" button: `bg: #B05010`, `text: #FFFFFF`
- "Log In" link: `text: #B05010`

---

### ✨ DESIGN ACCENTS & PATTERNS

- Add **subtle circuit-line patterns** (inspired by the Wenza logo's Africa-circuit motif) as decorative background elements in hero sections and dividers
- Use **warm dot-grid or topographic-line patterns** as subtle section backgrounds
- Add a subtle **Africa continent silhouette** watermark in light sections (at 3-5% opacity using `#D0A050`)
- Corner accents on cards can use a small circuit-line flourish in `#E8D5C0`

---

### 📐 DESIGN SYSTEM COMPONENTS TO UPDATE

- [ ] Color styles → rename & update to Wenza palette
- [ ] Text styles → update with chosen fonts
- [ ] Button components → primary, secondary, ghost, disabled states
- [ ] Input field components → default, focus (`border: #B05010`), error, disabled
- [ ] Card components → course card, testimonial card, instructor card
- [ ] Badge components → free, popular, new, premium
- [ ] Navigation component → desktop & mobile
- [ ] Footer component
- [ ] Icon set → recolor to brand palette

---