interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-3 pb-2">
      <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
      {description && (
        <p className="text-base text-muted-foreground font-light">{description}</p>
      )}
      <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
    </div>
  )
}
