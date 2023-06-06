'use client'

import { Song } from '@/types'
import React from 'react'
import LikeButton from './LikeButton'
import MediaItem from './MediaItem'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { AiFillBackward, AiFillForward, AiFillStepBackward } from 'react-icons/ai'

interface IPlayerContent {
  song: Song
  songUrl: string
}

const PlayerContent: React.FC<IPlayerContent> = ({ song, songUrl }) => {
  const Icon = true ? BsPauseFill : BsPlayFill
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 h-full'>
      <div className='flex w-full justify-start'>
        <div className='flex items-center gap-x-4'>
          <MediaItem data={song} onClick={() => {}} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div className='flex md:hidden col-auto w-full justify-end items-center'>
        <div onClick={() => {}} className='h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer'>
          <Icon size={30} className='text-primary-dark' />
        </div>
      </div>

      <div className='hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6'>
        <AiFillBackward onClick={() => {}} size={30} className='text-neutral-400 cursor-pointer hover:text-white transition' />
        <div onClick={() => {}} className='h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer'>
          <Icon size={30} className='text-primary-dark' />
        </div>
        <AiFillForward onClick={() => {}} size={30} className='text-neutral-400 cursor-pointer hover:text-white transition' />
      </div>
    </div>
  )
}

export default PlayerContent
