'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-light pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-secondary/50 blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/20 blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Text Content - Left Side */}
        <div className="lg:col-span-7 relative z-20 pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Background Script Text */}
            <span className="absolute -top-16 -left-8 text-[120px] md:text-[180px] lg:text-[220px] font-[family-name:var(--font-script)] text-primary/5 select-none whitespace-nowrap pointer-events-none">
              Manti Studio
            </span>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-[1px] w-12 bg-primary" />
                <span className="text-primary text-sm md:text-base tracking-[0.3em] uppercase font-medium">
                  Mehendi & Resin Art
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-dark leading-[1.1] mb-8">
                Crafting stories <br />
                <span className="italic font-light text-primary">in henna</span> <br />
                and resin.
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg md:text-xl text-dark/80 max-w-lg font-light leading-relaxed mb-10"
              >
                Where ancient traditions meet modern preservation. Every stroke is a memory, every piece a timeless heirloom.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-wrap items-center gap-6"
              >
                <Link
                  href="/gallery"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-dark text-light overflow-hidden rounded-none"
                >
                  <span className="absolute inset-0 w-full h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.25,0.1,0.25,1]" />
                  <span className="relative font-medium tracking-wide uppercase text-sm">Discover the Art</span>
                </Link>
                <Link
                  href="/story"
                  className="text-dark font-medium uppercase tracking-widest text-sm border-b border-dark/30 pb-1 hover:border-dark transition-colors"
                >
                  The Artist
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Image Composition - Right Side */}
        <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full z-10"
          >
            <div className="relative w-full h-full rounded-t-full overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/mantihero1/800/1200"
                alt="Intricate Bridal Mehendi"
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark/10 mix-blend-overlay" />
            </div>
          </motion.div>

          {/* Floating Accent Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-0 -bottom-[25px] md:-bottom-10 md:-left-10 lg:-left-20 w-48 h-64 md:w-64 md:h-80 z-20 shadow-2xl"
          >
            <Image
              src="https://picsum.photos/seed/mantihero2/600/800"
              alt="Custom Resin Art"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-light/20" />
          </motion.div>
          
          {/* Decorative Gold Accent */}
          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute top-10 -right-5 w-24 h-24 border-t border-r border-accent z-0"
          />
        </div>

      </div>
    </section>
  );
}
