"use client"

import { useEffect, useState, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { AnimatedGroup } from "@/components/animated-group"
import { Plus, RotateCcw } from "lucide-react"

const requiredTools = [
  {
    name: "Cursor",
    tag: "Pro",
    description:
      "AI-native code editor. Primary development environment for all teams.",
  },
  {
    name: "shadcn Studio MCP",
    tag: "MCP",
    description:
      "Component generation and management via Model Context Protocol.",
  },
  {
    name: "Figma MCP",
    tag: "MCP",
    description:
      "Design-to-code bridge. Extract designs directly into your build pipeline.",
  },
]

interface Tool {
  id: string
  name: string
  category: string
  link: string
  notes: string
}

const STORAGE_KEY = "structured-chaos-tools"

const categories = [
  "Design",
  "Automation",
  "Research",
  "Product",
  "API",
  "Other",
]

const defaultTools: Tool[] = [
  { id: "1", name: "Exactly.ai", category: "Design", link: "", notes: "" },
  { id: "2", name: "Nano Banana", category: "Design", link: "", notes: "" },
  { id: "3", name: "Midjourney", category: "Design", link: "", notes: "" },
  { id: "4", name: "Adobe Firefly", category: "Design", link: "", notes: "" },
  { id: "5", name: "Runway", category: "Design", link: "", notes: "" },
  { id: "6", name: "Canva AI", category: "Design", link: "", notes: "" },
  { id: "7", name: "Zapier", category: "Automation", link: "", notes: "" },
  { id: "8", name: "Make", category: "Automation", link: "", notes: "" },
  { id: "9", name: "n8n", category: "Automation", link: "", notes: "" },
  { id: "10", name: "Notion AI", category: "Product", link: "", notes: "" },
  { id: "11", name: "Linear AI", category: "Product", link: "", notes: "" },
  { id: "12", name: "OpenAI API", category: "API", link: "", notes: "" },
  { id: "13", name: "Anthropic API", category: "API", link: "", notes: "" },
]

export default function ToolkitPage() {
  const [tools, setTools] = useState<Tool[]>(defaultTools)
  const [mounted, setMounted] = useState(false)

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [link, setLink] = useState("")
  const [notes, setNotes] = useState("")

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setTools(JSON.parse(stored))
      } catch {
        setTools(defaultTools)
      }
    }
  }, [])

  const persist = useCallback((next: Tool[]) => {
    setTools(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }, [])

  const handleAdd = () => {
    if (!name.trim()) return
    const newTool: Tool = {
      id: Date.now().toString(),
      name: name.trim(),
      category: category || "Other",
      link: link.trim(),
      notes: notes.trim(),
    }
    persist([...tools, newTool])
    setName("")
    setCategory("")
    setLink("")
    setNotes("")
  }

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY)
    setTools(defaultTools)
  }

  const groupedTools = tools.reduce<Record<string, Tool[]>>((acc, tool) => {
    const cat = tool.category || "Other"
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(tool)
    return acc
  }, {})

  if (!mounted) {
    return (
      <div className="space-y-10">
        <PageHeader
          title="Toolkit"
          description="What you'll build with. Three required tools, plus anything else that helps."
        />
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass rounded-xl h-24 animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <PageHeader
        title="Toolkit"
        description="What you'll build with. Three required tools, plus anything else that helps."
      />

      <Section title="Required Foundation">
        <AnimatedGroup className="grid gap-4 md:grid-cols-3" stagger={80}>
          {requiredTools.map((tool) => (
            <div key={tool.name} className="glass rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold">{tool.name}</h3>
                <Badge
                  variant="outline"
                  className="text-[10px] font-medium border-chaos/30 text-chaos bg-chaos-muted"
                >
                  {tool.tag}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </AnimatedGroup>
        <p className="text-xs text-muted-foreground mt-3">
          All teams build on this baseline so systems are transferable.
        </p>
      </Section>

      <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />

      <Section title="Optional Extras">
        <div className="space-y-6">
          {Object.entries(groupedTools).map(([cat, catTools]) => (
            <div key={cat} className="space-y-2">
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {cat}
              </h3>
              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {catTools.map((tool) => (
                  <div key={tool.id} className="glass rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">{tool.name}</p>
                      <Badge variant="outline" className="text-[10px]">
                        {tool.category}
                      </Badge>
                    </div>
                    {tool.link && (
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-chaos/70 hover:text-chaos mt-1 block truncate transition-colors"
                      >
                        {tool.link}
                      </a>
                    )}
                    {tool.notes && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {tool.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />

      <Section title="Add a Tool">
        <div className="glass rounded-xl p-5 space-y-4">
          <p className="text-sm font-semibold">Suggest a tool</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="tool-name" className="text-xs font-medium text-muted-foreground">
                Tool name *
              </label>
              <Input
                id="tool-name"
                placeholder="e.g. Figma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="tool-category" className="text-xs font-medium text-muted-foreground">
                Category
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="tool-category" className="bg-background/50">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="tool-link" className="text-xs font-medium text-muted-foreground">
              Link (optional)
            </label>
            <Input
              id="tool-link"
              placeholder="https://..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="tool-notes" className="text-xs font-medium text-muted-foreground">
              Notes (optional)
            </label>
            <Textarea
              id="tool-notes"
              placeholder="What's it good for?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              className="bg-background/50"
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleAdd}
              disabled={!name.trim()}
              className="bg-chaos text-chaos-foreground hover:bg-chaos/90"
            >
              <Plus className="size-4 mr-1" />
              Add Tool
            </Button>
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="size-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
