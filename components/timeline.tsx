"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { GeistMono } from "geist/font/mono";

export function Timeline() {
  const experiences = [
    {
      title: "Software Engineer Intern @ Shiree Private Limited",
      company: "Shiree Private Limited",
      logo: "/shiree-logo.jpg",
      startDate: "05/2024",
      endDate: "08/2024",
      location: "Dhaka, Bangladesh",
      description:
        "",
      tags: ["Java", "React", "Express", "AWS", "Docker"],
      department: "Commerce, Identity and Security",
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
      logo: "/shiree-logo.jpg",
      startDate: "05/2023",
      endDate: "07/2023",
      location: "Santa Monica, CA",
      description: "Security, Payments and Billing",
      tags: ["JavaScript", "React", "Node.js", "Neo4j"],
      department: "Security, Payments and Billing",
      images: [],
    },
  ];

  return (
    <div className="space-y-12">
      <h2 className={`${GeistMono.className} text-2xl font-bold`}>
        {" "}
        ~ experience
      </h2>

      <div className="space-y-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 pr-4 md:grid md:grid-cols-[120px_1fr] md:gap-8"
          >
            {/* Timeline Dot */}
            {/* <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-9px] top-2 ring-4 ring-blue-500/20 md:top-1" /> */}

            {/* Date */}
            <div
              className={`${GeistMono.className} text-[#ff7b4d] mb-4 md:mb-0 md:text-right`}
            >
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
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  {/* Department & Location */}
                  <div className="space-y-2">
                    <div className="text-[#ff7b4d]">
                      <span className="text-blue-400 inline-flex items-center">
                        {/* <p className="text-white">{exp.department} {" | "}</p> */}
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
                    className="px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-zinc-300 leading-relaxed">{exp.description}</p>

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
  );
}
