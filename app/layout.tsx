import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meetbound Agency — Cold Email & LinkedIn Lead Generation',
  description: 'We build AI-powered outreach systems that generate qualified leads on LinkedIn and email. Stop chasing. Start converting.',
  openGraph: {
    title: 'Meetbound Agency',
    description: 'AI-powered cold email & LinkedIn outreach that converts.',
    url: 'https://meetbound.agency',
    siteName: 'Meetbound Agency',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meetbound Agency',
    description: 'AI-powered cold email & LinkedIn outreach that converts.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
