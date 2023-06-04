'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from '@/commons/Button'

interface IHeader {
  children: React.ReactNode
  className?: string
}

const Header = ({ className, children }: IHeader) => {
  const router = useRouter()
  const handleLogut = () => {}
  return (
    <div className={twMerge('h-fit bg-gradient-to-b from-emerald-800 p-6', className)}>
      <div className='w-full mb-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>
          <button
            onClick={() => router.back()}
            className='rounded-full bg-primary-dark flex items-center justify-center hove:text-primary-dark/80 transition-all duration-500 ease-in-out'
          >
            <RxCaretLeft className='text-neutral-400 hover:text-white' size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className='rounded-full bg-primary-dark flex items-center justify-center hove:text-primary-dark/80 transition-all duration-500 ease-in-out'
          >
            <RxCaretRight className='text-neutral-400 hover:text-white' size={35} />
          </button>
        </div>

        <div className='flex md:hidden gap-x-2 items-center'>
          <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition-all duration-500 ease-in-out'>
            <HiHome className='text-black' size={20} />
          </button>
          <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition-all duration-500 ease-in-out'>
            <BiSearch className='text-black' size={20} />
          </button>
        </div>

        <div className='flex justify-between items-center gap-x-4'>
          <div>
            <Button onClick={() => {}} className='!bg-transparent text-neutral-300 font-medium'>
              Sign Up
            </Button>
          </div>
          <div>
            <Button onClick={() => {}} className='!bg-white !text-primary-dark px-6 py-2'>
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

export default Header