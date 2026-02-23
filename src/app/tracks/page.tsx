import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"
import { AnimatedGroup } from "@/components/animated-group"
import { Palette, Layout, Users, Box, Megaphone } from "lucide-react"

const tracks = [
  {
    id: "visual",
    title: "Visual",
    icon: Palette,
    accent: "oklch(0.70 0.18 310)",
    mission:
      "Build automated pipelines that produce brand-quality visual assets from structured inputs.",
    pipelines: [
      {
        name: "Brand Asset Generator",
        description:
          "Prompt stack → AI image generation → style transfer → export-ready assets across formats and ratios.",
      },
      {
        name: "Photo Treatment Pipeline",
        description:
          "Raw photo → automated retouching → brand overlay → crop variants → delivery.",
      },
      {
        name: "Icon & Illustration System",
        description:
          "Brief → AI sketch → vectorization → token-aligned color → component library export.",
      },
    ],
  },
  {
    id: "ui",
    title: "UI",
    icon: Layout,
    accent: "oklch(0.65 0.18 250)",
    mission:
      "Create reusable component systems that ship production-ready interfaces from minimal input.",
    pipelines: [
      {
        name: "Component Factory",
        description:
          "Design token input → Cursor generation → shadcn/ui composition → Storybook documentation → PR-ready code.",
      },
      {
        name: "Page Builder Pipeline",
        description:
          "Wireframe → AI layout → component assembly → responsive check → deploy preview.",
      },
      {
        name: "Design-to-Code Bridge",
        description:
          "Figma file → MCP extraction → code generation → diff review → merge.",
      },
    ],
  },
  {
    id: "ux",
    title: "UX",
    icon: Users,
    accent: "oklch(0.70 0.15 175)",
    mission:
      "Automate research synthesis and prototype generation to accelerate design decisions.",
    pipelines: [
      {
        name: "Research Synthesizer",
        description:
          "Raw interviews → AI transcription → theme extraction → insight cards → recommendation framework.",
      },
      {
        name: "Flow Generator",
        description:
          "User story → AI flow mapping → screen generation → prototype linking → usability script.",
      },
      {
        name: "Audit Automation",
        description:
          "Live URL → accessibility scan → heuristic evaluation → prioritized fix list → ticket generation.",
      },
    ],
  },
  {
    id: "product",
    title: "Product",
    icon: Box,
    accent: "oklch(0.80 0.15 85)",
    mission:
      "Build systems that turn product thinking into structured, shippable specs automatically.",
    pipelines: [
      {
        name: "Spec Generator",
        description:
          "Problem statement → AI requirements → acceptance criteria → edge cases → dev-ready ticket.",
      },
      {
        name: "Competitive Scanner",
        description:
          "Competitor URLs → automated screenshot → feature extraction → gap analysis → opportunity map.",
      },
      {
        name: "Release Pipeline",
        description:
          "Changelog → AI summary → stakeholder comms → docs update → announcement draft.",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: Megaphone,
    accent: "oklch(0.70 0.20 20)",
    mission:
      "Create automated content pipelines that maintain brand voice across channels at scale.",
    pipelines: [
      {
        name: "Content Engine",
        description:
          "Brief → AI draft → brand voice check → format variants (blog, social, email) → schedule.",
      },
      {
        name: "Campaign Builder",
        description:
          "Strategy doc → asset generation → copy variants → A/B setup → launch checklist.",
      },
      {
        name: "Social Pipeline",
        description:
          "Content calendar → AI copy → image generation → platform formatting → scheduling queue.",
      },
    ],
  },
]

export default function TracksPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Tracks"
        description="Pick one. Build something that works."
      />

      <AnimatedGroup className="grid gap-4 md:grid-cols-2" stagger={80}>
        {tracks.map((track) => (
          <div
            key={track.id}
            className="glass rounded-xl flex flex-col overflow-hidden"
            style={{ borderLeftColor: track.accent, borderLeftWidth: "3px" }}
          >
            <div className="p-5 flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className="flex size-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `color-mix(in oklch, ${track.accent} 15%, transparent)` }}
                >
                  <track.icon
                    className="size-4"
                    style={{ color: track.accent }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold">{track.title}</h3>
                  <Badge variant="outline" className="text-[10px] tabular-nums">
                    {track.pipelines.length} pipelines
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{track.mission}</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="pipelines" className="border-none">
                  <AccordionTrigger className="text-sm py-2 text-muted-foreground hover:text-foreground">
                    Suggested Pipelines
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-1">
                      {track.pipelines.map((pipeline) => (
                        <div key={pipeline.name} className="space-y-1">
                          <p className="text-sm font-medium">
                            {pipeline.name}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {pipeline.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        ))}
      </AnimatedGroup>
    </div>
  )
}
