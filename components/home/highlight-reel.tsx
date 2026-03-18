'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const highlights = [
  'https://picsum.photos/seed/highlight1/800/800',
  'https://picsum.photos/seed/highlight2/800/800',
  'https://picsum.photos/seed/highlight3/800/800',
  'https://picsum.photos/seed/highlight4/800/800',
  'https://picsum.photos/seed/highlight5/800/800',
];

export function HighlightReel() {
  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
          The Highlight Reel
        </h2>
        <p className="text-dark/60 max-w-2xl mx-auto text-lg">
          A glimpse into our most cherished creations.
        </p>
      </div>

      <div className="relative w-full flex gap-4 py-8">
        <motion.div
          className="flex gap-4 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {/* Duplicate for infinite scroll effect */}
          {[...highlights, ...highlights].map((src, idx) => (
            <div
              key={idx}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shrink-0 shadow-xl shadow-dark/5"
            >
              <Image
                src={src}
                alt={`Highlight ${idx}`}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
