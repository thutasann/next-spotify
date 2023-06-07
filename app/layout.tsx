import './globals.css'
import { Figtree } from 'next/font/google'
import { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToastProvider from '@/providers/ToastProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import Player from '@/components/Player'
import getActiveProductswithPrices from '@/actions/getActiveProductswithPrices'

const fightree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Rebuild',
  description: 'This is the Soptify Clone built with NEXTJS13',
  icons: './logo.png',
}

export const revalidate = 3000

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const userSongs = await getSongsByUserId()
  const products = await getActiveProductswithPrices()

  return (
    <html lang='en'>
      <body className={fightree.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
