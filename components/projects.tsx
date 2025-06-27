"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "react-masonry-css";

const projects = [
  {
    title: "Ganglyon",
    description:
      "An intelligent chatbot using natural language processing to provide customer support.",
    link: "/projects/ai-chatbot",
    media: {
      type: "image" as const,
      src: "/images/xx.png",
    },
  },
  {
    title: "GPT Finder",
    description:
      "A scalable e-commerce solution with real-time inventory management.",
    link: "/projects/e-commerce-platform",
    media: {
      type: "image" as const,
      src: "/images/gptfinder.jpeg",
    },
  },
  {
    title: "Feast Finder",
    description: "Interactive dashboard for visualizing complex datasets.",
    link: "/projects/data-viz-dashboard",
    media: {
      type: "image" as const,
      src: "/images/feastfinder.png",
    },
  },
  {
    title: "Personal Todo List",
    description:
      "A cross-platform mobile app for tracking workouts and nutrition.",
    link: "/projects/fitness-app",
    media: {
      type: "image" as const,
      src: "/images/todo.png",
    },
  },
  {
    title: "CoW Study Rooms",
    description:
      "Secure and transparent voting system using blockchain technology.",
    link: "/projects/blockchain-voting",
    media: {
      type: "image" as const,
      src: "/images/studyrooms.png",
    },
  },
];

export function Projects() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto -ml-4"
      columnClassName="pl-4 bg-clip-padding"
    >
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
            className="group block bg-zinc-800/50 rounded-xl overflow-hidden hover:bg-zinc-800 transition-colors"
          >
            <div className="relative">
              {project.media.type === "image" ? (
                <Image
                  src={project.media.src || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              ) : (
                <video
                  src={project.media.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
              <p className="text-zinc-300 text-sm">{project.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </Masonry>
  );
}
