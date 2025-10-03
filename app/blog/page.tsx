"use client";

import { motion } from "framer-motion";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Define blog posts data
const posts = [
  {
    date: "Oct 3, 2025",
    title: "Opening the Blackbox of LLMs: My current research description",
    slug: "my-research-on-mechInterp",
    description:
      "An high level introduction on my current research on Mechanistic Interpretability",
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
            Just writing down my thoughts and summaries.
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
                className="group block p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-all hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div
                      className={`${GeistMono.className} text-sm text-zinc-500`}
                    >
                      {post.date}
                    </div>
                    <h3 className="text-2xl font-semibold group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-zinc-500 group-hover:text-orange-400 transition-all transform group-hover:translate-x-1 flex-shrink-0 mt-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
