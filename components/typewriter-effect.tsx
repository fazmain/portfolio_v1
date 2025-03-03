"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function TypewriterEffect({ words }: { words: string[] }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(text.slice(0, -1));
        setDelta(100);
      }, delta);

      if (text === "") {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
        setDelta(100);
      }
    } else {
      if (text === words[currentWord]) {
        timer = setTimeout(() => {
          setIsDeleting(true);
          setDelta(900);
        }, 900);
      } else {
        timer = setTimeout(() => {
          setText(words[currentWord].slice(0, text.length + 1));
        }, delta);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWord, words, delta]);

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="inline-block"
      >
        |
      </motion.span>
    </motion.span>
  );
}
