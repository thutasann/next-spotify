import useLoadImage from '@/hooks/useLoadImage'
import { Song } from '@/types'
import Image from 'next/image'
import React from 'react'
import PlayButton from './PlayButton'

interface ISongItem {
  onClick: (id: string) => void
  data: Song
}

const SongItem: React.FC<ISongItem> = ({ onClick, data }) => {
  const imagePath = useLoadImage(data)

  return (
    <div
      onClick={() => onClick(data.id)}
      className='relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/10 transition-all ease-in-out duration-500 p-3'
    >
      <div className='relative aspect-square w-full h-full rounded-md overflow-hidden'>
        <Image
          className='object-cover'
          src={imagePath || '/images/liked.png'}
          fill
          loading='lazy'
          placeholder='blur'
          blurDataURL={imagePath!}
          alt={data.title}
          quality={100}
          fetchPriority='auto'
        />
      </div>
      <div className='flex flex-col items-start w-full p-4 gap-y-1'>
        <p className='font-semibold truncate w-full'>{data.title}</p>
        <p className='text-neutral-400 truncate text-sm pb-4 w-full'>By {data.author}</p>
      </div>
      <div className='absolute bottom-24 right-5'>
        <PlayButton />
      </div>
    </div>
  )
}

export default SongItem
