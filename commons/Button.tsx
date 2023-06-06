import React, { forwardRef } from 'react'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButton>(({ className, children, disabled, type = 'button', ...props }, ref) => {
  return (
    <button
      type={type}
      className={`w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50  text-primary-dark font-bold hover:opacity-75 transition-all ease-in-out duration-700, ${className}`}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
