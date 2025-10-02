"use client";

import { motion } from "framer-motion";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Define blog posts data
const posts = [
  {
    date: "Feb 15, 2024",
    title: "The Future of AI in Product Management",
    slug: "future-of-ai-in-product-management",
    description:
      "Exploring how AI is transforming product management and what the future holds for product managers.",
  },
  {
    date: "Feb 6, 2024",
    title: "AI, AGI, and the Future: Insights from the Last Two Weeks",
    slug: "ai-agi-future-insights",
    description:
      "A deep dive into recent developments in AI and AGI, and what they mean for the future of technology.",
  },
  {
    date: "Jan 28, 2024",
    title: "Building Modern Web Applications with Next.js",
    slug: "building-modern-web-applications",
    description:
      "A comprehensive guide to building scalable and performant web applications using Next.js and modern tools.",
  },
  {
    date: "Jan 15, 2024",
    title: "The Future of Product Management in AI-First Companies",
    slug: "product-management-ai-first",
    description:
      "How product management is evolving in companies that put AI at the center of their strategy.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-32">
      <main className="container mx-auto px-8 md:px-8 max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-zinc-400 text-lg">
            Thoughts on product management, software engineering, and AI
          </p>
        </div>

        {/* Blog Posts List */}
        <div className="grid gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-all hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div
                      className={`${GeistMono.className} text-sm text-zinc-500`}
                    >
                      {post.date}
                    </div>
                    <h3 className="text-2xl font-semibold group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-all transform group-hover:translate-x-1 flex-shrink-0 mt-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
