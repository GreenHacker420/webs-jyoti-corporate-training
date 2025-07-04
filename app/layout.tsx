import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ImageProtectionProvider } from "@/components/careers/image-protection-provider"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Webs Jyoti - Data Analytics and Excel Training Institute",
  description:
    "Leading corporate training provider with 17+ years of experience in data analytics, Excel, Power BI, and MIS reporting. Transform your career with our expert training programs.",
  keywords:
    "data analytics training, excel training, power bi training, corporate training, MIS reporting, business intelligence, webs jyoti",
  authors: [{ name: "The GreenHacker" }],
  creator: "The GreenHacker"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ImageProtectionProvider>
            {children}
            <Toaster />
          </ImageProtectionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
