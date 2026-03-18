'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Story', path: '/story' },
  { name: 'Reviews', path: '/reviews' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-light/90 backdrop-blur-md border-b border-dark/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-50 group flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-dark group-hover:text-primary transition-colors">
              Manti
            </span>
            <span className="text-primary font-serif italic text-xl md:text-2xl">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                    isActive ? 'text-dark' : 'text-dark/50 hover:text-dark'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            
            <div className="w-px h-4 bg-dark/10 mx-2" />
            
            <Link
              href="/login"
              className="text-xs uppercase tracking-[0.15em] font-medium px-6 py-2.5 border border-dark/20 text-dark hover:bg-dark hover:text-light transition-all duration-300 rounded-full"
            >
              Sign In
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </motion.div>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-light flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1000/1000')] opacity-[0.03] mix-blend-multiply pointer-events-none" />
            
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl md:text-5xl font-serif tracking-tight transition-colors ${
                      pathname === link.path ? 'text-primary italic' : 'text-dark hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] font-medium px-8 py-3 border border-dark text-dark hover:bg-dark hover:text-light transition-all duration-300 rounded-full inline-block"
                >
                  Sign In
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
