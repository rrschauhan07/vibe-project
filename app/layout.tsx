import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Portfolio | Rishi Raj Singh Chauhan',
    template: '%s | Portfolio'
  },
  description: 'AI Developer and Cybersecurity Expert building modern solutions',
  keywords: ['portfolio', 'developer', 'designer', 'web development'],
  authors: [{ name: 'Rishi Raj Singh Chauhan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Portfolio | Rishi Raj Singh Chauhan',
    description: 'AI Developer and Cybersecurity Expert building modern solutions',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Rishi Raj Singh Chauhan',
    description: 'AI Developer and Cybersecurity Expert building modern solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

