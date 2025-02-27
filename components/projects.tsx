"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Masonry from "react-masonry-css"

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "An intelligent chatbot using natural language processing to provide customer support.",
    link: "/projects/ai-chatbot",
    media: {
      type: "video" as const,
      src: "/videos/ai-chatbot-demo.mp4",
      aspect: "aspect-video",
    },
  },
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce solution with real-time inventory management.",
    link: "/projects/e-commerce-platform",
    media: {
      type: "image" as const,
      src: "/images/e-commerce-platform.jpg",
      aspect: "aspect-square",
    },
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets.",
    link: "/projects/data-viz-dashboard",
    media: {
      type: "image" as const,
      src: "/images/data-viz-dashboard.jpg",
      aspect: "aspect-[4/3]",
    },
  },
  {
    title: "Mobile Fitness App",
    description: "A cross-platform mobile app for tracking workouts and nutrition.",
    link: "/projects/fitness-app",
    media: {
      type: "video" as const,
      src: "/videos/fitness-app-demo.mp4",
      aspect: "aspect-[9/16]",
    },
  },
  {
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system using blockchain technology.",
    link: "/projects/blockchain-voting",
    media: {
      type: "image" as const,
      src: "/images/blockchain-voting.jpg",
      aspect: "aspect-[3/2]",
    },
  },
]

export function Projects() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  }

  return (
    <Masonry breakpointCols={breakpointColumnsObj} className="flex w-auto -ml-4" columnClassName="pl-4 bg-clip-padding">
      {projects.map((project, i) => (
        <motion.div
          key={project.title + i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="mb-4"
        >
          <Link
            href={project.link}
            className="group block bg-zinc-800/50 rounded-3xl overflow-hidden hover:bg-zinc-800 transition-colors"
          >
            <div className={`relative ${project.media.aspect}`}>
              {project.media.type === "image" ? (
                <Image
                  src={project.media.src || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  src={project.media.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
              <p className="text-zinc-300 text-sm">{project.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </Masonry>
  )
}

