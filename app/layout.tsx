import './globals.css'
import { Figtree } from 'next/font/google'
import { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToastProvider from '@/providers/ToastProvider'

const fightree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Rebuild',
  description: 'This is the Soptify Clone built with NEXTJS13',
  icons: './logo.png',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={fightree.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
