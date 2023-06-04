import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IBox {
  children: React.ReactNode
  className?: string
}

const Box = ({ children, className }: IBox) => {
  return <div className={twMerge('rounded-lg h-fit w-full', className)}>{children}</div>
}

export default Box
