import { getSprintDay } from "@/lib/sprint"

export function SprintDayBadge() {
  const { current, total, status } = getSprintDay()

  if (status === "before") {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <div className="size-2 rounded-full bg-muted-foreground/40" />
        <span>Starting soon</span>
      </div>
    )
  }

  if (status === "complete") {
    return (
      <div className="flex items-center gap-2 text-sm text-success">
        <div className="size-2 rounded-full bg-success" />
        <span className="tabular-nums font-medium">Complete</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-sm text-chaos">
      <div className="size-2 rounded-full bg-chaos animate-pulse-glow" />
      <span className="tabular-nums font-medium">
        Day {current} of {total}
      </span>
    </div>
  )
}
