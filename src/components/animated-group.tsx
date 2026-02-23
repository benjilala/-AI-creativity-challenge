"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export function AnimatedGroup({ children, className, stagger = 60 }: AnimatedGroupProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              className={cn(
                "transition-none",
                visible ? "animate-fade-up" : "opacity-0"
              )}
              style={visible ? { animationDelay: `${i * stagger}ms` } : undefined}
            >
              {child}
            </div>
          ))
        : <div className={visible ? "animate-fade-up" : "opacity-0"}>{children}</div>
      }
    </div>
  )
}
