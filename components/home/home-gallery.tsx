'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/seed/hg1/600/800', alt: 'Bridal Mehendi Design', title: 'Bridal Elegance', className: 'md:mt-0' },
  { id: 2, src: 'https://picsum.photos/seed/hg2/800/600', alt: 'Resin Art Tray', title: 'Ocean Resin Tray', className: 'md:mt-24' },
  { id: 3, src: 'https://picsum.photos/seed/hg3/600/900', alt: 'Festive Henna', title: 'Festive Patterns', className: 'md:mt-12' },
  { id: 4, src: 'https://picsum.photos/seed/hg4/800/800', alt: 'Custom Resin Coasters', title: 'Gold Leaf Coasters', className: 'md:mt-32' },
  { id: 5, src: 'https://picsum.photos/seed/hg5/600/700', alt: 'Minimalist Mehendi', title: 'Minimalist Art', className: 'md:mt-16' },
  { id: 6, src: 'https://picsum.photos/seed/hg6/800/1000', alt: 'Floral Resin Piece', title: 'Floral Preservation', className: 'md:mt-8' },
];

export function HomeGallery() {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-24 bg-light relative overflow-hidden">
      {/* Background script text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <span className="text-[150px] md:text-[250px] lg:text-[350px] font-[family-name:var(--font-script)] text-secondary/40 select-none whitespace-nowrap">
          Portfolio
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
              Curated Works
            </h2>
            <p className="text-dark/80 text-lg font-light">
              A selection of our most loved Mehendi designs and custom Resin Art pieces, crafted with passion and precision.
            </p>
          </div>
          <Link
            href="/gallery"
            className="group relative inline-flex items-center gap-2 text-dark font-medium uppercase tracking-widest text-sm pb-2"
          >
            <span className="relative z-10">View Full Gallery</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-dark transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {galleryImages.map((image, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={image.id}
                style={{ y: isMobile ? 0 : (isEven ? y1 : y2) }}
                className={`relative group cursor-pointer ${image.className}`}
              >
                <div className="relative overflow-hidden bg-secondary/20">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-serif font-medium text-dark group-hover:text-primary transition-colors duration-300">
                    {image.title}
                  </h3>
                  <div className="h-[1px] w-0 bg-primary mt-2 transition-all duration-500 group-hover:w-12" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
