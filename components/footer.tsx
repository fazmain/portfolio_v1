"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800 mt-32">
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Linkedin size={20} />
            </Link>
          </div>
          <p className="text-zinc-400 text-sm"> Last Updated: March 3, 2025</p>
          <p className="text-zinc-400 text-sm">© {currentYear} Faiaz Azmain</p>
        </div>
      </div>
    </footer>
  );
}
