'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Nitin Chaudhary
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#portfolio" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="#skills" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <a 
              href="https://cal.com/nitinnennn" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover-lift hover:bg-secondary text-primary-foreground px-6 py-2 rounded-full transition-colors"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#portfolio" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="#skills" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="hover-lift text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <a 
                href="https://cal.com/nitinnennn" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover-lift hover:bg-secondary text-primary-foreground px-6 py-2 rounded-full transition-colors text-center"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}