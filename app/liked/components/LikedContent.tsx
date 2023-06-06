'use client'

import MediaItem from '@/components/MediaItem'
import { useUser } from '@/hooks/useUser'
import { Song } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

interface ILikedContent {
  songs: Song[]
}

const LikedContent: React.FC<ILikedContent> = ({ songs }) => {
  const router = useRouter()
  const { isLoading, user } = useUser()
  console.log('songs', songs)

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/')
    }
  }, [isLoading, user, router])

  if (songs?.length === 0) {
    return <div className='flex flex-col gap-y-2 w-full px-6 text-neutral-600'>No liked songs.</div>
  }

  return (
    <div className='flex flex-col gap-y-2 w-full p-6'>
      {songs?.map(song => (
        <div className='flex items-center gap-x-4 w-full' key={song.id}>
          <div className='flex-1'>
            <MediaItem onClick={() => {}} data={song} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default LikedContent
