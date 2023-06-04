import './globals.css'
import { Figtree } from 'next/font/google'

const fightree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Spotify',
  description: 'This is the Soptify Clone built with NEXTJS13',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={fightree.className}>{children}</body>
    </html>
  )
}
