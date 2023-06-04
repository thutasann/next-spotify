'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

interface IListItem {
  image: string
  name: string
  href: string
}

const ListItem: React.FC<IListItem> = ({ image, name, href }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(href)
  }

  return (
    <button
      onClick={onClick}
      className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition-all duration-500 ease-in-out pr-4'
    >
      <Image className='object-cover' width={64} height={64} src={image} alt='Liked Image' priority fetchPriority='high' />
      <p className='font-medium truncate py-5'>{name}</p>
      <div className='absolute transition-all duration-400 ease-in-out opacity-0 rounded-full felx items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110'>
        <FaPlay className='text-black' />
      </div>
    </button>
  )
}

export default ListItem
