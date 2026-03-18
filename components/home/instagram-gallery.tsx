'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const instaImages = [
  'https://picsum.photos/seed/insta1/400/400',
  'https://picsum.photos/seed/insta2/400/400',
  'https://picsum.photos/seed/insta3/400/400',
  'https://picsum.photos/seed/insta4/400/400',
  'https://picsum.photos/seed/insta5/400/400',
  'https://picsum.photos/seed/insta6/400/400',
];

export function InstagramGallery() {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
          Follow the Journey
        </h2>
        <p className="text-dark/60 max-w-2xl mx-auto text-lg mb-8">
          Join us on Instagram for daily inspiration, behind-the-scenes, and our latest creations.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
        >
          <Instagram size={20} />
          @manti.studio
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 px-2 md:px-4">
        {instaImages.map((src, idx) => (
          <motion.a
            href="#"
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-xl block"
          >
            <Image
              src={src}
              alt={`Instagram post ${idx}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
