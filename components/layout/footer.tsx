import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-light pt-32 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="group flex items-center gap-2 mb-8">
              <span className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-light group-hover:text-primary transition-colors">
                Manti
              </span>
              <span className="text-primary font-serif italic text-3xl md:text-4xl">.</span>
            </Link>
            <p className="text-light/70 max-w-sm text-sm leading-relaxed font-light mb-10">
              Crafting stories in henna and resin. A premium studio dedicated to intricate designs, bespoke art pieces, and unforgettable experiences.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-light/60 hover:text-primary transition-colors duration-300" aria-label="Follow us on Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-light/60 hover:text-primary transition-colors duration-300" aria-label="Follow us on Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-light/60 hover:text-primary transition-colors duration-300" aria-label="Follow us on Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="mailto:hello@manti-studio.com" className="text-light/60 hover:text-primary transition-colors duration-300" aria-label="Email us">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12 text-center sm:text-left">
            <div>
              <h3 className="text-xs font-medium text-light/50 uppercase tracking-[0.2em] mb-8">Explore</h3>
              <ul className="space-y-4 text-sm font-light text-light/80">
                <li>
                  <Link href="/gallery" className="hover:text-primary transition-colors duration-300">Gallery</Link>
                </li>
                <li>
                  <Link href="/story" className="hover:text-primary transition-colors duration-300">Our Story</Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-primary transition-colors duration-300">Reviews</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium text-light/50 uppercase tracking-[0.2em] mb-8">Services</h3>
              <ul className="space-y-4 text-sm font-light text-light/80">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-300">Bridal Mehendi</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-300">Resin Art</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-300">Workshops</Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-medium text-light/50 uppercase tracking-[0.2em] mb-8">Legal</h3>
              <ul className="space-y-4 text-sm font-light text-light/80">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-light/60 tracking-wider">
          <p>&copy; {new Date().getFullYear()} Manti Studio. All rights reserved.</p>
          <p>Designed with <span className="text-primary">♥</span> for art lovers.</p>
        </div>
      </div>
    </footer>
  );
}
