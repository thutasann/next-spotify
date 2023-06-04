'use client'

import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from '@/commons/Box'
import SidebarItem from './SidebarItem'

interface ISdidebar {
  children: React.ReactNode
}

const Sidebar = ({ children }: ISdidebar) => {
  const pathname = usePathname()

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
        href: '/serach',
      },
    ],
    [pathname]
  )

  return (
    <div className='flex h-full'>
      <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[200px] p-2'>
        <Box className='bg-neutral-900'>
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map(item => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className='overflow-y-auto h-full bg-neutral-900 px-5 py-4'>Song Library</Box>
      </div>
    </div>
  )
}

export default Sidebar
