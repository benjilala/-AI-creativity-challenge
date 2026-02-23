import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SprintDayBadge } from "@/components/sprint-day-badge"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Structured Chaos — AI Creativity Challenge",
  description: "Automate the Obvious. Elevate the Important.",
}

export const viewport = {
  colorScheme: "dark" as const,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-14 items-center justify-between gap-4 border-b border-border/50 px-6">
              <div className="flex items-center gap-3">
                <SidebarTrigger className="-ml-2" />
                <span className="text-sm font-semibold tracking-tight text-foreground/80 hidden sm:inline">
                  Structured Chaos
                </span>
              </div>
              <SprintDayBadge />
            </header>
            <main className="flex-1 overflow-auto">
              <div className="mx-auto max-w-4xl px-6 py-8">
                {children}
              </div>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
