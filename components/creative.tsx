"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Play, Camera, Sparkles } from "lucide-react";

// Categories for filtering
const categories = [
  { id: "all", label: "All Works", icon: Sparkles },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "ai-generated", label: "AI Art", icon: Sparkles },
  { id: "films", label: "Short Films", icon: Play },
];

// Sample creative works - replace with your actual content
const creativeWorks = [
  {
    id: 1,
    title: "Urban Landscapes",
    category: "photography",
    image: "/images/feastfinder.png",
    aspectRatio: "square", // or "portrait" or "landscape"
  },
  {
    id: 2,
    title: "Dream Sequences",
    category: "ai-generated",
    image: "/images/feastfinder.png",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    title: "Dream Sequences",
    category: "ai-generated",
    image: "/images/feastfinder.png",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    title: "Dream Sequences",
    category: "ai-generated",
    image: "/images/feastfinder.png",
    aspectRatio: "portrait",
  },
  {
    id: 1,
    title: "Urban Landscapes",
    category: "photography",
    image: "/images/feastfinder.png",
    aspectRatio: "square", // or "portrait" or "landscape"
  },
  {
    id: 1,
    title: "Urban Landscapes",
    category: "photography",
    image: "/images/feastfinder.png",
    aspectRatio: "square", // or "portrait" or "landscape"
  },
  {
    id: 2,
    title: "Dream Sequences",
    category: "ai-generated",
    image: "/images/feastfinder.png",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    title: "Dream Sequences",
    category: "ai-generated",
    image: "/images/feastfinder.png",
    aspectRatio: "portrait",
  },
  // Add more works here
];

export function Creative() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  const filteredWorks = creativeWorks.filter(
    (work) => selectedCategory === "all" || work.category === selectedCategory
  );

  return (
    <div className="w-full space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-200"
        >
          Creative Expressions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          A collection of visual stories told through photography, AI-generated
          art, and short films.
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-4"
      >
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full transition-all
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
      </motion.div>

      {/* Creative Works Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredWorks.map((work) => (
          <motion.div
            key={work.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`
              relative overflow-hidden rounded-2xl cursor-pointer
              ${work.aspectRatio === "portrait" ? "row-span-2" : ""}
              ${work.aspectRatio === "landscape" ? "col-span-2" : ""}
            `}
            onMouseEnter={() => setHoveredWork(work.id)}
            onMouseLeave={() => setHoveredWork(null)}
          >
            {/* Image */}
            <div
              className={`
              relative w-full
              ${work.aspectRatio === "portrait" ? "h-[600px]" : "h-[400px]"}
            `}
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500"
                style={{
                  transform:
                    hoveredWork === work.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 bg-black/30 transition-opacity duration-300
                  ${hoveredWork === work.id ? "opacity-100" : "opacity-0"}
                `}
              >
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {work.title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-2 capitalize">
                    {work.category.replace("-", " ")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
