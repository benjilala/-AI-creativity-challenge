import Link from "next/link"
import { Section } from "@/components/section"
import { AnimatedGroup } from "@/components/animated-group"
import { getSprintDay } from "@/lib/sprint"
import { Award, Library, Blocks, BookOpen } from "lucide-react"
import {
  Layers,
  Wrench,
  Calendar,
  Presentation,
} from "lucide-react"

const quickLinks = [
  { title: "Tracks", description: "Pick your path", href: "/tracks", icon: Layers },
  { title: "Toolkit", description: "What you'll build with", href: "/toolkit", icon: Wrench },
  { title: "Sprint", description: "7-day timeline", href: "/sprint", icon: Calendar },
  { title: "Demo Day", description: "Present live", href: "/demo-day", icon: Presentation },
]

const outcomes = [
  {
    title: "Team Standards",
    icon: Award,
    description: "Winning pipelines become the default way teams work.",
  },
  {
    title: "Shared Libraries",
    icon: Library,
    description: "Prompt stacks and automation scripts get published for everyone.",
  },
  {
    title: "Internal Products",
    icon: Blocks,
    description: "The best systems evolve into tools the whole org relies on.",
  },
  {
    title: "How We Work",
    icon: BookOpen,
    description: "Proven patterns become part of how we design, build, and ship.",
  },
]

export default function OverviewPage() {
  const sprint = getSprintDay()

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="space-y-6 pt-4">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            Zero{" "}
            <span className="text-muted-foreground/40">&rarr;</span>{" "}
            Production{" "}
            <span className="text-muted-foreground/40">&rarr;</span>{" "}
            <span className="text-chaos">System</span>
          </h1>
          <p className="text-lg sm:text-xl font-light text-muted-foreground tracking-tight max-w-lg">
            Automate the Obvious. Elevate the Important.
          </p>
        </div>

        <div className="space-y-4 max-w-xl">
          <p className="text-sm font-medium text-foreground leading-relaxed">
            AI gives us leverage. Structure gives us discipline. Chaos gives us originality.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Spend one week experimenting with AI. Build one workflow that makes
            your work faster, improves quality, removes friction, or makes things
            more fun. It can be small. It can be messy. It can be ambitious. If
            it saves you time or energy, it counts.
          </p>
          <p className="text-xs text-muted-foreground/80 leading-relaxed">
            Asset generators, UI builders, research shortcuts, prompt libraries,
            campaign kits, workflow automations, design helpers &mdash; if it
            helps, it belongs.
          </p>
        </div>

        {/* Sprint status */}
        <div className="flex items-center gap-3">
          {sprint.status === "active" && (
            <div className="glass glass-glow rounded-lg px-4 py-2.5 flex items-center gap-3">
              <div className="size-2.5 rounded-full bg-chaos animate-pulse-glow" />
              <span className="text-sm font-semibold tabular-nums text-chaos">
                Day {sprint.current} of {sprint.total}
              </span>
              <span className="text-xs text-muted-foreground">Sprint active</span>
            </div>
          )}
          {sprint.status === "before" && (
            <div className="glass rounded-lg px-4 py-2.5 flex items-center gap-3">
              <div className="size-2.5 rounded-full bg-muted-foreground/40" />
              <span className="text-sm font-medium text-muted-foreground">
                Starting soon
              </span>
            </div>
          )}
          {sprint.status === "complete" && (
            <div className="glass rounded-lg px-4 py-2.5 flex items-center gap-3">
              <div className="size-2.5 rounded-full bg-success" />
              <span className="text-sm font-semibold text-success">
                Challenge complete
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Quick links */}
      <Section title="Navigate">
        <AnimatedGroup className="grid grid-cols-2 gap-3" stagger={50}>
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group">
              <div className="glass rounded-xl p-4 h-full transition-all duration-200 hover:glass-glow hover:border-chaos/20 group-focus-visible:ring-2 group-focus-visible:ring-chaos group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background">
                <div className="flex flex-col gap-3">
                  <link.icon className="size-5 text-muted-foreground group-hover:text-chaos transition-colors duration-200" />
                  <div>
                    <p className="text-sm font-semibold">{link.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </AnimatedGroup>
      </Section>

      {/* What happens next */}
      <Section title="What Happens Next">
        <p className="text-sm text-muted-foreground mb-4">
          The best systems don&apos;t end at Demo Day. They become how we work.
        </p>
        <AnimatedGroup className="grid gap-3 sm:grid-cols-2" stagger={60}>
          {outcomes.map((item) => (
            <div key={item.title} className="glass rounded-xl p-4 flex items-start gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-chaos-muted">
                <item.icon className="size-4 text-chaos" />
              </div>
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </Section>
    </div>
  )
}
