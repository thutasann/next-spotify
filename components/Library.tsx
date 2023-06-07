'use client'

import React from 'react'
import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import useAuthModal from '@/hooks/useModal'
import { useUser } from '@/hooks/useUser'
import useUploadModal from '@/hooks/useUploadModal'
import { Song } from '@/types'
import MediaItem from './MediaItem'
import useOnPlay from '@/hooks/useOnPlay'
import useSubscribeModal from '@/hooks/useSubscribeModal'

const Library = ({ songs }: { songs: Song[] }) => {
  const subscribModal = useSubscribeModal()
  const authModal = useAuthModal()
  const uploadModal = useUploadModal()
  const { user, subscription } = useUser()
  const onPlay = useOnPlay(songs)

  const onClick = () => {
    if (!user) {
      return authModal.onOpen()
    }

    if (!subscription) {
      return subscribModal.onOpen()
    }

    return uploadModal.onOpen()
  }

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-5 py-4'>
        <div className='inline-flex items-center gap-x-2'>
          <TbPlaylist className='text-neutral-400' size={26} />
          <p className='text-neutral-400 font-medium text-md'>Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          className='text-neutral-400 cursor-pointer hover:text-white transition-all duration-500 ease-in-out'
        />
      </div>
      <div className='flex flex-col gap-y-2 mt-4 px-3'>
        {songs.length === 0 ? (
          <div className='text-neutral-400 text-sm'>No songs</div>
        ) : (
          <>
            {songs?.map(song => (
              <MediaItem key={song.id} onClick={(id: string) => onPlay(id)} data={song} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Library
