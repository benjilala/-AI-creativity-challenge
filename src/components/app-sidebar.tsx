"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Layers,
  Wrench,
  Calendar,
  Presentation,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

const navGroups = [
  {
    label: null,
    items: [
      { title: "Dashboard", href: "/", icon: LayoutDashboard },
    ],
  },
  {
    label: "Guide",
    items: [
      { title: "Tracks", href: "/tracks", icon: Layers },
      { title: "Toolkit", href: "/toolkit", icon: Wrench },
      { title: "Sprint", href: "/sprint", icon: Calendar },
      { title: "Demo Day", href: "/demo-day", icon: Presentation },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-5">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="text-sm font-extrabold tracking-tight text-chaos">
            Structured Chaos
          </span>
          <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
            AI Creativity Challenge
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group, i) => (
          <SidebarGroup key={group.label ?? "home"}>
            {group.label && (
              <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium">
                {group.label}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href)
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link href={item.href}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
            {i < navGroups.length - 1 && <SidebarSeparator className="my-1 opacity-30" />}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
