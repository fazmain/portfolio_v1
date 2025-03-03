"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ViewCounter } from "./view-counter";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="container mx-auto px-8 h-24 flex items-center justify-between">
        <Link href="/" className="text-xl">
          faiaz
        </Link>

        <div className="flex items-center gap-8 text-sm">
          <Link
            href="/journey"
            className="hover:text-zinc-400 transition-colors"
          >
            the journey
          </Link>
          {/* <Link
            href="/projects"
            className="hover:text-zinc-400 transition-colors"
          >
            projects
          </Link> */}
          <Link
            href="/resume"
            className="hover:text-zinc-400 transition-colors"
          >
            resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
