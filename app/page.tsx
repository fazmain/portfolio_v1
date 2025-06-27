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

import Avatar3D from "@/components/Avatar3D";

export default function Home() {
  const words = [
    "make stuff",
    "play badminton",
    "watch 'the office'",
    "ship MVS",
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-32">
      <Navigation />

      <main className="container mx-auto px-8 md:px-8 lg:px-[15vw] space-y-24">
        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center lg:border-b-2">
          <div className="space-y-4 max-w-2xl text-left">
            <h1
              className={`${GeistMono.className} text-4xl lg:text-5xl leading-tight`}
            >
              Hi,👋🏽 i am{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600">
                Faiaz.
              </span>{" "}
              Software
              <br />
              developer,loves
              <br />
              to
              <br />
              <span>
                <TypewriterEffect words={words} />
              </span>
            </h1>

            <div className="flex gap-4 pt-8 justify-start">
              <Link href="https://github.com/fazmain" target="_blank">
                <Github size={28} strokeWidth={1} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/faiazmain/"
                target="_blank"
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

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-[300px] lg:w-full">
              <Avatar3D />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-12">
        <h2 className={`${GeistMono.className} text-2xl font-bold`}> ~ my work</h2>

          <Projects />
        </div>

        {/* Experience Section */}
        <FadeIn>
          <Timeline />
        </FadeIn>

        {/* Blog Section */}
        {/* <FadeIn className="space-y-8">
          <h2 className={`${GeistMono.className} text-2xl font-bold`}>
            ~ latest posts
          </h2>
          <Blog />
        </FadeIn>

        {/* Skills Section */}
        {/* <FadeIn className="space-y-8">
          <h2 className={`${GeistMono.className} text-2xl font-bold`}>
            ~ my skills
          </h2>
          <Skills />
        </FadeIn>  */}
      </main>
    </div>
  );
}
