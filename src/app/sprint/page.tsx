import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { AnimatedGroup } from "@/components/animated-group"
import { getSprintDay } from "@/lib/sprint"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const days = [
  {
    day: 1,
    title: "Orientation + System Design",
    description:
      "Pick your track, review tools, map your pipeline architecture. No building yet — design first.",
  },
  {
    day: 2,
    title: "Build Core Pipeline",
    description:
      "Stand up the primary automation flow. Get input → output working end-to-end, even if rough.",
  },
  {
    day: 3,
    title: "Integrate Tools",
    description:
      "Connect Cursor, Figma MCP, shadcn Studio MCP. Wire your pipeline to real tool outputs.",
  },
  {
    day: 4,
    title: "Test + Harden",
    description:
      "Run edge cases. Break your pipeline. Fix it. Make it reliable enough to demo live.",
  },
  {
    day: 5,
    title: "Apply to Real Briefs",
    description:
      "Use your pipeline on at least 2 real internal briefs. Capture metrics: time saved, steps removed.",
  },
  {
    day: 6,
    title: "Polish + Document",
    description:
      "Clean up prompts, write documentation, prepare your system map and reuse guide.",
  },
  {
    day: 7,
    title: "Demo Day",
    description:
      "Present your system live. 7 minutes demo, 3 minutes Q&A. Systems only — no slide decks.",
  },
]

const deliverables = [
  {
    number: 1,
    title: "System Map",
    description: "Input → Tools → Output",
    detail:
      "Show how your pipeline works end-to-end. What goes in, what tools process it, what comes out.",
  },
  {
    number: 2,
    title: "Working Pipeline",
    description: "Run it live on real work",
    detail:
      "Prove it works on at least 2 real briefs. Show before/after: time saved, steps removed, quality gained.",
  },
  {
    number: 3,
    title: "Reuse Guide",
    description: "Another team can adopt it",
    detail:
      "Document it well enough that a different team could pick it up and use it tomorrow.",
  },
]

type DayStatus = "complete" | "active" | "future"

function getDayStatus(day: number, currentDay: number, sprintStatus: string): DayStatus {
  if (sprintStatus === "complete") return "complete"
  if (sprintStatus === "before") return "future"
  if (day < currentDay) return "complete"
  if (day === currentDay) return "active"
  return "future"
}

export default function SprintPage() {
  const sprint = getSprintDay()

  return (
    <div className="space-y-10">
      <PageHeader
        title="Sprint"
        description="One week. Seven days from zero to demo."
      />

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-border via-border to-transparent" />

        <div className="space-y-1">
          {days.map((item) => {
            const status = getDayStatus(item.day, sprint.current, sprint.status)
            return (
              <div key={item.day} className="relative flex gap-4 py-3">
                <div className="relative z-10 flex shrink-0 items-start pt-0.5">
                  <div
                    className={cn(
                      "flex size-[38px] items-center justify-center rounded-full border-2 transition-all",
                      status === "complete" && "border-success/40 bg-success/10",
                      status === "active" && "border-chaos bg-chaos/10 animate-pulse-glow",
                      status === "future" && "border-border bg-background"
                    )}
                  >
                    {status === "complete" ? (
                      <Check className="size-4 text-success" />
                    ) : (
                      <span
                        className={cn(
                          "text-xs font-bold tabular-nums",
                          status === "active" && "text-chaos",
                          status === "future" && "text-muted-foreground/50"
                        )}
                      >
                        {item.day}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={cn(
                    "glass rounded-xl px-4 py-3 flex-1 transition-all",
                    status === "active" && "glass-glow border-chaos/20",
                    status === "future" && "opacity-50"
                  )}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <p
                      className={cn(
                        "text-sm font-semibold",
                        status === "active" && "text-chaos"
                      )}
                    >
                      {item.title}
                    </p>
                    {status === "active" && (
                      <Badge className="text-[10px] px-1.5 py-0 bg-chaos text-chaos-foreground font-semibold">
                        Today
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />

      {/* Deliverables */}
      <Section title="What to Ship">
        <AnimatedGroup className="grid gap-4 md:grid-cols-3" stagger={80}>
          {deliverables.map((item) => (
            <div key={item.title} className="glass rounded-xl p-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-chaos/30 bg-chaos-muted text-xs font-bold tabular-nums text-chaos">
                  {item.number}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="text-sm font-medium text-chaos/70">
                    {item.description}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                {item.detail}
              </p>
            </div>
          ))}
        </AnimatedGroup>
      </Section>
    </div>
  )
}
