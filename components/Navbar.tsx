'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-width section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            Portfolio
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/contact" label="Contact" />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative text-charcoal-700 hover:text-charcoal-900 font-medium transition-colors duration-200 group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}

