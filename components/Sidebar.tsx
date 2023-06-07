'use client'

import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from '@/commons/Box'
import SidebarItem from './SidebarItem'
import Library from './Library'
import { IRoutes, Song } from '@/types'
import usePlayer from '@/hooks/usePlayer'
import { twMerge } from 'tailwind-merge'

interface ISdidebar {
  children: React.ReactNode
  songs: Array<Song>
}

const Sidebar = ({ children, songs }: ISdidebar) => {
  const pathname = usePathname()
  const player = usePlayer()

  const routes = useMemo<IRoutes[]>(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  )

  return (
    <div className={twMerge('flex h-full', player.activeId && 'h-[calc(100% - 80px)]')}>
      <div className='hidden md:flex flex-col gap-y-2 bg-primary-black h-full w-[230px] p-2'>
        <Box className='bg-neutral-900 rounded-lg'>
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map(item => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className='rounded-lg overflow-y-auto h-full bg-neutral-900'>
          <Library songs={songs} />
        </Box>
      </div>
      <main className='h-full flex-1 overflow-y-auto py-2'>{children}</main>
    </div>
  )
}

export default Sidebar
