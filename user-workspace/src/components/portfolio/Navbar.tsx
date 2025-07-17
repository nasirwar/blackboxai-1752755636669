'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground">Nasir</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary"
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('projects')}
                className="text-foreground hover:text-primary"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary w-full justify-start"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary w-full justify-start"
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('projects')}
                className="text-foreground hover:text-primary w-full justify-start"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary w-full justify-start"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
