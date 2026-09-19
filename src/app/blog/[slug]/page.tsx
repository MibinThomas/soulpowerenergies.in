import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogsData, BlogPost } from "@/config/blogs";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { Button } from "@/components/ui/Button";
import { generateBlogPostingSchema } from "@/lib/seo/structuredData";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Tag,
  Share2,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Quote,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Soul Power Energies",
    };
  }

  const baseUrl = (siteConfig.url || "https://soulpowerenergies.in").replace(/\/$/, "");

  return {
    title: `${post.title} | Soul Power Energies Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: `${baseUrl}${post.image}`,
          width: 1200,
          height: 800,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${baseUrl}${post.image}`],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const blogSchema = generateBlogPostingSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    image: post.image,
    authorName: post.author.name,
  });

  const relatedPosts = blogsData
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FC] text-[#0F172A] font-sans antialiased">
      {/* Inject BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Header />

      <main id="main-content" className="flex-1 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#D97706] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-[#D97706] transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#D97706] truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full sthira-pill bg-white border border-slate-200/80 text-[#D97706] text-xs font-bold uppercase tracking-wider shadow-xs">
                {post.category}
              </span>
              <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
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
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              {post.subtitle}
            </p>

            {/* Author Profile Plate */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D97706]/10 text-[#D97706] flex items-center justify-center font-black text-sm">
                  SP
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#0F172A]">{post.author.name}</span>
                  <span className="text-xs text-slate-500 font-medium">{post.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 hidden sm:inline">Share Article</span>
                <button
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#D97706] hover:text-white text-slate-600 transition-all cursor-pointer border border-slate-200/80"
                  title="Share Article"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Featured Article Image */}
          <div className="relative w-full h-72 sm:h-[420px] rounded-[32px] overflow-hidden border border-slate-200/80 shadow-xl bg-slate-900">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 1200px) 100vw, 900px"
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Article Main Content Layout */}
          <article className="p-6 sm:p-10 rounded-[32px] sthira-card bg-white border border-slate-200/80 shadow-xl space-y-8">
            
            {/* Introduction */}
            <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#D97706] pl-6 py-1 bg-amber-50/50 rounded-r-2xl">
              <p>{post.content.introduction}</p>
            </div>

            {/* Table of Contents Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#D97706]">
                Table of Contents
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm font-bold text-slate-700">
                {post.content.sections.map((sec) => (
                  <li key={sec.id}>
                    <a href={`#${sec.id}`} className="hover:text-[#D97706] transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                      <span>{sec.heading}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            {post.content.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                  {sec.heading}
                </h2>

                {sec.subheading && (
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    {sec.subheading}
                  </h3>
                )}

                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                    {p}
                  </p>
                ))}

                {/* Table if exists */}
                {sec.table && (
                  <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#0F172A] text-white">
                        <tr>
                          {sec.table.headers.map((h, i) => (
                            <th key={i} className="p-3.5 font-bold uppercase tracking-wider">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3.5 font-semibold text-slate-800">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Callout box if exists */}
                {sec.callout && (
                  <div className={`p-5 rounded-2xl border flex items-start gap-4 ${
                    sec.callout.type === "important"
                      ? "bg-amber-50 border-amber-200 text-amber-900"
                      : sec.callout.type === "stats"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                      : "bg-slate-50 border-slate-200 text-slate-900"
                  }`}>
                    {sec.callout.type === "important" ? (
                      <AlertCircle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    ) : sec.callout.type === "stats" ? (
                      <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Quote className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h4 className="text-sm font-bold mb-1">{sec.callout.title}</h4>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">{sec.callout.text}</p>
                    </div>
                  </div>
                )}

                {/* Bullet Points if exist */}
                {sec.bulletPoints && (
                  <ul className="space-y-2.5 pt-2">
                    {sec.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 stroke-[2.5] mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-base font-bold text-[#0F172A]">Summary &amp; Next Steps</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* Article FAQs if present */}
            {post.content.faqs && (
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <h3 className="text-xl font-black text-[#0F172A]">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {post.content.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <h4 className="text-sm font-bold text-[#0F172A]">{faq.question}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags strip */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" />
              {post.keywords.map((kw) => (
                <span key={kw} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold">
                  {kw}
                </span>
              ))}
            </div>
          </article>

          {/* Direct CTA Block */}
          <div className="p-8 rounded-[32px] sthira-card bg-gradient-to-br from-[#0F172A] to-slate-900 text-white p-8 sm:p-12 shadow-2xl text-center space-y-6">
            <div className="max-w-xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#E5BA73] text-xs font-bold border border-white/10">
                <ShieldCheck className="w-4 h-4" />
                <span>Local Support in Thiruvambady</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Want to check your home solar &amp; subsidy eligibility?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Contact Soul Power Energies today. Our local engineers will calculate your rooftop output, KSEB net-metering savings, and PM Surya Ghar subsidy details.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact#assessment">
                <Button variant="primary" size="lg" className="font-extrabold rounded-full shadow-xl">
                  <span>Get Free Assessment</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="tel:+919656063369"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 border border-white/20 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Call +91 96560 63369</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-black text-[#0F172A]">Related Solar Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <div key={rel.id} className="p-6 rounded-[28px] sthira-card bg-white border border-slate-200/80 shadow-md space-y-3">
                    <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-wider">{rel.category}</span>
                    <h4 className="text-base font-bold text-[#0F172A] line-clamp-2 hover:text-[#D97706] transition-colors">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 font-medium">{rel.description}</p>
                    <Link href={`/blog/${rel.slug}`} className="inline-flex items-center gap-1 text-xs font-bold text-[#D97706] pt-2">
                      <span>Read Article</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
      <StickyMobileActionBar />
    </div>
  );
}
