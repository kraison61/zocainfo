'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-down ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-primary/5' : 'bg-white/95 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110">
              Q
            </div>
            <span className="font-display text-2xl font-bold text-primary-dark">
              QuickCash
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#how" className="nav-link">
              How It Works
            </Link>
            <Link href="#benefits" className="nav-link">
              Benefits
            </Link>
            <Link href="#requirements" className="nav-link">
              Requirements
            </Link>
            <Link href="#testimonials" className="nav-link">
              Reviews
            </Link>
            <Link 
              href="#apply" 
              className="btn-primary"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          @apply text-gray-800 font-medium transition-colors hover:text-primary relative;
        }
        .nav-link::after {
          content: '';
          @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300;
        }
        .nav-link:hover::after {
          @apply w-full;
        }
        .btn-primary {
          @apply bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30;
        }
      `}</style>
    </nav>
  )
}
