"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Brain,
  GraduationCap,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Categories for filtering
const categories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "ai-ml", label: "AI/ML", icon: Brain },
  { id: "web-dev", label: "Web Development", icon: Globe },
  // { id: "education", label: "Education", icon: GraduationCap },
  { id: "tools", label: "Tools", icon: Wrench },
];

const projects = [
  {
    year: "2023",
    title: "FeastFinder",
    description:
      "A project about posture awareness using sensors and visual feedback.",
    image: "/images/feastfinder.png",
    category: "web-dev",
  },
  {
    year: "2023",
    title: "GangLyon",
    description: "An AI-powered medical education platform.",
    image: "/images/ganglyon.png",
    category: "web-dev",
  },
  {
    year: "2023",
    title: "Study Rooms",
    description: "Collaborative learning spaces for students.",
    image: "/images/studyrooms.png",
    category: "web-dev",
  },
  {
    year: "2023",
    title: "GPT Finder",
    description: "AI assistant discovery platform.",
    image: "/images/gptfinder.jpeg",
    category: "tools",
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Text Column */}
        <div className="flex flex-col justify-start space-y-4">
          <h2 className="font-playfair text-4xl font-bold text-gray-300 leading-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            A collection of projects I've worked on, ranging from AI and machine
            learning to web applications and educational platforms.
          </p>

          {/* Category Filter */}
          <div className="flex flex-col gap-2 mt-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-left
                    ${
                      selectedCategory === category.id
                        ? "bg-gray-800 text-white"
                        : "bg-gray-900/50 text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"
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

        {/* Project Cards Grid - Takes up 2 columns */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative w-full h-[300px] overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm mb-2">
                        {project.year}
                      </p>
                      <h3 className="text-white text-xl font-bold">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-sm mt-2 capitalize">
                        {project.category.replace("-", " ")}
                      </p>
                      <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
