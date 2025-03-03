"use client"

import { motion } from "framer-motion"
import { GeistMono } from "geist/font/mono"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Camera, FileText, Newspaper } from "lucide-react"

type JourneyItem = {
  type: "blog" | "photo" | "microblog" | "life-update"
  date: string
  title: string
  content: string
  image?: string
  link?: string
}

const journeyItems: JourneyItem[] = [
  {
    type: "blog",
    date: "2024-03-15",
    title: "Reflections on AI Ethics",
    content: "As AI continues to advance, we must consider the ethical implications...",
    link: "/blog/ai-ethics-reflections",
  },
  {
    type: "photo",
    date: "2024-03-10",
    title: "Sunset at the Golden Gate Bridge",
    content: "Captured this breathtaking view during my trip to San Francisco.",
    image: "/images/golden-gate-sunset.jpg",
  },
  {
    type: "microblog",
    date: "2024-03-05",
    title: "Quick Thought",
    content: "Sometimes the best code is the code you don't write. Simplicity is key.",
  },
  {
    type: "life-update",
    date: "2024-02-28",
    title: "New Role at TechCorp",
    content: "Excited to announce that I've started a new position as Senior Software Engineer at TechCorp!",
  },
  // Add more items as needed
]

export function JourneyTimeline() {
  return (
    <div className="space-y-16">
      {journeyItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative md:grid md:grid-cols-[120px_1fr] md:gap-8"
        >
          {/* Timeline Dot */}
          {/* <div className="absolute w-4 h-4 bg-purple-500 rounded-full left-[-10px] md:left-[116px] top-2 z-10 ring-4 ring-purple-500/20" /> */}

          {/* Date */}
          <div className={`${GeistMono.className} text-[#ff7b4d] mb-4 md:mb-0 md:text-right relative z-10`}>
            {item.date}
          </div>

          {/* Content */}
          <div className="pl-8 md:pl-0 relative">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {item.type === "blog" && <FileText className="w-5 h-5 text-blue-400" />}
                {item.type === "photo" && <Camera className="w-5 h-5 text-green-400" />}
                {item.type === "microblog" && <Newspaper className="w-5 h-5 text-yellow-400" />}
                {item.type === "life-update" && <ArrowRight className="w-5 h-5 text-red-400" />}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>

              <p className="text-zinc-400">{item.content}</p>

              {item.image && (
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {item.link && (
                <Link
                  href={item.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Read more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

