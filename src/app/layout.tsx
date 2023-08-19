import SidebarNav from '@/components/SidebarNav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 absolute min-w-[1024px] w-full p-4`}>
        <SidebarNav />
        <main className='relative flex flex-col flex-wrap w-auto ml-[300px] space-y-4 items-center justify-center' suppressContentEditableWarning>
          {children}
        </main>
      </body>
    </html>
  )
}
