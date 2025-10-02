import { Send } from "lucide-react";
import React from "react";

// FancySearchBar: A full-width search bar with a colorful animated glow border, send button, and suggested queries
export function FancySearchBar({
  placeholder = "Ask me something...",
  onSend,
  suggestions = [
    "What are your life goals?",
    "What is something you are proud of?",
    "Tell me a fun fact!",
    "What's your favorite project?",
  ],
}: {
  placeholder?: string;
  onSend?: (value: string) => void;
  suggestions?: string[];
}) {
  // Local state for the input value
  const [value, setValue] = React.useState("");

  // Handle send button click
  const handleSend = () => {
    if (onSend) onSend(value);
    setValue("");
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  // Handle suggestion click
  const handleSuggestion = (suggestion: string) => {
    setValue(suggestion);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      {/* Outer div for the animated gradient border, with extra padding for visibility */}
      <div className="relative w-full p-1">
        {/* Gradient border using a div behind the input bar */}
        <div
          className="absolute inset-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 to-blue-500 animate-glow z-0"
          style={{ filter: "blur(10px)" }}
        />
        {/* Main input bar with slightly smaller border radius to reveal the glow */}
        <div className="h-12 relative z-10 rounded-full bg-black flex items-center px-6 py-3 shadow-lg">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-white text-lg placeholder-gray-400 font-medium font-sans"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSend}
            className="ml-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Send"
          >
            <Send size={24} className="text-white" />
          </button>
        </div>
      </div>
      {/* Suggested queries row */}
      <div className="flex flex-wrap gap-2 mt-4">
        {suggestions.map((suggestion, idx) => (
          <button
            key={idx}
            type="button"
            className="px-4 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20 transition-colors text-sm font-medium border border-white/20"
            onClick={() => handleSuggestion(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
      {/* Custom animation for the gradient border */}
      <style jsx>{`
        .animate-glow {
          background-size: 200% 200%;
          animation: glow-gradient 3s linear infinite;
        }
        @keyframes glow-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
