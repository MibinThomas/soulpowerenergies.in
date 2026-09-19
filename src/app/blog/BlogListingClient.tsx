"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogsData, BlogPost } from "@/config/blogs";
import { Button } from "@/components/ui/Button";
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  ShieldCheck,
} from "lucide-react";

export function BlogListingClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Subsidies & Govt Schemes",
    "System Buying Guides",
    "Maintenance & Performance",
  ];

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogsData.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywords.some((kw) =>
          kw.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogsData.find((post) => post.isFeatured) || blogsData[0];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#F8F9FC] text-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Hero Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sthira-pill bg-white text-[#D97706] text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>SOLAR & ENERGY INSIGHTS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0F172A] leading-tight">
            Kerala Solar &amp; EV Knowledge Hub<span className="text-[#D97706]">.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Actionable buying guides, PM Surya Ghar subsidy breakdowns, KSEB net-metering advice, and maintenance tips for Kozhikode &amp; Wayanad.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="p-6 rounded-[28px] sthira-card bg-white border border-slate-200/80 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input Box */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search solar guides, subsidies, KSEB tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#D97706] text-white shadow-md font-black"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post Banner (Visible when no specific search query) */}
        {!searchQuery && selectedCategory === "All" && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] sthira-card bg-white border border-slate-200/80 p-6 sm:p-10 shadow-2xl overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Box */}
              <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200/80 shadow-md">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full sthira-pill bg-white/95 backdrop-blur-md text-[#D97706] text-xs font-extrabold uppercase tracking-wider shadow-md">
                  Featured Guide
                </div>
              </div>

              {/* Copy Box */}
              <div className="lg:col-span-6 space-y-4 text-left">
                <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5 text-[#D97706]">
                    <Tag className="w-3.5 h-3.5" />
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.publishedAt}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-snug group-hover:text-[#D97706] transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                  {featuredPost.description}
                </p>

                <div className="pt-2">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button variant="primary" size="md" className="font-bold rounded-full shadow-lg">
                      <span>Read Featured Guide</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
              {selectedCategory === "All" ? "Latest Articles" : selectedCategory} ({filteredPosts.length})
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white border border-slate-200/80 space-y-3">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-[#0F172A]">No articles found matching &quot;{searchQuery}&quot;</h3>
              <p className="text-xs text-slate-500">Try searching for keywords like &quot;subsidy&quot;, &quot;hybrid&quot;, or &quot;cleaning&quot;.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-[28px] sthira-card group flex flex-col justify-between p-6 shadow-xl border border-slate-200/80"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm mb-5">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full sthira-pill bg-white/95 backdrop-blur-md text-[#D97706] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                        {post.category}
                      </div>
                    </div>

                    {/* Metadata Header */}
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#D97706]" />
                        {post.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#0F172A] leading-snug mb-2 group-hover:text-[#D97706] transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Description Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium line-clamp-3 mb-4">
                      {post.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">By {post.author.name}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#D97706] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Call to Action Card */}
        <div className="p-8 sm:p-12 rounded-[32px] sthira-card bg-white border border-slate-200/80 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full sthira-pill bg-[#FFFBEB] text-[#D97706] text-xs font-bold border border-[#FDE68A]">
              <ShieldCheck className="w-4 h-4" />
              <span>Ready for Free Site Assessment?</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] leading-tight">
              Get Expert Solar Engineering Advice for Your Home<span className="text-[#D97706]">.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Our engineering team in Thiruvambady evaluates your roof dimensions, phase power load, and PM Surya Ghar subsidy eligibility with zero obligation.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact#assessment">
                <Button variant="primary" size="lg" className="font-extrabold rounded-full shadow-xl">
                  <span>Schedule Free Solar Audit</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
