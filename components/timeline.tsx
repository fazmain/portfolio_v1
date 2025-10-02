"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { GeistMono } from "geist/font/mono";

export function Timeline() {
  const experiences = [
    {
      title: "Software Engineer Intern @ Wayne Country Visitors Bureau",
      company: "Wayne Country Visitors Bureau",
      logo: "/wayne-logo.jpeg",
      startDate: "May 2025",
      endDate: "July 2025",
      location: "Wooster, Ohio",
      description: "Build an offline-first map as a progressive web app to enhance tourist experiences, AI powered itinerary generation taylored to user needs.",
      tags: ["Gemini", "OpenRouteService", "IndexedDB", "Firebase"],
      department: "Full-stack Development",
      images: [
        // "/placeholder.svg?height=200&width=300",
        // "/placeholder.svg?height=200&width=300",
        // "/placeholder.svg?height=200&width=300",
        // "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      title: "Software Engineer Intern @ Shiree Private Limited",
      company: "Shiree Private Limited",
      logo: "/shiree-logo.png",
      startDate: "May 2024",
      endDate: "Aug 2024",
      location: "Dhaka, Bangladesh",
      description: "Implemented React Service Workers to expand in low-bandwidth regions and improve assessment completion by 15%.",
      tags: ["JavaScript", "React", "Express", "Firebase", "Docker"],
      department: "Full-stack Development",
      images: [
        // "/placeholder.svg?height=200&width=300",
        // "/placeholder.svg?height=200&width=300",
        // "/placeholder.svg?height=200&width=300",
        // "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      title: "Product Manager Intern @ Shiree Private Limited",
      company: "Shiree Private Limited",
      logo: "/shiree-logo.png",
      startDate: "May 2023",
      endDate: "July 2023",
      location: "Dhaka, Bangladesh",
      description: "Optimized UI elements by introducing prominent call-to-action buttons and intuitive navigation cues, reducing feature discovery time by 80%.",
      tags: ["Agile", "Figma", "Product Roadmaps", "User Experience"],
      department: "Assessment and Admin Tools",
      images: [],
    },
  ];

  return (
    <div className="w-full md:mt-20">
      {/* Responsive grid: 1 column on mobile, 3 columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 items-stretch">
        <div className="flex justify-left md:justify-left md:pr-8 md:py-0">
          <div>
            <h2
              className={`font-playfair text-4xl font-bold text-gray-300 leading-tight`}
              
            >
              Work Experience
            </h2>
            <p className="text-gray-400 mt-2">

            </p>
          </div>
        </div>
        {/* Right: Timeline content spans 2 columns on md+ */}
        <div className="md:col-span-2">
          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative pr-2 md:grid md:grid-cols-[120px_1fr] md:gap-8"
              >
                {/* Date */}
                <div className={`text-blue-400 mb-4 md:mb-0 md:text-right`}>
                  {exp.startDate}
                  <br />—<br />
                  {exp.endDate}
                </div>

                {/* Content */}
                <div className="space-y-4 border-l-2 border-zinc-800 pl-8 md:pl-0 md:border-l-0">
                  {/* Title Row */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={exp.company}
                        width={45}
                        height={45}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-300">
                        {exp.title}
                      </p>
                      {/* Department & Location */}
                      <div className="space-y-2">
                        <div className="text-[#ff7b4d]">
                          <span className="text-blue-400 inline-flex items-center">
                            <p className="text-gray-400">
                              {exp.department} {" | "}
                            </p>
                            <MapPin className="w-4 h-4 mr-1" /> {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 rounded-full bg-violet-600/30 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Image Grid */}
                  {exp.images.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                      {exp.images.map((img, index) => (
                        <div
                          key={index}
                          className="relative aspect-[4/3] rounded-lg overflow-hidden"
                        >
                          <Image
                            src={img || "/placeholder.svg"}
                            alt={`${exp.company} image ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
