"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"

export function ChatInterface() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; sender: "user" | "bot" }>>([])
  const [input, setInput] = useState("")

  const handleSend = (text: string) => {
    const messageText = text || input
    if (!messageText.trim()) return

    setIsExpanded(true)
    setMessages([...messages, { text: messageText, sender: "user" }])
    setInput("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! I'll get back to you soon.",
          sender: "bot",
        },
      ])
    }, 1000)
  }

  return (
    <div className="w-full">
      <div className="relative">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something!"
          className="w-full px-6 py-4 bg-zinc-800/50 rounded-full text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleSend(input)
            }
          }}
        />
        <button
          onClick={() => handleSend(input)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-zinc-400 hover:text-zinc-300 transition-colors disabled:opacity-50"
          disabled={!input.trim()}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && messages.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 space-y-4"
          >
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-6 py-3 rounded-full ${
                    msg.sender === "user" ? "bg-zinc-800 text-zinc-200" : "bg-zinc-900 text-zinc-300"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

