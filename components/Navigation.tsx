'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-down ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-primary/5' : 'bg-white/95 backdrop-blur-lg'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="z-50 flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 text-xl font-bold text-white transition-transform bg-gradient-to-br from-primary to-primary-dark rounded-xl group-hover:scale-110">
              Q
            </div>
            <span className="text-2xl font-bold font-display text-primary-dark">
              QuickCash
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 md:flex">
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
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 p-2 transition-colors rounded-lg md:hidden hover:bg-primary-light"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-6 h-5">
              <span className={`block h-0.5 w-full bg-primary-dark transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`block h-0.5 w-full bg-primary-dark transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-full bg-primary-dark transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMobileMenuOpen(false)} style={{ top: '80px' }} />

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-20 left-0 right-0 bg-white shadow-2xl transition-all duration-300 ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="px-4 py-6 space-y-4">
          <Link 
            href="#how" 
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              
            </svg>
            How It Works
          </Link>
          
          <Link 
            href="#benefits" 
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              
            </svg>
            Benefits
          </Link>
          
          <Link 
            href="#requirements" 
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              
            </svg>
            Requirements
          </Link>
          
          <Link 
            href="#testimonials" 
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              
            </svg>
            Reviews
          </Link>
          
          <Link 
            href="#apply" 
            className="mobile-nav-cta"
            onClick={handleLinkClick}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              
            </svg>
            Apply Now
          </Link>
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
        .mobile-nav-link {
          @apply flex items-center gap-3 px-4 py-4 text-gray-800 font-medium rounded-xl transition-all duration-200 hover:bg-primary-light hover:text-primary-dark;
        }
        .mobile-nav-cta {
          @apply flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 mt-4;
        }
      `}</style>
    </nav>
  )
}
