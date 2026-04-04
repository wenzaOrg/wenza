import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    title: "Wenza Launches Free Python Course for 10,000 Nigerian Students",
    excerpt: "Wenza, the Nigerian tech learning platform, has partnered with local universities to offer free Python programming courses to students across the country, aiming to bridge the tech skills gap.",
    category: "NEWS",
    date: "Mar 25, 2026",
    color: "from-amber-700 to-amber-900",
    featured: true,
  },
  {
    title: "5 In-Demand Tech Skills Every Nigerian Professional Needs in 2026",
    excerpt: "From AI/ML to cloud computing, here are the skills Nigerian employers are actively hiring for this year...",
    category: "RESOURCES",
    date: "Mar 22, 2026",
    color: "from-emerald-600 to-teal-700",
  },
  {
    title: "How Wenza's Live Mentorship Model Is Changing E-Learning in Africa",
    excerpt: "Unlike pre-recorded platforms, Wenza pairs every learner with a senior developer for real-time guidance...",
    category: "NEWS",
    date: "Mar 18, 2026",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "From Zero to Developer: 3 Wenza Graduates Share Their Journey",
    excerpt: "These learners went from no coding experience to landing their first dev roles in under 6 months...",
    category: "STORIES",
    date: "Mar 14, 2026",
    color: "from-purple-600 to-violet-700",
  },
];

const categoryColors: Record<string, string> = {
  NEWS: "bg-wenza-primary",
  RESOURCES: "bg-wenza-success",
  STORIES: "bg-wenza-gold",
};

const Blogs = () => {
  const featured = blogPosts[0];
  const sidePosts = blogPosts.slice(1);

  return (
    <section className="w-full bg-white py-[72px] px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[36px] font-bold text-wenza-brown font-lora mb-3">
            Latest News and Resources
          </h2>
          <p className="text-[15px] md:text-[16px] text-wenza-muted max-w-[500px] mx-auto">
            Stay updated with the latest developments and learning resources from Wenza.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left — Featured post (large) */}
          <div className="w-full lg:w-[55%]">
            <Link href="/blog" className="group block">
              {/* Featured image */}
              <div className={`w-full aspect-16/10 rounded-[12px] overflow-hidden bg-linear-to-br ${featured.color} relative mb-5`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`${categoryColors[featured.category]} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-[100px]`}>
                    {featured.category}
                  </span>
                </div>
                {/* Placeholder visual — code/laptop motif */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Featured text */}
              <h3 className="text-[22px] md:text-[24px] font-bold text-wenza-brown leading-snug mb-3 group-hover:text-wenza-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-wenza-text leading-relaxed mb-4">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-wenza-primary text-[14px] font-semibold group-hover:gap-3 transition-all">
                Read more <FaArrowRight className="text-[11px]" />
              </span>
            </Link>
          </div>

          {/* Right — 3 smaller posts stacked */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            {sidePosts.map((post, idx) => (
              <Link
                href="/blog"
                key={idx}
                className="group flex gap-5 items-start"
              >
                {/* Thumbnail */}
                <div className={`w-[140px] md:w-[160px] h-[100px] md:h-[110px] rounded-[10px] overflow-hidden bg-linear-to-br ${post.color} shrink-0 relative`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2">
                    <span className={`${categoryColors[post.category]} text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-[100px]`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 pt-0.5">
                  <h4 className="text-[15px] md:text-[16px] font-bold text-wenza-brown leading-snug mb-1.5 group-hover:text-wenza-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-[12px] md:text-[13px] text-wenza-muted leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-[12px] text-wenza-muted mt-1.5 block">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blogs;
