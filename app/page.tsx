"use client";

import { useState } from "react";
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
import { FancySearchBar } from "@/components/fancy-search-bar";
import { Creative } from "@/components/creative";
import { ChatModal } from "@/components/chatmodal";

export default function Home() {
  const words = [
    " building cool projects",

    " shipping MVPs",

    " researching AI",

    " hacking on ideas",

    " playing badminton",

    " watching 'The Office'",

    " tinkering with tech",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState<string | undefined>(
    undefined
  );
  const handleSend = (value: string) => {
    setInitialQuestion(value);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-32">
      <Navigation />

      <main className="container mx-auto px-8 md:px-8 space-y-24">
        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
          <div className="space-y-4 text-gray-300">
            <h1 className="font-playfair text-5xl md:text-7xl leading-tight">
              Hey there 👋🏽, I am Faiaz
              <span className="inline-flex items-center ml-4 w-10 h-10 md:w-20 md:h-20">
                <img
                  src="/dp.png"
                  alt="Faiaz Avatar"
                  className="rounded-md object-cover bg-orange-100"
                />
              </span>
              , a software engineer who loves 
              <span className="ml-2 text-orange-300">
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
            {/* Chat interface */}
            {/* <FancySearchBar onSend={handleSend} />
            <ChatModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              initialQuestion={initialQuestion}
            /> */}

            {/* Experience Section */}
            <FadeIn>
              <Timeline />
            </FadeIn>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-12">
          <Projects />
        </div>
        {/* <div>
          <Creative />
        </div> */}

        {/* Blog Section */}
        {/* <FadeIn className="space-y-8">
          <h2 className={`${GeistMono.className} text-2xl font-bold`}>
            ~ latest posts
          </h2>
          <Blog />
        </FadeIn> */}

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
