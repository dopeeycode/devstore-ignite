import type { Metadata } from 'next'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'

const spaceGroteskFont = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
  title: 'devstore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGroteskFont.variable}>{children}</body>
    </html>
  )
}
