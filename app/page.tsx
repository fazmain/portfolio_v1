"use client";

import { Github, Linkedin } from "lucide-react";
import { ChatInterface } from "@/components/chat-interface";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";
import { Timeline } from "@/components/timeline";
import { Blog } from "@/components/blog";
import { Skills } from "@/components/skills";
import { FadeIn } from "@/components/fade-in";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { ViewCounter } from "@/components/view-counter";

export default function Home() {
  const words = [
    "make stuff",
    "play badminton",
    "watch 'the office'",
    "create experiences",
    "innovate solutions",
  ];

  return (
    <div className="min-h-screen pt-24">
      <Navigation />

      <main className="container mx-auto px-8 md:px-8 lg:px-40 space-y-32">
        {/* Hero Section */}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-5xl leading-tight">
            Hi, 👋🏽 i am faiaz. software
            <br />
            developer , loves to
            <br />
            <span>
              <TypewriterEffect words={words} />
            </span>
          </h1>

          <div className="flex gap-4 pt-8">
            <Link
              href="https://github.com"
              target="_blank"

            >
              <Github size={28} strokeWidth={1} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              // className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Linkedin size={28} strokeWidth={1} />
            </Link>
            <ViewCounter />
          </div>

          {/* Chat Interface */}
          {/* <div className="mt-12 max-w-2xl">
            <ChatInterface />
            <div className="mt-4 space-y-2 text-zinc-400">
              <p>What are your life goals?</p>
              <p>What is something that you are proud of?</p>
            </div>
          </div> */}
        </div>

        {/* Projects Section */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold"> ~ work I am proud of</h2>
          <Projects />
        </div>

        {/* Experience Section */}
        <FadeIn className="px-8">
          <Timeline />
        </FadeIn>

        {/* Blog Section */}
        <FadeIn className="space-y-8">
          <h2 className={`${GeistMono.className} text-2xl font-bold`}>
            //latest posts
          </h2>
          <Blog />
        </FadeIn>

        {/* Skills Section */}
        <FadeIn className="space-y-8">
          <h2 className={`${GeistMono.className} text-2xl font-bold`}>
            //my skills
          </h2>
          <Skills />
        </FadeIn>
      </main>
    </div>
  );
}
