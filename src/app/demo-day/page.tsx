import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { AnimatedGroup } from "@/components/animated-group"
import { Zap, Target, Users } from "lucide-react"

const formatItems = [
  { label: "Demo", value: "7 min" },
  { label: "Q&A", value: "3 min" },
  { label: "Format", value: "Live only" },
]

const checklist = [
  { number: 1, title: "Problem", description: "What manual pain are you solving?" },
  { number: 2, title: "System Map", description: "Show the pipeline architecture." },
  { number: 3, title: "Live Pipeline", description: "Run it live. Input to output." },
  { number: 4, title: "Impact", description: "Time saved, quality gained, steps removed." },
  { number: 5, title: "Reuse", description: "How does another team adopt this tomorrow?" },
]

const scoringQuestions = [
  {
    question: "Does it work?",
    detail: "Run the pipeline live. Real input, real output, no faking it.",
    icon: Zap,
  },
  {
    question: "Does it matter?",
    detail: "Show real time or effort saved. Before/after, not hypothetical.",
    icon: Target,
  },
  {
    question: "Can others use it?",
    detail: "Explain how a different team adopts this system tomorrow.",
    icon: Users,
  },
]

export default function DemoDayPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Demo Day"
        description="Present your system live. No slides, no mockups — working pipelines only."
      />

      <Section title="Format">
        <AnimatedGroup className="grid grid-cols-3 gap-3" stagger={60}>
          {formatItems.map((item) => (
            <div key={item.label} className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
              <p className="text-2xl font-extrabold tabular-nums mt-1.5">{item.value}</p>
            </div>
          ))}
        </AnimatedGroup>
      </Section>

      <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />

      <Section title="Demo Checklist">
        <div className="glass rounded-xl p-5">
          <div className="space-y-4">
            {checklist.map((item) => (
              <div key={item.number} className="flex gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-xs font-bold tabular-nums text-muted-foreground">
                  {item.number}
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />

      <Section title="What We're Asking">
        <AnimatedGroup className="grid gap-4 md:grid-cols-3" stagger={80}>
          {scoringQuestions.map((item) => (
            <div key={item.question} className="glass rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-chaos-muted">
                  <item.icon className="size-4 text-chaos" />
                </div>
                <h3 className="text-base font-bold">{item.question}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </AnimatedGroup>
      </Section>
    </div>
  )
}
