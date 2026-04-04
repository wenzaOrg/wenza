export const MOCK_COURSES = [
    {
        id: 1,
        image: "/img/blog/hero_laptop.png",
        category: "Backend",
        level: "Intermediate",
        priceType: "Paid",
        durationFormat: "Medium (1-3 months)",
        format: "Project Based",
        duration: "3 Month",
        title: "AWS Certified Solutions Architect",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        about: "This comprehensive AWS Solutions Architect course is meticulously designed by Wenza's top engineers. It covers advanced cloud infrastructure, security, and best practices. You will learn to deploy highly available, scalable systems on AWS. We focus on real-world projects rather than theoretical exercises.",
        curriculum: ["Introduction to AWS Global Infrastructure", "Compute Services and EC2 Deep Dive", "Storage Solutions (S3, EBS, EFS)", "VPC and Networking Fundamentals", "Database Services (RDS, DynamoDB)"],
        stars: 4.8,
        reviewsCount: 124,
        mentorName: "Lina",
        mentorAvatar: "/img/blog/author_avatar.png",
        mentorBio: "Senior DevOps Engineer at Wenza, specializing in scalable infrastructure and CI/CD pipelines.",
        price: "₦80,000",
        oldPrice: "₦100,000"
    },
    {
        id: 2,
        image: "/img/blog/team_presentation.png",
        category: "Cloud",
        level: "Advanced",
        priceType: "Paid",
        durationFormat: "Long (3+ months)",
        format: "Live Mentorship",
        duration: "6 Month",
        title: "Complete AWS Cloud Practitioner",
        description: "Master the cloud with Wenza's expert-led curriculum focusing on practical AWS applications.",
        about: "Kickstart your cloud journey with the official Wenza Cloud Practitioner path. We break down complex cloud terminologies into accessible, easy-to-understand project phases. By the end of this track, you will have multiple deployed cloud services in your professional portfolio.",
        curriculum: ["Cloud Concepts Overview", "Security and Compliance", "AWS Technology Systems", "Billing and Pricing Modules"],
        stars: 4.9,
        reviewsCount: 89,
        mentorName: "Chidi",
        mentorAvatar: "/img/blog/author_avatar.png",
        mentorBio: "Cloud Architecture Lead with 10+ years experience guiding tech talent across Nigeria.",
        price: "₦120,000",
        oldPrice: "₦150,000"
    },
    {
        id: 3,
        image: "/img/blog/hero_laptop.png",
        category: "Frontend",
        level: "Beginner",
        priceType: "Paid",
        durationFormat: "Medium (1-3 months)",
        format: "Video Only",
        duration: "8 Weeks",
        title: "React & Next.js Modern Apps",
        description: "Build incredibly fast, responsive web apps using React framework and Next.js server-side rendering.",
        about: "Dive deep into modern frontend development using React and Next.js. This course covers everything from component lifecycle states to advanced Server-Side Rendering (SSR) patterns natively used here at Wenza. We prioritize accessibility and performance.",
        curriculum: ["JavaScript Fundamentals Refresher", "React State & Props", "Next.js App Router Masterclass", "Styling with Tailwind CSS", "Deploying to Vercel"],
        stars: 4.7,
        reviewsCount: 201,
        mentorName: "Blessing",
        mentorAvatar: "/img/blog/author_avatar.png",
        mentorBio: "Lead Frontend Engineer passionate about pixel-perfect UIs and accessible web standards.",
        price: "₦45,000",
        oldPrice: "₦65,000"
    },
    {
        id: 4,
        image: "/img/blog/team_presentation.png",
        category: "Backend",
        level: "Advanced",
        priceType: "Paid",
        durationFormat: "Medium (1-3 months)",
        format: "Live Mentorship",
        duration: "10 Weeks",
        title: "Node.js & Microservices",
        description: "Scale your APIs with Docker and Kubernetes while mastering advanced backend TypeScript patterns.",
        about: "Transform your backend skills by understanding microservices architectures. We use practical scenarios to teach containerization, API routing, and security. You'll build resilient systems capable of handling thousands of concurrent requests.",
        curriculum: ["Advanced Node.js Patterns", "Containerization with Docker", "Introduction to Kubernetes", "API Gateway Patterns", "System Monitoring & Logging"],
        stars: 4.9,
        reviewsCount: 312,
        mentorName: "Emeka",
        mentorAvatar: "/img/blog/author_avatar.png",
        mentorBio: "Principal Backend Developer and author of multiple high-volume African fintech APIs.",
        price: "₦70,000",
        oldPrice: "₦90,000"
    }
];

export const MOCK_IN_PROGRESS = [
    {
        id: 1,
        image: "/img/blog/hero_laptop.png",
        title: "AWS Certified Solutions Architect",
        mentorName: "Lina",
        mentorAvatar: "/img/blog/author_avatar.png",
        progressText: "Lesson 5 of 7",
        progressPercent: 75
    },
    {
        id: 2,
        image: "/img/blog/team_presentation.png",
        title: "React Native Mobile Dev",
        mentorName: "Chidi",
        mentorAvatar: "/img/blog/author_avatar.png",
        progressText: "Lesson 2 of 10",
        progressPercent: 20
    },
    {
        id: 3,
        image: "/img/blog/hero_laptop.png",
        title: "Data Science Fundamentals",
        mentorName: "Blessing",
        mentorAvatar: "/img/blog/author_avatar.png",
        progressText: "Lesson 12 of 15",
        progressPercent: 85
    }
];

export const MOCK_MENTORS = [
    {
        id: 1,
        image: "/img/blog/author_avatar.png",
        name: "Jane Cooper",
        bio: "Senior React Developer and Wenza Tech Lead."
    },
    {
        id: 2,
        image: "/img/blog/author_avatar.png",
        name: "Adam Smith",
        bio: "Cloud Architecture Expert specializing in AWS and GCP solutions."
    },
    {
        id: 3,
        image: "/img/blog/author_avatar.png",
        name: "Tomara Lee",
        bio: "UI/UX Designer with 10+ years at top African fin-tech firms."
    }
];
