'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function ArtistStoryPreview() {
  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          
          {/* Text Side - Overlapping */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-5/12 relative z-20 lg:-mr-24 bg-light p-10 md:p-16 shadow-2xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">The Artist</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-8 leading-[1.1]">
              A journey of <br />
              <span className="font-[family-name:var(--font-script)] text-primary font-normal text-6xl md:text-7xl lg:text-8xl leading-[0.5] block mt-4 mb-6">
                passion
              </span>
              and precision.
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-dark/70 font-light leading-relaxed mb-10">
              <p>
                What began as a childhood fascination with intricate henna patterns has blossomed into a lifelong dedication to art. 
              </p>
              <p>
                Every bridal design tells a unique love story, and every resin piece captures a fleeting moment in time, preserving it forever in a glass-like finish.
              </p>
            </div>
            
            <Link
              href="/story"
              className="group relative inline-flex items-center gap-2 text-dark font-medium uppercase tracking-widest text-sm pb-2"
            >
              <span className="relative z-10">Read the full story</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-dark transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-7/12 relative mt-12 lg:mt-0 z-10"
          >
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/artiststory/1000/1200"
                alt="Manti - The Artist"
                fill
                className="object-cover filter grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark/10 mix-blend-overlay" />
            </div>
            
            {/* Decorative Element */}
            <motion.div 
              initial={{ opacity: 0, rotate: 45 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent z-0" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
