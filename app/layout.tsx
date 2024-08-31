import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from './AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VTUBE',
  description: 'VTUBE is video-sharing platform that allows users to upload, view, and share videos. It was created in 2005 and has since become one of the largest social media and entertainment platforms globally. Users can find a wide variety of content on YouTube, including music videos, tutorials, vlogs, documentaries, and more. It has also become a platform for content creators and influencers to connect with their audiences and monetize their videos through advertising and other means. YouTube has a vast and diverse user base, making it a significant source of information, entertainment, and community engagement on the internet.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
    </AuthProvider>
  )
}
