import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Wellbeing Hub - Quality Healthcare, Anytime, Anywhere",
  description:
    "Book verified doctors, diagnostic tests, wellbeing services and health packages across partner hospitals. One place for consultations, health cards and your medical records.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
