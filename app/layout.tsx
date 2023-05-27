import Navbar from "@/components/navbar"
import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import { Footer } from "@/components/Footer"

const jb = JetBrains_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio",
  description: "Malik Sharkawy Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jb.className}>
        <Navbar />
        <>{children}</>
        <Footer />
      </body>
    </html>
  )
}
