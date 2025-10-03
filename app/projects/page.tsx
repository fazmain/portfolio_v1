"use client";

// Main projects page component that displays all projects with detailed information
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Brain,
  GraduationCap,
  Wrench,
  Github,
  ExternalLink,
  Calendar,
  Tag,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Categories for filtering projects
const categories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "ai-ml", label: "AI/ML", icon: Brain },
  { id: "web-dev", label: "Web Development", icon: Globe },
  { id: "tools", label: "Tools", icon: Wrench },
];

// Extended project data with more detailed information
const projects = [
  {
    year: "2023",
    title: "FeastFinder",
    description:
      "A food and restaurant discovery platform using Natural Language",
    fullDescription:
      "FeastFinder is an innovative platform that revolutionizes how people discover restaurants and food experiences. Using advanced natural language processing, users can describe what they're craving in plain English, and the platform intelligently matches them with the perfect dining options. The system understands context, preferences, and even mood-based recommendations.",
    image: "/images/feastfinder.png",
    category: "web-dev",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    features: [
      "Natural language restaurant search",
      "Smart recommendation engine",
      "Real-time availability checking",
      "User preference learning",
      "Interactive map integration",
    ],
    github: "#",
    demo: "#",
  },
  {
    year: "2023",
    title: "GangLyon",
    description: "Education platform for Medical Students",
    fullDescription:
      "GangLyon is a comprehensive educational platform designed specifically for medical students. It provides interactive learning modules, collaborative study tools, and a rich resource library tailored to medical education. The platform facilitates peer-to-peer learning and includes features for tracking progress and preparing for medical examinations.",
    image: "/images/ganglyon.png",
    category: "web-dev",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "AWS S3",
    ],
    features: [
      "Interactive medical case studies",
      "Real-time collaborative learning",
      "Progress tracking dashboard",
      "Resource sharing platform",
      "Practice exam preparation",
    ],
    github: "#",
    demo: "#",
  },
  {
    year: "2023",
    title: "Study Rooms",
    description: "Finding study rooms on campus",
    fullDescription:
      "Study Rooms is a campus-wide solution that helps students find and book available study spaces in real-time. The platform integrates with campus facilities data to show live availability, room features, and allows students to reserve spaces for individual or group study sessions. It includes features for finding study partners and creating study groups.",
    image: "/images/studyrooms.png",
    category: "web-dev",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Google Maps API",
      "Material-UI",
    ],
    features: [
      "Real-time room availability",
      "Interactive campus map",
      "Room booking system",
      "Study group formation",
      "Amenity filtering",
    ],
    github: "#",
    demo: "#",
  },
  {
    year: "2023",
    title: "GPT Finder",
    description: "Extension to bookmark ChatGPT conversations",
    fullDescription:
      "GPT Finder is a Chrome extension that solves the problem of managing and organizing ChatGPT conversations. It allows users to bookmark important conversations, add tags and notes, search through conversation history, and quickly return to previous discussions. The extension includes smart categorization and export features for research and documentation purposes.",
    image: "/images/gptfinder.jpeg",
    category: "tools",
    technologies: [
      "JavaScript",
      "Chrome Extension API",
      "IndexedDB",
      "React",
      "Webpack",
    ],
    features: [
      "One-click conversation bookmarking",
      "Advanced search and filtering",
      "Tag-based organization",
      "Export to multiple formats",
      "Sync across devices",
    ],
    github: "#",
    demo: "#",
  },
];

export default function ProjectsPage() {
  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter projects based on selected category
  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-100 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              A collection of projects I've built, ranging from web applications
              to developer tools. Each project represents a unique challenge and
              learning experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                    ${
                      selectedCategory === category.id
                        ? "bg-purple-600 text-white"
                        : "bg-gray-900/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                    }
                  `}
                >
                  <Icon size={16} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all">
                  {/* Image Section */}
                  <div className="relative h-[300px] lg:h-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={14} />
                          {project.year}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-purple-400 capitalize">
                          <Tag size={14} />
                          {project.category.replace("-", " / ")}
                        </span>
                      </div>

                      <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h2>

                      <p className="text-gray-300 text-base mb-6 leading-relaxed">
                        {project.fullDescription}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-3">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-3">
                          Key Features
                        </h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIdx) => (
                            <li
                              key={featureIdx}
                              className="text-gray-300 text-sm flex items-start"
                            >
                              <span className="text-purple-400 mr-2">→</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-gray-400 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
