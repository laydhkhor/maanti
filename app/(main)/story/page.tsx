'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-light pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark mb-6 tracking-tight">
              The Artist&apos;s <span className="font-script text-primary font-normal text-6xl md:text-8xl italic">Journey</span>
            </h1>
            <p className="text-dark/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              From childhood doodles to intricate masterpieces, discover the passion and dedication behind Manti Studio.
            </p>
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-secondary/30 rounded-full blur-3xl -z-10 pointer-events-none" />
        </div>

        {/* Section 1: The Beginning */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 lg:mb-48 relative">
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-[12rem] font-serif font-bold text-dark/5 select-none hidden lg:block z-0">01</div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-5/12 relative aspect-[3/4] z-10"
          >
            <Image
              src="https://picsum.photos/seed/story1/800/1000"
              alt="Manti's early work"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/30 -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-7/12 z-10 lg:pl-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8">Where It All Began</h2>
            <div className="space-y-6 text-lg text-dark/70 font-light leading-relaxed">
              <p>
                My journey with henna started when I was just a little girl, watching my grandmother create magic on my hands during festivals. The earthy scent of the paste and the intricate patterns fascinated me.
              </p>
              <p>
                What began as a hobby soon turned into a deep-rooted passion. I spent hours practicing on paper, friends, and family, slowly refining my technique and developing my own unique style that blends traditional motifs with modern elegance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 2: The Evolution */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 mb-32 lg:mb-48 relative">
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-[12rem] font-serif font-bold text-dark/5 select-none hidden lg:block z-0">02</div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-6/12 relative aspect-[4/3] z-10"
          >
            <Image
              src="https://picsum.photos/seed/story2/1000/800"
              alt="Resin art process"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-6 -left-6 w-full h-full border border-primary/30 -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-6/12 z-10 lg:pr-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8">Discovering Resin</h2>
            <div className="space-y-6 text-lg text-dark/70 font-light leading-relaxed">
              <p>
                As an artist, I am always looking for new mediums to express my creativity. A few years ago, I stumbled upon resin art, and it was love at first pour.
              </p>
              <p>
                Resin allows me to capture the fluidity of colors and preserve delicate elements like flowers and gold leaf in a glass-like finish. It&apos;s a mesmerizing process that requires patience, precision, and a touch of unpredictability. Today, I create bespoke resin pieces that serve as functional art for your home or special events.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 3: The Philosophy */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 text-center p-12 md:p-24 border border-dark/5 bg-white/50 backdrop-blur-sm"
          >
            <span className="text-6xl font-serif text-primary/30 leading-none absolute top-12 left-12 md:top-20 md:left-20">&quot;</span>
            <h2 className="text-xs font-medium text-dark/40 uppercase tracking-widest mb-12">My Philosophy</h2>
            <p className="text-2xl md:text-4xl text-dark font-serif leading-relaxed mb-12 relative z-10">
              Art is not just about what you create, but how you make people feel. Whether it&apos;s the joy of a bride seeing her mehendi stain or the awe of holding a custom resin piece, I strive to create art that resonates with the soul.
            </p>
            <p className="text-sm text-dark font-medium uppercase tracking-widest">
              — Manti
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
