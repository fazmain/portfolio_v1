"use client";

import { Navigation } from "@/components/navigation";
import { JourneyTimeline } from "@/components/journey-timeline";
import { FadeIn } from "@/components/fade-in";
import { GeistMono } from "geist/font/mono";

export default function JourneyPage() {
  return (
    <div className="min-h-screen pt-24 bg-black text-white">
      <Navigation />

      <main className="container mx-auto px-8 md:px-16 lg:px-32 space-y-16">
        <FadeIn>
          <h1 className={`${GeistMono.className} text-4xl font-bold mb-8`}>
            my journey
          </h1>
          <p className="text-zinc-400 max-w-2xl">
            A collection of random thoughts, life updates, microblogs, photos,
            and more. This is my digital garden, growing and evolving over time.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-px bg-zinc-700" />

          <JourneyTimeline />
        </div>
      </main>
    </div>
  );
}
