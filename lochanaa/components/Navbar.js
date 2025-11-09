'use client'

import { Menu, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out bg-blue-600/10 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 lg:h-16">

          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse ">
              Lochanaa
            </span>
          </Link>
          
        
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'About', 'Projects'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 ease-out group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/10"></div>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              </Link>
            ))}
            
        
            <Link
              href="#contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get In Touch
            </Link>
          </div>

        {/* Mobile Menu*/}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              {isOpen ? <XIcon /> : <Menu />}
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10`}>
        <div className="px-4 py-6 space-y-3">
          {['Home', 'About', 'Projects'].map((item, index) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-white/90 hover:text-white font-medium rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 transform hover:translate-x-2`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 mt-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}