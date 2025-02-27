"use client"

import { motion } from "framer-motion"
import { GeistMono } from "geist/font/mono"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    date: "Feb 6, 2024",
    title: "AI, AGI, and the Future: Insights from the Last Two Weeks",
    slug: "ai-agi-future-insights",
  },
  {
    date: "Jan 28, 2024",
    title: "Building Modern Web Applications with Next.js",
    slug: "building-modern-web-applications",
  },
  {
    date: "Jan 15, 2024",
    title: "The Future of Product Management in AI-First Companies",
    slug: "product-management-ai-first",
  },
]

export function Blog() {
  return (
    <div className="grid gap-6">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group flex items-center justify-between p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
          >
            <div className="space-y-1">
              <div className={`${GeistMono.className} text-sm text-zinc-500`}>{post.date}</div>
              <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">{post.title}</h3>
            </div>
            <ArrowRight className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

