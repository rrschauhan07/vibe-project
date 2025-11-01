'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-electric-600 text-white hover:bg-electric-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-electric-600 text-electric-600 hover:bg-electric-50',
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`

  // If href is provided, render as Link
  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      </motion.div>
    )
  }

  // Otherwise render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

