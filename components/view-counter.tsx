"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export function ViewCounter() {
  const [viewCount, setViewCount] = useState<number | null>(null)

  useEffect(() => {
    const incrementViewCount = async () => {
      try {
        const response = await fetch("/api/views", { method: "POST" })
        if (response.ok) {
          const data = await response.json()
          setViewCount(data.views)
        }
      } catch (error) {
        console.error("Failed to increment view count:", error)
      }
    }

    incrementViewCount()
  }, [])

  if (viewCount === null) {
    return 0 // Or a loading spinner
  }

  return (
    <div className="flex items-center gap-2 text-xl">
      <Eye size={28} strokeWidth={1} />
      <span>{viewCount}</span>
    </div>
  )
}

